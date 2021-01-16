package controllers

import akka.actor.{ Actor, ActorRef, ActorSystem, Props }
import akka.stream.Materializer
import de.htwg.se.connect4.util.Observer
import javax.inject.{ Inject, Singleton }
import play.api.libs.json
import play.api.libs.json.{ JsValue, Json }
import play.api.libs.streams.ActorFlow
import play.api.mvc.{ AnyContent, BaseController, ControllerComponents, Request, WebSocket }
import scala.concurrent.Future
import utils.auth.DefaultEnv
import play.api.mvc.{ AnyContent, ControllerComponents, WebSocket, _ }
import org.webjars.play.WebJarsUtil
import play.api.i18n.I18nSupport
import com.mohiva.play.silhouette.api.Silhouette
import com.mohiva.play.silhouette.api.actions.SecuredRequest

@Singleton
class LobbyController @Inject()
(controllerComponents: ControllerComponents,
 silhouette: Silhouette[DefaultEnv])
(implicit
 system: ActorSystem,
 mat: Materializer,
 webJarsUtil: WebJarsUtil,
 assets: AssetsFinder) extends AbstractController(controllerComponents) with I18nSupport {
  var games: Map[Int, GameController] = Map.empty[Int, GameController]
  var gameIdx = 0
  object Connect4LobbyWebSocketActorFactory {
    def create(out: ActorRef) = {
      Props(new Connect4LobbyWebSocketActor(out))
    }
  }

  def newGame() = silhouette.SecuredAction.async { implicit request: SecuredRequest[DefaultEnv, AnyContent] =>
    val game = new GameController(controllerComponents)

    games += (gameIdx -> game)
    print(games)
    val oldIdx = gameIdx
    gameIdx += 1
    Future.successful(Redirect(s"/games/$oldIdx"))
  }

  def index() = silhouette.SecuredAction.async { implicit request: SecuredRequest[DefaultEnv, AnyContent] =>
    Future.successful(Ok(views.html.games(games)))
  }

  def getGame(idx: Int) = silhouette.SecuredAction.async { implicit request: SecuredRequest[DefaultEnv, AnyContent] =>
    val game = games(idx)
    Future.successful(Ok(views.html.connect4.render(game.controller, idx)))
  }

  def initGame(idx: Int) = silhouette.SecuredAction.async { implicit request: SecuredRequest[DefaultEnv, AnyContent] =>
    val body: AnyContent = request.body
    val input = body.asFormUrlEncoded.get("inputField").map(_.toString)
    val game = games(idx)
    game.controller.addPlayer(input.head)
    Future.successful(Redirect(s"/games/$idx"))
  }

  def getJson(idx: Int) = silhouette.SecuredAction.async { implicit request: SecuredRequest[DefaultEnv, AnyContent] =>
    val game = games(idx)
    Future.successful(Ok(game.controllerToJson()))
  }

  def openSocket(idx: Int) = {
    val game = games(idx)
    game.socket
  }

  def getGames() = {
    Json.obj(
      "games" -> Json.toJson(
        for {
          game <- games

        } yield {
          Json.obj(
            "player1" -> game._2.controller.getPlayers(0).playerName,
            "player2" -> game._2.controller.getPlayers(1).playerName,
            "id" -> game._1
          )
        }

      )
    )
  }

  def createNewGame(player1: String, player2: String): Unit = {
    val game = new GameController(controllerComponents)

    games += (gameIdx -> game)
    print(games)
    val oldIdx = gameIdx
    gameIdx += 1

    val currentGame = games(oldIdx)
    currentGame.controller.addPlayer(player1)
    currentGame.controller.addPlayer(player2)

  }

  def createGame(player1: String, player2: String) = {
    createNewGame(player1, player2)

    Json.obj(
      "game" -> Json.toJson(
        Json.obj(
          "test" -> "test"
        )
      )
    )

  }

  def socket = WebSocket.accept[JsValue, JsValue] { request =>
    ActorFlow.actorRef {
      out => Connect4LobbyWebSocketActorFactory.create(out)
    }
  }

  class Connect4LobbyWebSocketActor(out: ActorRef) extends Actor {
    override def receive: Receive = {
      case msg: JsValue =>
        println(msg)
        val _type = (msg \ "_type").as[String]
        _type match {
          case "getGames" => out ! getGames
          case "createGame" => {
            val player1 = (msg \ "player1").as[String]
            val player2 = (msg \ "player2").as[String]
            out ! createGame(player1, player2)
          }
        }

    }

  }

}
