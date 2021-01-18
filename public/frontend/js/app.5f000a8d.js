(function(t){function e(e){for(var o,a,i=e[0],s=e[1],u=e[2],l=0,d=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);m&&m(e);while(d.length)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],o=!0,a=1;a<n.length;a++){var i=n[a];0!==r[i]&&(o=!1)}o&&(c.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},a={app:0},r={app:0},c=[];function i(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{"chunk-78da75e4":"8168be3c","chunk-b9cfc122":"ba7c4315",about:"207bc407","chunk-63b7b5e8":"3613c32d","chunk-69af26dd":"13097831"}[t]+".js"}function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-78da75e4":1,"chunk-b9cfc122":1,about:1,"chunk-63b7b5e8":1,"chunk-69af26dd":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var o="css/"+({about:"about"}[t]||t)+"."+{"chunk-78da75e4":"5e9e4710","chunk-b9cfc122":"5dcb0138",about:"8cc7ecdc","chunk-63b7b5e8":"18eb4cf8","chunk-69af26dd":"66d06d60"}[t]+".css",r=s.p+o,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var u=c[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===o||l===r))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===o||l===r)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var o=e&&e.target&&e.target.src||r,c=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=o,delete a[t],m.parentNode.removeChild(m),n(c)},m.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){a[t]=0})));var o=r[t];if(0!==o)if(o)e.push(o[2]);else{var c=new Promise((function(e,n){o=r[t]=[e,n]}));e.push(o[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(m);var n=r[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",d.name="ChunkLoadError",d.type=o,d.request=a,n[1](d)}r[t]=void 0}};var m=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/frontend/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var m=l;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},2033:function(t,e,n){},3738:function(t,e,n){},"39a6":function(t,e,n){"use strict";n("2033")},"417e":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lobby ma-6"},[n("div",{staticClass:"container"},[n("h1",[t._v("Lobby")]),n("div",{staticClass:"newGameContainer"},[0===t.games.length?n("p",{staticClass:"ma-0"},[t._v("There are currently no open Games, be the first to start playing!")]):t._e(),n("br")]),n("v-btn",{staticClass:"ml-16",attrs:{color:"primary",to:"/newGame"}},[t._v(" Start new Game ")]),t.games.length>0?n("p",[t._v(" These are the currently active games, join one if you want!"),n("br")]):t._e(),t._l(t.games,(function(e){return n("v-card",{key:e.id,attrs:{"max-width":"344",outlined:""}},[n("v-list-item",{attrs:{"two-line":""}},[n("v-list-item-content",[n("v-list-item-title",{staticClass:"headline mb-1"},[t._v(" Game "+t._s(e.id+1)+" ")]),n("div",[t._v(t._s(e.player1))]),n("div",[t._v(" "+t._s(e.player2))])],1),n("v-list-item-avatar",{attrs:{tile:"",size:"80",color:"grey"}})],1),n("v-card-actions",[n("v-btn",{attrs:{color:"primary",to:"game/"}},[t._v(" Join Game ")])],1)],1)}))],2)])},a=[],r=(n("2ca0"),n("bc3a"),{name:"Lobby",data:function(){return{games:[]}},created:function(){this.getGames()},methods:{getGames:function(){var t=this,e=!1,n="wt-connect4.herokuapp.com",o=("https://".concat(e?"localhost:9000":n),new WebSocket("wss://".concat(e?"localhost:9000":n,"/games/websocket")));o.onopen=function(t){o.send(JSON.stringify({_type:"getGames"}))},o.onerror=function(t){console.log(t)},o.onmessage=function(e){var n=JSON.parse(e.data);n.games&&(t.games=JSON.parse(e.data).games,o.close())}}},mounted:function(){var t=document.cookie;t.startsWith("authenticator=")||this.$router.push("login")}}),c=r,i=(n("4f88"),n("2877")),s=n("6544"),u=n.n(s),l=n("8336"),d=n("b0af"),m=n("99d9"),f=n("da13"),h=n("8270"),p=n("5d23"),b=Object(i["a"])(c,o,a,!1,null,null,null);e["default"]=b.exports;u()(b,{VBtn:l["a"],VCard:d["a"],VCardActions:m["a"],VListItem:f["a"],VListItemAvatar:h["a"],VListItemContent:p["a"],VListItemTitle:p["b"]})},"4f88":function(t,e,n){"use strict";n("3738")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",{attrs:{src:"assets/background.jpeg"}},[o("div",{attrs:{src:"assets/background.jpeg",id:"app"}},[o("v-navigation-drawer",{attrs:{app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[o("v-list",{attrs:{dense:"",nav:""}},t._l(this.navItems,(function(e){return o("v-list-item",{key:e.title,attrs:{link:"",to:e.to}},[o("v-list-item-icon",[o("v-icon",[t._v(t._s(e.icon))])],1),o("v-list-item-content",[o("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),1)],1),o("v-app-bar",{attrs:{app:""}},[o("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!t.drawer}}}),o("v-toolbar-title",{staticClass:"font-weight-bold d-inline-flex"},[t._v("C"),o("v-img",{staticClass:"img mr-0",attrs:{src:n("db06"),"max-height":"10","max-width":"10"}}),t._v("nnect 4")],1),o("v-spacer"),o("v-btn",{attrs:{to:"/login"}},[t._v(" Sign In")]),o("v-btn",{on:{click:function(e){return t.logout()}}},[t._v(" LogOut")]),o("v-btn",{attrs:{to:"/register"}},[t._v(" Sign Up ")])],1),o("v-main",[o("router-view")],1)],1)])},r=[],c={data:function(){return{drawer:null,navItems:[{title:"Lobby",icon:"mdi-account-group",to:"/lobby"},{title:"Rules",icon:"mdi-help-circle",to:"/"}]}},methods:{logout:function(){this.$store.dispatch("logout")}}},i=c,s=(n("e9e1"),n("2877")),u=n("6544"),l=n.n(u),d=n("7496"),m=n("40dc"),f=n("5bc1"),h=n("8336"),p=n("132d"),b=n("adda"),v=n("8860"),g=n("da13"),w=n("5d23"),_=n("34c3"),y=n("f6c4"),k=n("f774"),O=n("2fa4"),C=n("2a7f"),E=Object(s["a"])(i,a,r,!1,null,"fc53dd32",null),I=E.exports;l()(E,{VApp:d["a"],VAppBar:m["a"],VAppBarNavIcon:f["a"],VBtn:h["a"],VIcon:p["a"],VImg:b["a"],VList:v["a"],VListItem:g["a"],VListItemContent:w["a"],VListItemIcon:_["a"],VListItemTitle:w["b"],VMain:y["a"],VNavigationDrawer:k["a"],VSpacer:O["a"],VToolbarTitle:C["a"]});n("d3b7");var T=n("8c4f");n("9f78"),n("417e");o["a"].use(T["a"]);var S,L,A=[{path:"/lobby",name:"Lobby",component:function(){return Promise.all([n.e("chunk-b9cfc122"),n.e("about")]).then(n.bind(null,"417e"))}},{path:"/",name:"Rules",component:function(){return Promise.all([n.e("chunk-b9cfc122"),n.e("about")]).then(n.bind(null,"9f78"))}},{path:"/newGame",name:"new Game",component:function(){return Promise.all([n.e("chunk-b9cfc122"),n.e("about")]).then(n.bind(null,"b934"))}},{path:"/game",name:"game",component:function(){return n.e("chunk-78da75e4").then(n.bind(null,"7d36"))}},{path:"/login",name:"login",component:function(){return Promise.all([n.e("chunk-b9cfc122"),n.e("chunk-69af26dd")]).then(n.bind(null,"a55b"))}},{path:"/register",name:"register",component:function(){return Promise.all([n.e("chunk-b9cfc122"),n.e("chunk-63b7b5e8")]).then(n.bind(null,"73cf"))}}],j=new T["a"]({routes:A,mode:"history"}),x=j,G=n("2f62"),V=n("ade3"),N=n("bc3a"),D=n.n(N),P=n("1157"),R=n.n(P),$=n("d017"),B=!1,H="wt-connect4.herokuapp.com",U="https://".concat(B?"localhost:9000":H),W=new WebSocket("wss://".concat(B?"localhost:9000":H,"/games/websocket")),M={withCredentials:!0,headers:{"Content-Type":"application/json",Accept:"application/json"},crossdomain:!0},q={token:localStorage.getItem("user-token")||"",status:"",cookie:document.cookie,loggedIn:!1,games:[]},K={isAuthenticated:function(t){return!!t.token},authStatus:function(t){return t.status}},J=(S={},Object(V["a"])(S,$["c"],(function(t,e){var n=t.commit;return new Promise((function(t){D.a.post("".concat(U,"/signIn"),e,R.a.extend(M,{headers:{"Content-Type":"application/x-www-form-urlencoded"}})).then((function(t){n("SET_COOKIE",document.cookie),localStorage.setItem("user-token",t.token),n($["d"],t),n("SET_LOGEDIN",!0),x.push("lobby")})).catch((function(e){n($["a"],e),localStorage.removeItem("user-token"),t(e)}))}))})),Object(V["a"])(S,$["b"],(function(t){var e=t.commit;return new Promise((function(t){e($["b"]),e("SET_COOKIE",document.cookie),e("SET_LOGEDIN",!1),localStorage.removeItem("user-token"),t()}))})),Object(V["a"])(S,$["e"],(function(t,e){var n=t.commit;return new Promise((function(t){D.a.post("".concat(U,"/signUp"),e).then((function(t){n[$["e"]],x.push("login")})).catch((function(t){n($["a"],t)}))}))})),Object(V["a"])(S,"logout",(function(t){var e=t.commit;D.a.get("".concat(U,"/signOut"),M).then((function(){x.push("/login"),e("SET_COOKIE",document.cookie)})).catch((function(){console.log("Something went wrong")}))})),Object(V["a"])(S,"googleLogIn",(function(t){var e=t.commit;D.a.get("https://accounts.google.com/o/oauth2/v2/auth?client_id=456507613062-8o95kesvmbc22okoj0sa2o52015bfq20.apps.googleusercontent.com&redirect_uri=https://wt-connect4.herokuapp.com/frontend/lobby&response_type=token&scope=https://www.googleapis.com/auth/contacts",R.a.extend(M,{headers:{"X-Requested-With":"XMLHttpRequest","Content-Header":"Access-Control-Allow-Origin","Content-Type":"application/x-www-form-urlencoded"}})),D.a.get("".concat(U,"/authenticate/google"),R.a.extend(M,{headers:{"X-Requested-With":"XMLHttpRequest","Content-Header":"Access-Control-Allow-Origin","Content-Type":"application/x-www-form-urlencoded"}})).then((function(t){e("SET_COOKIE",document.cookie),localStorage.setItem("user-token",resp.token),e($["d"],resp),e("SET_LOGEDIN",!0),x.push("lobby")})).catch((function(t){console.log(t),console.log("Something went wrong")}))})),S),F=(L={},Object(V["a"])(L,$["c"],(function(t){t.status="loading"})),Object(V["a"])(L,$["d"],(function(t,e){t.status="success",t.token=e.token})),Object(V["a"])(L,$["a"],(function(t){t.status="error"})),Object(V["a"])(L,$["b"],(function(t){t.token=""})),Object(V["a"])(L,"SET_COOKIE",(function(t,e){t.cookie=e})),Object(V["a"])(L,"SET_LOGEDIN",(function(t,e){t.isLoggedIn=e})),Object(V["a"])(L,"SET_GAMES",(function(t,e,n){})),L);W.onopen=function(){console.log("Connected to Websocket")},W.onerror=function(){};var X={state:q,getters:K,actions:J,mutations:F};o["a"].use(G["a"]);var z=!1,Y=new G["a"].Store({modules:{auth:X},strict:z}),Z=n("f309");o["a"].use(Z["a"]);var Q=new Z["a"]({});o["a"].config.productionTip=!1,new o["a"]({router:x,store:Y,axios:D.a,vuetify:Q,render:function(t){return t(I)}}).$mount("#app")},"9f78":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"rules pa-6"},[t._m(0),o("div",{staticClass:"container"}),o("div",{attrs:{id:"overview"}},[o("h2",[o("v-img",{staticClass:"img",attrs:{src:n("db06"),"max-height":"10","max-width":"10"}}),t._v(" Overview")],1),t._m(1)]),o("div",{attrs:{id:"turn"}},[o("h2",[o("v-img",{staticClass:"img",attrs:{src:n("db06"),"max-height":"10","max-width":"10"}}),t._v(" Play a Turn")],1),t._m(2)]),o("div",{attrs:{id:"end"}},[o("h2",[o("v-img",{staticClass:"img",attrs:{src:n("db06"),"max-height":"10","max-width":"10"}}),t._v("End of Game")],1),t._m(3)]),t._m(4)])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("h1",[t._v("Rules")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v(" Connect 4 is a two player, turnbased strategy game."),n("br"),t._v(" You and your opponent take turns filling up the game board with your tokens of your color."),n("br"),t._v(" Your Goal is to build up consecutive lines of tokens to ultimately get 4 tokens in a row and win the game."),n("br"),t._v(" These rows can be vertical, horizontal or even diagonal! But beware, your enemy can and will disrupt your plans. ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v(" At the start of the Game each of you picks a color, you'll get 21 Tokens of that color to try and win the game with."),n("br"),t._v(" If it's your turn you choose a Column to put in your token, the token then falls down until it either reaches the edge of the board or another Token"),n("br"),t._v(" After your token has fallen down your opponent's turn begins."),n("br"),n("img",{attrs:{src:"",alt:"ADD FALLING TOKEN GIF"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v(" The Game ends as soon there is a consecutive row of 4 Tokens in the same color. This can happen either horizontally"),n("br"),n("img",{attrs:{src:"",alt:"ADD HORIZONZAL WIN"}}),n("br"),t._v(" Or vertically"),n("br"),n("img",{attrs:{src:"",alt:"ADD VERTICAL WIN"}}),n("br"),t._v(" or even diagonally!"),n("br"),n("img",{attrs:{src:"",alt:"ADD DIAGONAL WIN"}}),n("br"),t._v(" The Game ends in a draw if both players happen to run out of Tokens and all 42 Fields in the Board are filled without 4 of the same color in a row. "),n("img",{attrs:{src:"",alt:"ADD FILLED BOARD"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("Well, let's get started shall we? Check out the "),n("a",{attrs:{href:"/games"}},[t._v("Lobby")])])}],r={name:"Rules"},c=r,i=(n("39a6"),n("2877")),s=n("6544"),u=n.n(s),l=n("adda"),d=Object(i["a"])(c,o,a,!1,null,null,null);e["default"]=d.exports;u()(d,{VImg:l["a"]})},aac8:function(t,e,n){},d017:function(t,e,n){"use strict";n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return a})),n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return c})),n.d(e,"e",(function(){return i}));var o="AUTH_REQUEST",a="AUTH_SUCCESS",r="AUTH_ERROR",c="AUTH_LOGOUT",i="REGISTER"},db06:function(t,e,n){t.exports=n.p+"img/connect4.f8021762.jpg"},e9e1:function(t,e,n){"use strict";n("aac8")}});
//# sourceMappingURL=app.5f000a8d.js.map