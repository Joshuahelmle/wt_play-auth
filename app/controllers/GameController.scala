package controllers

import akka.actor._
import akka.stream.Materializer
import com.google.inject.Guice
import de.htwg.se.connect4.Connect4Module
import de.htwg.se.connect4.controller.controllerComponent.ControllerInterface
import de.htwg.se.connect4.controller.controllerComponent.controllerBaseImpl.State
import de.htwg.se.connect4.model.boardComponent.CellInterface
import de.htwg.se.connect4.util.Observer
import javax.inject.Singleton
import play.api.libs.json._
import play.api.libs.streams.ActorFlow
import play.api.mvc._
import utils.auth.DefaultEnv

import scala.concurrent.Future
import org.webjars.play.WebJarsUtil
import play.api.i18n.I18nSupport
import com.mohiva.play.silhouette.api.Silhouette
import com.mohiva.play.silhouette.api.actions.SecuredRequest



@Singleton
class GameController
(cc: ControllerComponents,
 silhouette: Silhouette[DefaultEnv])
(implicit
 system : ActorSystem,
 mat: Materializer,
 webJarsUtil: WebJarsUtil,
 assets: AssetsFinder
) extends AbstractController(cc) with I18nSupport {

  val injector = Guice.createInjector(new Connect4Module)
  val controller = injector.getInstance(classOf[ControllerInterface])
  object Connect4WebSocketActorFactory {
    def create(out: ActorRef) = {
      Props(new Connect4WebSocketActor(out))
    }
  }



  /**
   * Create an Action to render an HTML page.
   *
   * The configuration in the `routes` file means that this method
   * will be called when the application receives a `GET` request with
   * a path of `/`.
   */

  implicit val cellWrites = new Writes[CellInterface] {
    def writes(cell: CellInterface) = Json.obj(
      "isSet" -> cell.isSet,
      "color" -> cell.color

    )
  }

  def setCol(col : Int) = Action { implicit request : Request[AnyContent] =>
    controller.setCol(col)
    val json = controllerToJson()
    Ok(json)
  }

  def restartGame() : Unit = {
    controller.createNewBoard(controller.sizeOfRows, controller.sizeOfCols)
    //TODO: send new state to client
  }

  def undoTurn()  : Unit = {
    controller.undo()
    //TODO: send new state to client
  }

  def redoTurn() : Unit = {
    controller.redo
    //TODO: send new state to client
  }

  def quitGame() : Unit = {
    //TODO: checkout after Lobby implemention
    Redirect(s"/games")
  }

  def getJson()  = silhouette.SecuredAction.async { implicit request: SecuredRequest[DefaultEnv, AnyContent] =>
    val json = controllerToJson()
    Future.successful(Ok(json))
  }

  def controllerToJson() = {
    val board = controller.getBoard
    val state = State(controller.getCurrentPlayerIndex, controller.getPlayers, controller.getState.toString())
    Json.obj(
      "currentPlayerIndex" -> JsNumber(state.currentPlayerIndex),
      "state" -> JsString(state.state),
      "players" -> Json.toJson(
        for {
          index <- state.players.indices

        } yield {
          Json.obj(
            "name" -> state.players(index).playerName,
            "color" -> state.players(index).color,
            "piecesLeft" -> state.players(index).piecesLeft,
          )
        }

      ),
      "board" -> Json.obj(
        "row" -> JsNumber(board.sizeOfRows),
        "col" -> JsNumber(board.sizeOfCols),
        "cells" -> Json.toJson(
          for {
            row <- 0 until board.sizeOfRows
            col <- 0 until board.sizeOfCols
          } yield {
            Json.obj(
              "row" -> row,
              "col" -> col,
              "cell" -> Json.toJson(board.cell(row, col))
            )
          }
        )
      )
    )
  }

  def socket = WebSocket.accept[String,String] { request =>
    ActorFlow.actorRef {
      out => Connect4WebSocketActorFactory.create(out)
    }
  }

  class Connect4WebSocketActor(out : ActorRef) extends Actor with Observer {
    controller.add(this)
    override def receive: Receive = {
      case msg: String =>
        println(msg)
        val json: JsValue = Json.parse(msg)
        val _type = (json \ "_type").as[String]
        val _msg = (json \ "_msg").as[String]
        _type match {
          case "playTurn" => {
            val _col = (json \ "_col").as[Int]
            controller.setCol(_col)
          }
          case "undo" => controller.undo
          case "redo" => controller.redo
          case "quit" => {

            out ! ("quitGame")
          }
          case "restart" => restartGame()
          case _ => println("default case")

        }

    }

    def sendMsg(msg : String): Unit = {
      out ! msg
    }

     override def update()  = {
      sendMsg("done");
    }
  }


}
