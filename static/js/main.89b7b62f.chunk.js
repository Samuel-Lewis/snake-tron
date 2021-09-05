(this["webpackJsonpsnake-tron"]=this["webpackJsonpsnake-tron"]||[]).push([[0],{226:function(e,t,n){},334:function(e,t,n){"use strict";n.r(t);var r,a,i=n(0),c=n.n(i),s=n(27),o=n.n(s),l=n(28),u=(n(225),n(226),n(341)),j=n(35),d=n(346),h=n(95),b=n(51),O=n(24),p=n(205),f=n(4),m=d.a.Text,x=d.a.Title,g={h1:function(e){return Object(f.jsx)(x,Object(O.a)({level:1},e))},h2:function(e){return Object(f.jsx)(x,Object(O.a)({level:2},e))},h3:function(e){return Object(f.jsx)(x,Object(O.a)({level:3},e))},h4:function(e){return Object(f.jsx)(x,Object(O.a)({level:4},e))},h5:function(e){return Object(f.jsx)(x,Object(O.a)({level:5},e))},h6:function(e){return Object(f.jsx)(x,Object(O.a)({level:6},e))},p:function(e){return Object(f.jsx)(m,Object(O.a)({},e))}},y=function(e){var t=e.text;return Object(f.jsx)(p.a,{children:t,components:g})},v=d.a.Title,S=d.a.Paragraph,T=n(344),k=n(340),w=d.a.Title,C=d.a.Paragraph,R=d.a.Text,E=[{key:"Pos",dataType:"number[]",description:"An array of exactly length two, describing a position of something within a game.",example:"[1,2]"},{key:"Move",dataType:'"N" | "S" | "E" | "W" | "X"',description:"A cardinal direction, often used to denote directions of a player move. `X` is used to denote a no-operation (NOP), sometimes used when an error has occurred"},{key:"GameResult",dataType:'"DRAW" | "WINNER" | "TIMEOUT"',description:"Result of a game. `TIMEOUT` is when a game exceeds the max allocated ticks. `DRAW` is when there is no single surviving player (eg, players crash into each other simultaneously)"}],I=[{name:"Initialiser Payload",description:"The first payload sent to any controller when the game is first starting",properties:[{key:"gameId",dataType:"string",description:"Unique identifier of the game"},{key:"gridSize",dataType:"number",description:"Size of the game grid. Game grid is always a square."},{key:"playerCount",dataType:"number",description:"Number of players in the game. Includes all alive and dead."},{key:"playerNumber",dataType:"number",description:"The number identifier of the player which the controller will be able to control"}]},{name:"GameState.meta",description:"Additional information provided with each game state, which is common across the entire game. Provided for convenience.",properties:[{key:"gameId",dataType:"string",description:"Unique identifier of the game"},{key:"gridSize",dataType:"number",description:"Size of the game grid. Game grid is always a square."},{key:"playerCount",dataType:"number",description:"Number of players in the game. Includes all alive and dead."}]},{name:"GameState",description:"The current state of the game. Think of it as a slice of the full game.",properties:[{key:"tick",dataType:"number",description:"Current tick of the game"},{key:"positions",dataType:"Pos[][]",description:"Positions of all players in the game. `positions[i]` is all parts of player `i`. `positions[i][0]` is the head of player `i`."},{key:"foodPositions",dataType:"Pos[]",description:"Position of all food items on the grid"},{key:"playersAlive",dataType:"boolean[]",description:"Alive status of all players. `playersAlive[i]` would be `true` if player `i` was still alive and in the game."},{key:"lastMoves",dataType:"Move[]",description:"The Move of all players in the previous game tick"},{key:"meta",dataType:"GameState.meta",description:"See `GameState.meta`"}]}],N=d.a.Title,A=d.a.Paragraph,P=d.a.Title,M=d.a.Paragraph,G=d.a.Title,D=u.a.Content,U=u.a.Sider,_=[{title:"Getting started",key:"getting-started",display:!1,component:function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(N,{level:2,children:"Getting Started"}),Object(f.jsx)(A,{children:"TBC"})]})}},{title:"Life cycle",key:"life-cycle",component:function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(P,{level:2,children:"Life Cycle"}),Object(f.jsxs)(M,{children:["A game takes place over 3 stages."," ",Object(f.jsxs)("ol",{children:[Object(f.jsx)("li",{children:"Controller initialisation"}),Object(f.jsx)("li",{children:"Game execution"}),Object(f.jsx)("li",{children:"Cleanup"})]})]}),Object(f.jsx)(P,{level:3,children:"Controller setup"}),Object(f.jsxs)(M,{children:["When a game is first started, all controllers are initialised. This allows the game to check the controllers are alive, but also gives opportunities to the controllers to initialise their game state. Each controller is sent the"," ",Object(f.jsx)(l.b,{to:"/docs/data-types",children:"Initialisation Payload"}),". If a controller fails to respond, the game does not start."]}),Object(f.jsx)(P,{level:3,children:"Game execution"}),Object(f.jsx)(M,{children:"A game continues until there are one or less players left alive, or until the game reaches the specified number of ticks. If there is only one player left, the game is considered a win for the remaining player. If there is less than one player left, the game is considered a draw for all players. If there is more than one player left, ie, reached the specified number of ticks, the game is considered a draw."}),Object(f.jsxs)(M,{children:["The game loop follows the same pattern every tick",Object(f.jsxs)("ol",{children:[Object(f.jsx)("li",{children:"Check end game conditions"}),Object(f.jsx)("li",{children:"Fetch all controllers moves"}),Object(f.jsx)("li",{children:"Apply moves to game state"})]}),"If a player has died, the player's corresponding controller will no longer receive requests for moves until the final cleanup stage."]}),Object(f.jsx)(P,{level:3,children:"Cleanup"}),Object(f.jsxs)(M,{children:["After the game has ended, all controllers are sent the a cleanup message, which includes the ",Object(f.jsx)(l.b,{to:"/docs/data-types",children:"GameState"}),". This allows the controllers to clean up their game state or shutdown any long running processes."]})]})}},{title:"Data Types",key:"data-types",component:function(){var e=E.sort((function(e,t){return e.key.localeCompare(t.key)})).map((function(e){return Object(f.jsxs)("div",{children:[Object(f.jsx)(w,{level:4,code:!0,children:e.key}),Object(f.jsx)(C,{children:Object(f.jsxs)("blockquote",{children:[Object(f.jsxs)(C,{children:[Object(f.jsx)(R,{strong:!0,children:"Type:"})," ",Object(f.jsx)(R,{code:!0,children:e.dataType})]}),Object(f.jsx)(y,{text:e.description}),e.example&&Object(f.jsxs)(C,{children:[Object(f.jsx)(R,{strong:!0,children:"Example:"})," ",Object(f.jsx)(R,{code:!0,children:e.example})]})]})})]},e.key)})),t=I.sort((function(e,t){return e.name.localeCompare(t.name)})).map((function(e){var t=e.properties.sort((function(e,t){return e.key.localeCompare(t.key)}));return Object(f.jsxs)("div",{children:[Object(f.jsx)(w,{level:4,children:e.name}),Object(f.jsx)(C,{children:Object(f.jsxs)("blockquote",{children:[Object(f.jsx)(C,{children:e.description}),Object(f.jsxs)(T.a,{dataSource:t,pagination:!1,children:[Object(f.jsx)(T.a.Column,{title:"Name",dataIndex:"key",render:function(e){return Object(f.jsx)(R,{code:!0,children:e})}},"key"),Object(f.jsx)(T.a.Column,{title:"Type",dataIndex:"dataType",render:function(e){return Object(f.jsx)(R,{code:!0,children:e})}},"dataType"),Object(f.jsx)(T.a.Column,{title:"Description",dataIndex:"description",render:function(e){return Object(f.jsx)(y,{text:e})}},"description")]})]})})]},e.name)}));return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(w,{level:2,children:"Data Types"}),Object(f.jsx)(k.a,{children:Object(f.jsx)(w,{level:3,children:"Common Types"})}),e,Object(f.jsx)(k.a,{children:Object(f.jsx)(w,{level:3,children:"Payloads"})}),t]})}},{title:"Controllers",key:"controllers",children:[{title:"REST",key:"rest",component:function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(v,{level:2,children:"REST API"}),Object(f.jsx)(S,{children:Object(f.jsx)(b.a,{type:"link",children:Object(f.jsx)(l.b,{to:"/tester",children:"Go to controller tester"})})}),Object(f.jsx)(S,{children:"The REST controller is an controller that relies on HTTP GET/POST requests. The benefits of this controller are that it is completely language agnostic. Disadvantages are that HTTP requests add a slower overhead for every game tick."}),Object(f.jsx)(S,{children:"The REST controller follows the same pattern as with all controllers, except the endpoints are slightly tailored to the REST API. There is a 2 second timeout on all requests."}),Object(f.jsx)(v,{level:3,children:"Initialisation Payload"}),Object(f.jsx)(S,{children:Object(f.jsx)(y,{text:"The initialisation of a REST controller is done through a POST request to `/init`. An additional query parameter `playerNumber` is always included to specify the player number. Example: `http://localhost:8000/init?playerNumber=2`"})}),Object(f.jsxs)(S,{children:["The POST request's body will include a JSON of the"," ",Object(f.jsx)(l.b,{to:"docs/data-types",children:"Initialiser Payload"}),"."]}),Object(f.jsx)(S,{children:"The game expects a 200 OK response, but any body returned will be ignored."}),Object(f.jsx)(v,{level:3,children:"Game Update"}),Object(f.jsxs)(S,{children:["For every game tick, the controller will be queried and is expected to return a ",Object(f.jsx)(l.b,{to:"docs/data-types",children:"Move"}),"."]}),Object(f.jsx)(S,{children:Object(f.jsx)(y,{text:"A POST request is sent to `/update`. An additional query parameter `playerNumber` is always included to specify the player number. Example: `http://localhost:8000/update?playerNumber=2`"})}),Object(f.jsxs)(S,{children:["The POST request's body will include a JSON of the"," ",Object(f.jsx)(l.b,{to:"docs/data-types",children:"GameState Payload"}),"."]}),Object(f.jsxs)(S,{children:["The game expects a 200 OK response, as well as a plain text"," ",Object(f.jsx)(l.b,{to:"docs/data-types",children:"Move"})," response."]}),Object(f.jsx)(v,{level:3,children:"Cleanup"}),Object(f.jsx)(S,{children:'At the end of the game, the controller is sent a final "shutdown" or "cleanup" request to assist in the cleanup of the controller.'}),Object(f.jsx)(S,{children:Object(f.jsx)(y,{text:"A POST request is sent to `/end`. An additional query parameter `playerNumber` is always included to specify the player number. Example: `http://localhost:8000/end?playerNumber=2`"})}),Object(f.jsxs)(S,{children:["The POST request's body will include a JSON of the"," ",Object(f.jsx)(l.b,{to:"docs/data-types",children:"GameState Payload"})," but nothing is expected to be done with it."]}),Object(f.jsx)(S,{children:"The game does not expect any response. Any response will be ignored."})]})}}]}],L=function(e){var t=[];return function e(n,r){n.forEach((function(n){var a=n.children,i=n.key,c=n.component;a?e(a,"".concat(r,"/").concat(i)):c&&t.push(Object(f.jsx)(j.a,{path:"".concat(r,"/").concat(i),component:c},"route-".concat(i)))}))}(e.contents,e.url),Object(f.jsx)(f.Fragment,{children:t})},z=function(){var e=Object(j.h)().url,t=function e(t){var n=t.contents,r=t.url,a=n.map((function(t){var n=t.children,a=t.title,i=t.key,c=t.icon,s=t.component;return!1===t.display?null:n?Object(f.jsx)(h.a.SubMenu,{title:a,icon:c,children:e({contents:n,url:"".concat(r,"/").concat(i)})},i):s?Object(f.jsx)(h.a.Item,{icon:c,children:Object(f.jsx)(l.b,{to:"".concat(r,"/").concat(i),children:a})},"".concat(r,"/").concat(i)):null}));return Object(f.jsx)(f.Fragment,{children:a})}({contents:_,url:e}),n=Object(f.jsx)(L,{contents:_,url:e});return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(G,{children:"Docs"}),Object(f.jsxs)(u.a,{children:[Object(f.jsx)(U,{width:200,children:Object(f.jsx)(h.a,{mode:"inline",style:{height:"100%"},multiple:!1,children:t})}),Object(f.jsx)(D,{className:"content",style:{margin:0,paddingTop:0},children:Object(f.jsx)(j.c,{children:n})})]})]})},q=n(31),F=n(355),W=n(30),H=n(356),J=n(345),V=n(58),Y=n(66),B=n(360),K=n(216),X=n(38),Q=n.n(X),Z=n(63),$=n(40),ee=n(352),te=n(163),ne=n.n(te),re=n(359),ae={headers:{"Access-Control-Allow-Origin":"*"},timeout:2e3},ie=function e(t){var n=this;Object($.a)(this,e),this.url=void 0,this.init=function(){var e=Object(Z.a)(Q.a.mark((function e(t){var r,a;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={playerNumber:t.playerNumber},e.next=3,ne.a.post(n.url+"/init",t,Object(O.a)(Object(O.a)({},ae),{},{params:r}));case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.update=function(){var e=Object(Z.a)(Q.a.mark((function e(t,r){var a,i;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={playerNumber:r},e.next=3,ne.a.post(n.url+"/update",t,Object(O.a)(Object(O.a)({},ae),{},{params:a}));case 3:return i=e.sent,e.abrupt("return",i.data);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),this.end=function(){var e=Object(Z.a)(Q.a.mark((function e(t,r){var a,i;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={playerNumber:r},e.next=3,ne.a.post(n.url+"/end",t,Object(O.a)(Object(O.a)({},ae),{},{params:a}));case 3:return i=e.sent,e.abrupt("return",i.data);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),this.url=t},ce={Selector:function(e){var t=e.onChange,n=Object(i.useCallback)((function(e){t&&t(e.target.value)}),[t]);return Object(f.jsx)(J.a.Item,{label:"Address",children:Object(f.jsx)(ee.a,{prefix:Object(f.jsx)(re.a,{}),onChange:n})})},create:function(e){return new ie(e)},label:"REST"},se=function(e){return!!e},oe=[ce],le=function(e){var t=e.onControllerChange,n=e.onNext,r=Object(i.useState)([]),a=Object(q.a)(r,2),c=a[0],s=a[1],o=Object(i.useMemo)((function(){return[]}),[]),l=Object(i.useCallback)((function(e){return function(n){o[e]=c[e].factory.create(n),t(o.filter(se))}}),[t,o,c]),u=Object(i.useMemo)((function(){return c.map((function(e,n){var r=e.key,a=e.factory;return Object(f.jsxs)(H.b,{style:{display:"flex"},align:"baseline",children:[Object(f.jsx)(a.Selector,{onChange:l(n)}),Object(f.jsx)(b.a,{type:"text",icon:Object(f.jsx)(B.a,{}),onClick:function(){s(c.filter((function(e){return e.key!==r}))),o[n]=void 0,t(o.filter(se))}})]},r)}))}),[c,s,o,l,t]),j=Object(i.useMemo)((function(){return oe.map((function(e,t){return Object(f.jsxs)(b.a,{type:"dashed",icon:Object(f.jsx)(K.a,{}),onClick:function(){s([].concat(Object(W.a)(c),[{key:Object(Y.uniqueId)(e.label),factory:e}]))},children:["Add ",e.label," controller"]},t)}))}),[c,s]);return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(J.a,{children:u}),Object(f.jsx)(H.b,{children:j}),Object(f.jsx)(k.a,{}),Object(f.jsx)(V.a,{title:"You must specifiy at least 2 controllers",placement:"right",children:Object(f.jsx)(b.a,{type:"primary",onClick:n,disabled:o.length<2,children:"Next"})})]})},ue=n(107),je=n(108),de=n(114),he=n(357),be=n(208),Oe=n(213),pe=n(354);!function(e){e.DRAW="DRAW",e.WINNER="WINNER",e.TIMEOUT="TIMEOUT"}(r||(r={})),function(e){e.NORTH="N",e.SOUTH="S",e.EAST="E",e.WEST="W",e.NOP="X"}(a||(a={}));var fe,me=function(e){return Array.isArray(e)&&2===e.length},xe=function e(t){var n=this;Object($.a)(this,e),this.gameState=void 0,this.pool=void 0,this.generatePool=function(){var e=n.gameState,t=e.positions,r=e.meta,a=e.foodPositions,i=r.gridSize,c=Object(Y.flatten)(t).concat(a);return new Array(i*i).fill(0).map((function(e,t){return[t%i,Math.floor(t/i)]})).filter((function(e){return!c.some((function(t){return Object(Y.isEqual)(t,e)}))})).filter(me)},this.next=function(){var e=Math.floor(Math.random()*n.pool.length);return n.pool.splice(e,1)[0]},this.empty=function(){return 0===n.pool.length},this.gameState=t,this.pool=this.generatePool()},ge=n(20),ye=function(e){var t=e[e.length-1],n=t.meta,a=t.playersAlive.filter((function(e){return e})).length,i=a>1?r.TIMEOUT:1===a?r.WINNER:r.DRAW,c=null;i===r.WINNER&&(c=t.playersAlive.findIndex((function(e){return e})));var s=e.map((function(e){return Object(Y.omit)(e,["meta"])})),o=(new Date).toISOString();return Object(O.a)(Object(O.a)({},n),{},{tickCount:s.length,ticks:s,winner:c,timeStamp:o,result:i})},ve={gridSize:50,maxTicks:1e3},Se=function(){function e(t,n,r){Object($.a)(this,e),this.controllers=void 0,this.options=void 0,this.gameState=void 0,this.controllersReady=void 0,this.onGameTick=void 0,this.controllers=t,this.options=Object(O.a)(Object(O.a)({},ve),n),this.gameState=this.initState(t,this.options),this.controllersReady=new Array(t.length).fill(!1),this.onGameTick=null!==r&&void 0!==r?r:function(){}}return Object(ue.a)(e,[{key:"initControllers",value:function(){var e=Object(Z.a)(Q.a.mark((function e(){var t=this;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(this.controllers.map(function(){var e=Object(Z.a)(Q.a.mark((function e(n,r){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.init({playerNumber:r,gameId:t.gameState.meta.gameId,gridSize:t.gameState.meta.gridSize,playerCount:t.gameState.meta.playerCount});case 2:t.controllersReady[r]=!0;case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"run",value:function(){var e=Object(Z.a)(Q.a.mark((function e(){var t,n,r,a=this;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.controllersReady.every((function(e){return e}))){e.next=2;break}throw new Error("Controllers are not ready. "+JSON.stringify(this.controllersReady));case 2:t=[];case 3:if(!(this.gameState.playersAlive.filter((function(e){return e})).length>1&&this.gameState.tick<this.options.maxTicks)){e.next=11;break}return n=Object(Y.cloneDeep)(this.gameState),t.push(n),e.next=8,this.update();case 8:this.onGameTick(this.gameState.tick),e.next=3;break;case 11:return r=Object(Y.cloneDeep)(this.gameState),t.push(r),this.onGameTick(this.gameState.tick),e.next=16,Promise.all(this.controllers.map(function(){var e=Object(Z.a)(Q.a.mark((function e(t,n){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.end(a.gameState,n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())).catch((function(){}));case 16:return e.abrupt("return",ye(t));case 17:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"initState",value:function(e,t){var n=e.length,r={tick:0,positions:[],lastMoves:[],foodPositions:[],playersAlive:new Array(n).fill(!0),meta:{playerCount:n,gameId:Object(pe.a)(),gridSize:t.gridSize}},a=new xe(r);return r.positions=new Array(n).fill(null).map((function(){return[a.next()]})),r.foodPositions=new Array(n).fill(null).map((function(){return a.next()})),r}},{key:"update",value:function(){var e=Object(Z.a)(Q.a.mark((function e(){var t,n,r=this;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(this.controllers.map(function(){var e=Object(Z.a)(Q.a.mark((function e(t,n){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r.gameState.playersAlive[n]){e.next=6;break}return e.next=3,t.update(r.gameState,n).catch((function(){return null}));case 3:return e.abrupt("return",e.sent);case 6:return e.abrupt("return",a.NOP);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()));case 2:return t=e.sent,n=this.apply(this.gameState,t),this.gameState=n,e.abrupt("return",this.gameState);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"apply",value:function(e,t){var n=Object(O.a)({},e);n.tick=e.tick+1;var r=t.map((function(t,r){if(t===a.NOP)return n.playersAlive[r]=!1,null;if(null===t)return Oe.a.error({message:"Player ".concat(r," disqualified"),description:"Player ".concat(r," has been disqualified. Either the controller has crashed or it returned an invalid move."),duration:0}),n.playersAlive[r]=!1,null;if(!e.playersAlive[r])return null;n.lastMoves[r]=t;var i=e.positions[r][0],c=function(e){var t;return(t={},Object(ge.a)(t,a.NORTH,[0,-1]),Object(ge.a)(t,a.SOUTH,[0,1]),Object(ge.a)(t,a.EAST,[1,0]),Object(ge.a)(t,a.WEST,[-1,0]),t)[e]}(t);return[i[0]+c[0],i[1]+c[1]]}));r.forEach((function(e,t){var r,a;null!==e&&(r=e,a=n.meta.gridSize,r.every((function(e){return e>=0&&e<a}))||(n.playersAlive[t]=!1))})),r.forEach((function(e,t){null!==e&&(r.filter((function(t){return null!==t&&t[0]===e[0]&&t[1]===e[1]})).filter(me).length>1&&(n.playersAlive[t]=!1))}));var i=new Set;r.forEach((function(e,t){if(null!==e){var r=n.foodPositions.findIndex((function(t){return null!==t&&t[0]===e[0]&&t[1]===e[1]}));-1!==r?i.add(r):n.positions[t].pop()}}));var c=n.positions.flat();r.forEach((function(e,t){null!==e&&(-1!==c.findIndex((function(t){return null!==t&&t[0]===e[0]&&t[1]===e[1]}))&&(n.playersAlive[t]=!1))})),r.forEach((function(e,t){null!==e&&n.positions[t].unshift(e)}));var s=new xe(n);return n.foodPositions=n.foodPositions.map((function(e,t){if(i.has(t)){if(s.empty())return;return s.next()}return e})).filter(me),n}}]),e}(),Te=d.a.Title;!function(e){e[e.UNSET=0]="UNSET",e[e.CONTROLLER_INIT=1]="CONTROLLER_INIT",e[e.ERROR_STATE=2]="ERROR_STATE",e[e.GAME_RUN=3]="GAME_RUN",e[e.GAME_OVER=4]="GAME_OVER"}(fe||(fe={}));var ke,we=function(e){Object(je.a)(n,e);var t=Object(de.a)(n);function n(e){var r;return Object($.a)(this,n),(r=t.call(this,e)).onTickUpdate=function(e){var t=r.props.options;if(t){var n=Math.round(e/t.maxTicks*100);r.setState({tickProgress:n})}},r.onCancel=function(){r.props.onPrev()},r.stateUpdate=function(e){var t=r.state,n=t.runStage,a=t.game;if(a)switch(n){case fe.CONTROLLER_INIT:a.initControllers().then((function(){r.setState({runStage:fe.GAME_RUN})})).catch((function(e){r.setState({runStage:fe.ERROR_STATE,errorTitle:"Error initialising controllers",errorDesc:e.message})}));break;case fe.GAME_RUN:a.run().then((function(e){r.props.gameComplete(e),r.setState({runStage:fe.GAME_OVER,history:e}),r.props.onNext()})).catch((function(e){r.setState({runStage:fe.ERROR_STATE,errorTitle:"Error running game",errorDesc:e.message})}))}else r.setState({runStage:fe.ERROR_STATE,errorTitle:"No game object available"})},r.statusMessage=function(){var e=r.state,t=e.runStage,n=e.errorDesc,a=e.errorTitle;switch(t){case fe.CONTROLLER_INIT:return Object(f.jsx)(Te,{level:3,children:"Initialising controllers..."});case fe.ERROR_STATE:return Object(f.jsx)(he.a,{message:a,description:Object(f.jsx)("pre",{children:n}),type:"error",showIcon:!0});case fe.GAME_RUN:return Object(f.jsx)(Te,{level:3,children:"Running..."});case fe.GAME_OVER:return Object(f.jsx)(Te,{level:3,children:"Game complete!"});default:return Object(f.jsx)(he.a,{message:"Game unset!? Contact dev",type:"warning",showIcon:!0})}},r.state={runStage:fe.UNSET,tickProgress:0},r}return Object(ue.a)(n,[{key:"componentDidUpdate",value:function(e,t){t.runStage!==this.state.runStage&&this.stateUpdate()}},{key:"componentDidMount",value:function(){var e=this.props,t=e.controllers,n=e.options;if(t&&t.length&&n){var r=new Se(t,n,this.onTickUpdate);this.setState({game:r,runStage:fe.CONTROLLER_INIT})}else this.setState({runStage:fe.ERROR_STATE,errorTitle:"Missing controllers or options?",errorDesc:JSON.stringify(t,null,2)+"\n"+JSON.stringify(n,null,2)})}},{key:"render",value:function(){var e=this.statusMessage(),t=this.state,n=t.tickProgress,r=t.runStage,a="normal";return r===fe.GAME_RUN?a="active":r===fe.GAME_OVER?a="success":r===fe.ERROR_STATE&&(a="exception"),Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)(H.b,{direction:"vertical",style:{width:"100%",justifyContent:"center",alignItems:"center"},children:[e,Object(f.jsx)(be.a,{type:"circle",percent:n,status:a}),Object(f.jsx)("br",{}),Object(f.jsx)(b.a,{size:"large",onClick:this.onCancel,danger:!0,children:"Cancel"})]})})}}]),n}(c.a.Component),Ce=n(349),Re=function(e){var t=e.onConfigChange,n=e.onNext,r=e.onPrev,a=c.a.useState(50),s=Object(q.a)(a,2),o=s[0],l=s[1],u=c.a.useState(1e3),j=Object(q.a)(u,2),d=j[0],h=j[1],O=Object(i.useCallback)((function(){t({gridSize:o,maxTicks:d})}),[t,o,d]),p=Object(i.useCallback)((function(e){h(e),O()}),[O,h]),m=Object(i.useCallback)((function(e){l(e),O()}),[O,l]);return Object(i.useEffect)((function(){t({gridSize:o,maxTicks:d})}),[t,o,d]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)(J.a,{children:[Object(f.jsx)(J.a.Item,{label:"Max ticks",children:Object(f.jsx)(Ce.a,{min:1,max:1e4,defaultValue:1e3,value:d,onChange:p})}),Object(f.jsx)(J.a.Item,{label:"Grid size",children:Object(f.jsx)(Ce.a,{min:10,max:1e3,defaultValue:50,value:o,onChange:m})})]}),Object(f.jsxs)(H.b,{children:[Object(f.jsx)(b.a,{onClick:r,children:"Previous"}),Object(f.jsx)(b.a,{type:"primary",onClick:n,children:"Start"})]})]})},Ee=n(351),Ie=n(353),Ne=n(361),Ae=n(362),Pe=n(363),Me=n(215),Ge=n(364),De=n(365),Ue=n(96),_e=n.n(Ue);!function(e){e.HISTORIES="histories"}(ke||(ke={}));var Le,ze=function(){var e=_e.a.get(ke.HISTORIES)||{};return Object.values(e).sort((function(e,t){return new Date(e.timeStamp).valueOf()-new Date(t.timeStamp).valueOf()}))},qe=function(e){var t=new Blob([JSON.stringify(e,null,2)],{type:"text/json"});return{href:URL.createObjectURL(t),download:"".concat(e.timeStamp,".json")}},Fe=Ee.a.Panel,We=d.a.Paragraph,He=function(e){var t=e.gameHistory,n=e.onNext,a=e.onPrev,c=Object(i.useCallback)((function(){t&&function(e){var t=_e.a.get(ke.HISTORIES)||{};_e.a.set(ke.HISTORIES,Object(O.a)(Object(O.a)({},t),{},Object(ge.a)({},e.gameId,e)))}(t)}),[t]);if(!t)return Object(f.jsx)("div",{children:"Error: No game history specified"});var s=qe(t),o=Object(f.jsx)(Ie.a,{icon:Object(f.jsx)(Ne.a,{}),status:"success",title:"Player "+t.winner+" wins!"});return t.result===r.DRAW?o=Object(f.jsx)(Ie.a,{icon:Object(f.jsx)(Ae.a,{}),status:"warning",title:"Draw!"}):t.result===r.TIMEOUT&&(o=Object(f.jsx)(Ie.a,{icon:Object(f.jsx)(Pe.a,{}),status:"warning",title:"Timeout"})),Object(f.jsxs)(f.Fragment,{children:[o,Object(f.jsxs)(H.b,{children:[Object(f.jsx)(b.a,{onClick:a,type:"primary",children:"Play again"}),Object(f.jsx)(b.a,{onClick:n,children:"New game"}),Object(f.jsx)(l.b,{to:"/viewer?gameId=".concat(null===t||void 0===t?void 0:t.gameId),children:Object(f.jsx)(b.a,{icon:Object(f.jsx)(Me.a,{}),children:"Show in viewer"})}),Object(f.jsx)(b.a,{icon:Object(f.jsx)(Ge.a,{}),onClick:c,children:"Save to local storage"}),Object(f.jsx)(b.a,Object(O.a)(Object(O.a)({icon:Object(f.jsx)(De.a,{})},s),{},{children:"Download replay"}))]}),Object(f.jsx)(k.a,{}),Object(f.jsx)(Ee.a,{children:Object(f.jsx)(Fe,{header:"Full Game History",children:Object(f.jsx)(We,{children:Object(f.jsx)("pre",{children:JSON.stringify(t,null,2)})})},"1")})]})},Je=F.a.Step,Ve=d.a.Title;!function(e){e[e.CONTROLLER_CREATOR=0]="CONTROLLER_CREATOR",e[e.GAME_SETUP=1]="GAME_SETUP",e[e.PLAYING=2]="PLAYING",e[e.SUMMARY=3]="SUMMARY"}(Le||(Le={}));var Ye=function(){var e=Object(i.useState)(Le.CONTROLLER_CREATOR),t=Object(q.a)(e,2),n=t[0],r=t[1],a=Object(i.useState)([]),c=Object(q.a)(a,2),s=c[0],o=c[1],l=Object(i.useState)(),u=Object(q.a)(l,2),j=u[0],d=u[1],h=Object(i.useState)(),b=Object(q.a)(h,2),O=b[0],p=b[1],m=Object(i.useCallback)((function(e){o(e)}),[o]),x=Object(i.useCallback)((function(e){d(e)}),[d]),g=Object(i.useCallback)((function(e){p(e)}),[p]),y=Object(i.useCallback)((function(){r((n+1)%(Le.SUMMARY+1))}),[n,r]),v=Object(i.useCallback)((function(){r((n-1)%(Le.SUMMARY+1))}),[n,r]);return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(Ve,{children:"Play a Game"}),Object(f.jsxs)(F.a,{current:n,children:[Object(f.jsx)(Je,{title:"Controller Creator"}),Object(f.jsx)(Je,{title:"Game Setup"}),Object(f.jsx)(Je,{title:"Running"}),Object(f.jsx)(Je,{title:"Summary"})]}),Object(f.jsx)("br",{}),n===Le.CONTROLLER_CREATOR&&Object(f.jsx)(le,{onControllerChange:m,onNext:y}),n===Le.GAME_SETUP&&Object(f.jsx)(Re,{onConfigChange:x,onNext:y,onPrev:v}),n===Le.PLAYING&&Object(f.jsx)(we,{controllers:s,options:j,onPrev:v,onNext:y,gameComplete:g}),n===Le.SUMMARY&&Object(f.jsx)(He,{gameHistory:O,onNext:y,onPrev:v})]})},Be=d.a.Title,Ke=d.a.Paragraph,Xe=function(e){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(Be,{children:"Snake Tron - Code Fights!"}),Object(f.jsx)(Ke,{children:"What, you thought there would be content?"})]})},Qe=u.a.Content,Ze=function(e){return Object(f.jsx)(Qe,{className:"content",children:e.children})},$e=u.a.Footer,et=function(){return Object(f.jsxs)($e,{className:"footer",children:["Created by ",Object(f.jsx)("a",{href:"http://samuel-lewis.com/",children:"Samuel Lewis"})]})},tt=u.a.Header,nt=function(){return Object(f.jsxs)(tt,{className:"header",children:[Object(f.jsx)("div",{className:"logo"}),Object(f.jsxs)(h.a,{theme:"dark",mode:"horizontal",children:[Object(f.jsx)(h.a.Item,{children:Object(f.jsx)(l.b,{to:"/",children:"Home"})},"home"),Object(f.jsx)(h.a.Item,{children:Object(f.jsx)(l.b,{to:"/game",children:"Game"})},"game"),Object(f.jsx)(h.a.Item,{children:Object(f.jsx)(l.b,{to:"/viewer",children:"Viewer"})},"viewer"),Object(f.jsx)(h.a.Item,{children:Object(f.jsx)(l.b,{to:"/tester",children:"Controller Tester"})},"tester"),Object(f.jsx)(h.a.Item,{children:Object(f.jsx)(l.b,{to:"/docs",children:"Docs"})},"docs")]})]})},rt=n(347),at=n(342),it=n(343),ct=rt.a.TabPane,st=d.a.Title,ot=d.a.Paragraph,lt="48e2ee9e-171e-45bd-8904-a762d8e2b782",ut={playerNumber:1,playerCount:2,gameId:lt,gridSize:50},jt={tick:2,positions:[[[42,31],[41,31],[40,31]],[[47,27],[47,28]]],lastMoves:[a.NORTH,a.SOUTH],foodPositions:[[35,16],[17,6]],playersAlive:[!0,!0],meta:{playerCount:2,gameId:lt,gridSize:50}},dt=function(){var e=Object(i.useState)(null),t=Object(q.a)(e,2),n=t[0],r=t[1],a=Object(i.useState)(""),c=Object(q.a)(a,2),s=c[0],o=c[1],l=Object(i.useState)(""),u=Object(q.a)(l,2),j=u[0],d=u[1],h=Object(i.useCallback)((function(e){r(ce.create(e))}),[r]),O=Object(i.useCallback)((function(){d(JSON.stringify(ut,null,2)),null===n||void 0===n||n.init(ut).then((function(e){return o(JSON.stringify(e,null,2))})).catch((function(e){return o(e.message)}))}),[n,o]),p=Object(i.useCallback)((function(){d(JSON.stringify(jt,null,2)),null===n||void 0===n||n.update(jt,1).then((function(e){return o(JSON.stringify(e,null,2))})).catch((function(e){return o(e.message)}))}),[n,o]),m=Object(i.useCallback)((function(){d(JSON.stringify(jt,null,2)),null===n||void 0===n||n.end(jt,1).then((function(e){return o(JSON.stringify(e,null,2))})).catch((function(e){return o(e.message)}))}),[n,o]);return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(st,{children:"Controller Tester"}),Object(f.jsx)(rt.a,{defaultActiveKey:"1",children:Object(f.jsx)(ct,{tab:ce.label,children:Object(f.jsx)(ce.Selector,{onChange:h})},"1")}),Object(f.jsxs)(H.b,{children:[Object(f.jsx)(b.a,{onClick:O,children:"Test game initialise"}),Object(f.jsx)(b.a,{onClick:p,children:"Test game update"}),Object(f.jsx)(b.a,{onClick:m,children:"Test game end"})]}),Object(f.jsxs)(at.a,{gutter:16,children:[Object(f.jsxs)(it.a,{span:12,children:[Object(f.jsx)(k.a,{children:"Sent"}),Object(f.jsx)(ot,{children:j&&Object(f.jsx)("pre",{children:j})})]}),Object(f.jsxs)(it.a,{span:12,children:[Object(f.jsx)(k.a,{children:"Response"}),Object(f.jsx)(ot,{children:s&&Object(f.jsx)("pre",{children:s})})]})]})]})},ht=n(214),bt=n(350),Ot=n(212),pt=n(358),ft=n(348),mt=["#e6194B","#3cb44b","#ffe119","#4363d8","#f58231","#911eb4","#42d4f4","#f032e6","#bfef45","#fabed4","#469990","#dcbeff","#9A6324","#fffac8","#800000","#aaffc3","#808000","#ffd8b1","#000075"],xt=function(e){return mt[e%mt.length]},gt=400,yt=function(e,t){var n=Object(q.a)(e,2);return[n[0]*t+t/2,n[1]*t+t/2]};var vt=function(e){var t=Object(i.useRef)(null),n=e.state,r=e.gridSize;return Object(i.useLayoutEffect)((function(){var e=t.current;if(e){var a=e.getContext("2d");if(a){var i=gt/r;!function(e){e.clearRect(0,0,gt,gt),e.lineWidth=1,e.strokeStyle="white",e.strokeRect(0,0,gt,gt)}(a),n.positions.forEach((function(e,t){!function(e,t,n,r){var a=xt(r),i=yt(n[0],t),c=Object(q.a)(i,2),s=c[0],o=c[1];e.lineWidth=t-2,e.strokeStyle=a,e.lineCap="square",e.beginPath(),e.moveTo(s,o),n.forEach((function(n){var r=yt(n,t),a=Object(q.a)(r,2),i=a[0],c=a[1];e.lineTo(i,c)})),e.stroke()}(a,i,e,t)})),n.foodPositions.forEach((function(e){return function(e,t,n){var r=yt(n,t),a=Object(q.a)(r,2),i=a[0],c=a[1];e.fillStyle="green",e.beginPath(),e.arc(i,c,t/2,0,2*Math.PI),e.fill()}(a,i,e)}))}}}),[t,n,r]),Object(f.jsx)("canvas",{width:gt,height:gt,ref:t})},St=n(115),Tt=n(117),kt=d.a.Paragraph,wt=function(e){var t=e.frame;if(!t)return null;var n=new Array(t.playersAlive.length).fill(null).map((function(e,n){return{key:"Player ".concat(n),alive:t.playersAlive[n],lastMove:t.lastMoves[n],position:t.positions[n],playerNumber:n}})),r=[{title:"Player",dataIndex:"playerNumber",key:"playerNumber",render:function(e){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("span",{className:"dot",style:{backgroundColor:xt(e)}}),"Player ",e]})}},{title:"Alive",dataIndex:"alive",key:"alive",render:function(e){return e?Object(f.jsx)(St.a,{}):Object(f.jsx)(Tt.a,{})}},{title:"Last Move",dataIndex:"lastMove",key:"lastMove"},{title:"Positions",dataIndex:"position",key:"position",render:function(e){return JSON.stringify(e)},ellipsis:!0}];return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)(kt,{children:["Tick: ",t.tick]}),Object(f.jsxs)(kt,{children:["Food: ",JSON.stringify(t.foodPositions)]}),Object(f.jsx)(T.a,{size:"small",dataSource:n,columns:r,pagination:!1,expandable:{expandedRowRender:function(e){return Object(f.jsx)("p",{style:{margin:0},children:JSON.stringify(e.position)})}}})]})},Ct=function(e){var t=e.history,n=Object(i.useState)(0),r=Object(q.a)(n,2),a=r[0],c=r[1],s=Object(i.useCallback)((function(e){return c(e)}),[c]);return t?Object(f.jsxs)(at.a,{justify:"center",children:[Object(f.jsxs)(it.a,{span:12,children:[Object(f.jsx)(vt,{state:t.ticks[a],gridSize:t.gridSize}),Object(f.jsx)(ft.a,{style:{width:"400px",marginLeft:0,marginRight:0},value:a,min:0,max:t.tickCount-1,onChange:s})]}),Object(f.jsx)(it.a,{span:12,children:Object(f.jsx)(wt,{frame:t.ticks[a]})})]}):Object(f.jsx)("div",{children:"Error: No history loaded?!"})},Rt=["key","humanDate"],Et=d.a.Title,It=d.a.Paragraph,Nt=function(e){var t=e.onDelete,n=Object(i.useCallback)((function(){bt.a.warning({title:"Are you sure you want to delete all game replays?",closable:!0,okText:"Delete all",okCancel:!0,okButtonProps:{danger:!0,type:"primary"},content:Object(f.jsx)(It,{children:"Are you sure you want to delete all game replays? This can not be undone."}),onOk:t})}),[t]);return Object(f.jsx)(b.a,{icon:Object(f.jsx)(B.a,{}),onClick:n,danger:!0,type:"text",children:"Delete all histories"})},At=function(){var e=Object(j.f)(),t=Object(i.useState)(ze().reverse()),n=Object(q.a)(t,2),a=n[0],c=n[1],s=Object(i.useState)(),o=Object(q.a)(s,2),u=o[0],d=o[1],h=new URLSearchParams(Object(j.g)().search),p=Object(i.useCallback)((function(){d(void 0),_e.a.set(ke.HISTORIES,{}),c(ze()),e.push("/viewer")}),[d,e]);Object(i.useEffect)((function(){var e=h.get("gameId");if(e)if("latest"!==e){var t=a.find((function(t){return t.gameId===e}));t?d(t):Ot.b.error("Could not find game ".concat(e))}else d(a[0])}),[a,d,h]);var m=Object(i.useMemo)((function(){return a.map((function(e){return Object(O.a)(Object(O.a)({},e),{},{key:e.gameId})}))}),[a]),x=[{title:"Timestamp",dataIndex:"timeStamp",key:"timeStamp",ellipsis:!0,sorter:{compare:function(e,t){return new Date(e.timeStamp).valueOf()-new Date(t.timeStamp).valueOf()},multiple:1},render:function(e){return Object(f.jsx)("span",{children:new Date(e).toString()})}},{title:"Result",dataIndex:"result",key:"result",sorter:{compare:function(e,t){return e.result.localeCompare(t.result)},multiple:2},render:function(e,t){var n=t.winner,a=e===r.WINNER?"green":e===r.DRAW?"blue":"red";return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(pt.a,{color:a,children:e}),-1!==n&&Object(f.jsxs)("span",{children:["Player ",n]})]})}},{title:"Player count",dataIndex:"playerCount",key:"playerCount",sorter:{compare:function(e,t){return e.playerCount-t.playerCount},multiple:4}},{title:"Tick count",dataIndex:"tickCount",key:"tickCount",sorter:{compare:function(e,t){return e.tickCount-t.tickCount},multiple:5}},{title:"Grid size",dataIndex:"gridSize",key:"gridSize",sorter:{compare:function(e,t){return e.gridSize-t.gridSize},multiple:6}},{title:"ID",dataIndex:"gameId",key:"gameId",ellipsis:!0,sorter:{compare:function(e,t){return e.gameId.localeCompare(t.gameId)},multiple:7}},{title:"Actions",key:"actions",render:function(t,n){n.key,n.humanDate;var r=Object(ht.a)(n,Rt),a=qe(r);return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(V.a,{title:"View",children:Object(f.jsx)(l.b,{to:"/viewer?gameId=".concat(r.gameId),children:Object(f.jsx)(b.a,{icon:Object(f.jsx)(Me.a,{})})})}),Object(f.jsx)(V.a,{title:"Download",children:Object(f.jsx)(b.a,Object(O.a)({icon:Object(f.jsx)(De.a,{})},a))}),Object(f.jsx)(V.a,{title:"Delete",children:Object(f.jsx)(b.a,{onClick:function(){!function(e){var t=_e.a.get(ke.HISTORIES)||{};t[e]=void 0,_e.a.set(ke.HISTORIES,t),ze()}(n.gameId),c(ze()),u&&u.gameId===n.gameId&&(d(void 0),e.push("/viewer"))},icon:Object(f.jsx)(B.a,{})})})]})}}];return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(Et,{children:"Game Viewer"}),u&&Object(f.jsx)(Ct,{history:u}),Object(f.jsx)(k.a,{children:"Saved Rounds"}),Object(f.jsx)(T.a,{dataSource:m,columns:x,pagination:{pageSize:10,position:["topRight","bottomRight"],showTotal:function(e){return"".concat(e," games")}}}),Object(f.jsx)(Nt,{onDelete:p})]})};var Pt=function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsxs)(u.a,{className:"layout",children:[Object(f.jsx)(nt,{}),Object(f.jsx)(Ze,{children:Object(f.jsxs)(j.c,{children:[Object(f.jsx)(j.a,{exact:!0,path:"/",component:Xe}),Object(f.jsx)(j.a,{path:"/game",component:Ye}),Object(f.jsx)(j.a,{path:"/viewer",component:At}),Object(f.jsx)(j.a,{path:"/tester",component:dt}),Object(f.jsx)(j.a,{path:"/docs",component:z})]})}),Object(f.jsx)(et,{})]})})};o.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(l.a,{children:Object(f.jsx)(Pt,{})})}),document.getElementById("root"))}},[[334,1,2]]]);
//# sourceMappingURL=main.89b7b62f.chunk.js.map