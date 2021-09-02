(this["webpackJsonpsnake-tron"]=this["webpackJsonpsnake-tron"]||[]).push([[0],{206:function(e,t,n){},312:function(e,t,n){"use strict";n.r(t);var r,a,c=n(0),i=n.n(c),s=n(28),o=n.n(s),l=n(49),u=(n(205),n(206),n(316)),j=n(29),b=n(25),O=n(329),d=n(321),f=n(191),h=n(330),p=n(68),m=n(320),x=n(315),g=n(50),v=n(60),S=n(334),y=n(197),k=n(32),R=n.n(k),T=n(26),C=n(56),E=n(71),N=n(326),I=n(148),w=n.n(I),A=n(333),M=n(6),P={headers:{"Access-Control-Allow-Origin":"*"},timeout:2e3},U=function e(t){var n=this;Object(E.a)(this,e),this.url=void 0,this.init=function(){var e=Object(C.a)(R.a.mark((function e(t){var r,a;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={playerNumber:t.playerNumber},e.next=3,w.a.post(n.url+"/init",t,Object(T.a)(Object(T.a)({},P),{},{params:r}));case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.update=function(){var e=Object(C.a)(R.a.mark((function e(t,r){var a,c;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={playerNumber:r},e.next=3,w.a.post(n.url+"/update",t,Object(T.a)(Object(T.a)({},P),{},{params:a}));case 3:return c=e.sent,e.abrupt("return",c.data);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),this.end=function(){var e=Object(C.a)(R.a.mark((function e(t,r){var a,c;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={playerNumber:r},e.next=3,w.a.post(n.url+"/end",t,Object(T.a)(Object(T.a)({},P),{},{params:a}));case 3:return c=e.sent,e.abrupt("return",c.data);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),this.url=t},_={Selector:function(e){var t=e.onChange,n=Object(c.useCallback)((function(e){t&&t(e.target.value)}),[t]);return Object(M.jsx)(m.a.Item,{label:"Address",children:Object(M.jsx)(N.a,{prefix:Object(M.jsx)(A.a,{}),onChange:n})})},create:function(e){return new U(e)},label:"REST"},G=function(e){return!!e},L=[_],D=function(e){var t=e.onControllerChange,n=e.onNext,r=Object(c.useState)([]),a=Object(b.a)(r,2),i=a[0],s=a[1],o=Object(c.useMemo)((function(){return[]}),[]),l=Object(c.useCallback)((function(e){return function(n){o[e]=i[e].factory.create(n),t(o.filter(G))}}),[t,o,i]),u=Object(c.useMemo)((function(){return i.map((function(e,n){var r=e.key,a=e.factory;return Object(M.jsxs)(h.b,{style:{display:"flex"},align:"baseline",children:[Object(M.jsx)(a.Selector,{onChange:l(n)}),Object(M.jsx)(p.a,{type:"text",icon:Object(M.jsx)(S.a,{}),onClick:function(){s(i.filter((function(e){return e.key!==r}))),o[n]=void 0,t(o.filter(G))}})]},r)}))}),[i,s,o,l,t]),j=Object(c.useMemo)((function(){return L.map((function(e,t){return Object(M.jsxs)(p.a,{type:"dashed",icon:Object(M.jsx)(y.a,{}),onClick:function(){s([].concat(Object(f.a)(i),[{key:Object(v.uniqueId)(e.label),factory:e}]))},children:["Add ",e.label," controller"]},t)}))}),[i,s]);return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(m.a,{children:u}),Object(M.jsx)(h.b,{children:j}),Object(M.jsx)(x.a,{}),Object(M.jsx)(g.a,{title:"You must specifiy at least 2 controllers",placement:"right",children:Object(M.jsx)(p.a,{type:"primary",onClick:n,disabled:o.length<2,children:"Next"})})]})},z=n(136),H=n(198),J=n(190),W=n(331),F=n(189),V=n(193),Y=n(328);!function(e){e.DRAW="DRAW",e.WINNER="WINNER",e.TIMEOUT="TIMEOUT"}(r||(r={})),function(e){e.NORTH="N",e.SOUTH="S",e.EAST="E",e.WEST="W",e.NOP="X"}(a||(a={}));var q,B=function(e){return Array.isArray(e)&&2===e.length},K=function e(t){var n=this;Object(E.a)(this,e),this.gameState=void 0,this.pool=void 0,this.generatePool=function(){var e=n.gameState,t=e.positions,r=e.meta,a=e.food,c=r.gridSize,i=Object(v.flatten)(t).concat(a);return new Array(c*c).fill(0).map((function(e,t){return[t%c,Math.floor(t/c)]})).filter((function(e){return!i.some((function(t){return Object(v.isEqual)(t,e)}))})).filter(B)},this.next=function(){var e=Math.floor(Math.random()*n.pool.length);return n.pool.splice(e,1)[0]},this.empty=function(){return 0===n.pool.length},this.gameState=t,this.pool=this.generatePool()},X=n(64),Q=function(e){var t=e[e.length-1],n=t.meta,a=t.playerAlive.filter((function(e){return e})).length,c=a>1?r.TIMEOUT:1===a?r.WINNER:r.DRAW,i=t.playerAlive.findIndex((function(e){return e})),s=e.map((function(e){return Object(v.omit)(e,["meta"])})),o=(new Date).toISOString();return Object(T.a)(Object(T.a)({},n),{},{tickCount:s.length,ticks:s,winner:i,timeStamp:o,result:c})},Z={gridSize:50,maxTicks:1e3},$=function(){function e(t,n,r){Object(E.a)(this,e),this.controllers=void 0,this.options=void 0,this.gameState=void 0,this.controllersReady=void 0,this.onGameTick=void 0,this.controllers=t,this.options=Object(T.a)(Object(T.a)({},Z),n),this.gameState=this.initState(t,this.options),this.controllersReady=new Array(t.length).fill(!1),this.onGameTick=null!==r&&void 0!==r?r:function(){}}return Object(z.a)(e,[{key:"initControllers",value:function(){var e=Object(C.a)(R.a.mark((function e(){var t=this;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(this.controllers.map(function(){var e=Object(C.a)(R.a.mark((function e(n,r){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.init({playerNumber:r,gameId:t.gameState.meta.gameId,gridSize:t.gameState.meta.gridSize,playerCount:t.gameState.meta.playerCount});case 2:t.controllersReady[r]=!0;case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"run",value:function(){var e=Object(C.a)(R.a.mark((function e(){var t,n,r,a=this;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.controllersReady.every((function(e){return e}))){e.next=2;break}throw new Error("Controllers are not ready. "+JSON.stringify(this.controllersReady));case 2:t=[];case 3:if(!(this.gameState.playerAlive.filter((function(e){return e})).length>1&&this.gameState.tick<this.options.maxTicks)){e.next=11;break}return n=Object(v.cloneDeep)(this.gameState),t.push(n),e.next=8,this.update();case 8:this.onGameTick(this.gameState.tick),e.next=3;break;case 11:return r=Object(v.cloneDeep)(this.gameState),t.push(r),this.onGameTick(this.gameState.tick),e.next=16,Promise.all(this.controllers.map(function(){var e=Object(C.a)(R.a.mark((function e(t,n){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.end(a.gameState,n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()));case 16:return e.abrupt("return",Q(t));case 17:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"initState",value:function(e,t){var n=e.length,r={tick:0,positions:[],lastMoves:[],food:[],playerAlive:new Array(n).fill(!0),meta:{playerCount:n,gameId:Object(Y.a)(),gridSize:t.gridSize}},a=new K(r);return r.positions=new Array(n).fill(null).map((function(){return[a.next()]})),r.food=new Array(n).fill(null).map((function(){return a.next()})),r}},{key:"update",value:function(){var e=Object(C.a)(R.a.mark((function e(){var t,n,r=this;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(this.controllers.map(function(){var e=Object(C.a)(R.a.mark((function e(t,n){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r.gameState.playerAlive[n]){e.next=6;break}return e.next=3,t.update(r.gameState,n).catch((function(){return null}));case 3:return e.abrupt("return",e.sent);case 6:return e.abrupt("return",a.NOP);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()));case 2:return t=e.sent,n=this.apply(this.gameState,t),this.gameState=n,e.abrupt("return",this.gameState);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"apply",value:function(e,t){var n=Object(T.a)({},e);n.tick=e.tick+1;var r=t.map((function(t,r){if(t===a.NOP)return n.playerAlive[r]=!1,null;if(null===t)return V.a.error({message:"Player ".concat(r," disqualified"),description:"Player ".concat(r," has been disqualified. Either the controller has crashed or it returned an invalid move."),duration:0}),n.playerAlive[r]=!1,null;if(!e.playerAlive[r])return null;n.lastMoves[r]=t;var c=e.positions[r][0],i=function(e){var t;return(t={},Object(X.a)(t,a.NORTH,[0,-1]),Object(X.a)(t,a.SOUTH,[0,1]),Object(X.a)(t,a.EAST,[1,0]),Object(X.a)(t,a.WEST,[-1,0]),t)[e]}(t);return[c[0]+i[0],c[1]+i[1]]}));r.forEach((function(e,t){var r,a;null!==e&&(r=e,a=n.meta.gridSize,r.every((function(e){return e>=0&&e<a}))||(n.playerAlive[t]=!1))})),r.forEach((function(e,t){null!==e&&(r.filter((function(t){return null!==t&&t[0]===e[0]&&t[1]===e[1]})).filter(B).length>1&&(n.playerAlive[t]=!1))}));var c=new Set;r.forEach((function(e,t){if(null!==e){var r=n.food.findIndex((function(t){return null!==t&&t[0]===e[0]&&t[1]===e[1]}));-1!==r?c.add(r):n.positions[t].pop()}}));var i=n.positions.flat();r.forEach((function(e,t){null!==e&&(-1!==i.findIndex((function(t){return null!==t&&t[0]===e[0]&&t[1]===e[1]}))&&(n.playerAlive[t]=!1))})),r.forEach((function(e,t){null!==e&&n.positions[t].unshift(e)}));var s=new K(n);return n.food=n.food.map((function(e,t){if(c.has(t)){if(s.empty())return;return s.next()}return e})).filter(B),n}}]),e}(),ee=d.a.Title;!function(e){e[e.UNSET=0]="UNSET",e[e.CONTROLLER_INIT=1]="CONTROLLER_INIT",e[e.ERROR_STATE=2]="ERROR_STATE",e[e.GAME_RUN=3]="GAME_RUN",e[e.GAME_OVER=4]="GAME_OVER"}(q||(q={}));var te,ne=function(e){Object(H.a)(n,e);var t=Object(J.a)(n);function n(e){var r;return Object(E.a)(this,n),(r=t.call(this,e)).onTickUpdate=function(e){var t=r.props.options;if(t){var n=Math.round(e/t.maxTicks*100);r.setState({tickProgress:n})}},r.onCancel=function(){r.props.onPrev()},r.stateUpdate=function(e){var t=r.state,n=t.runStage,a=t.game;if(a)switch(n){case q.CONTROLLER_INIT:a.initControllers().then((function(){r.setState({runStage:q.GAME_RUN})})).catch((function(e){r.setState({runStage:q.ERROR_STATE,errorTitle:"Error initialising controllers",errorDesc:e.message})}));break;case q.GAME_RUN:a.run().then((function(e){r.props.gameComplete(e),r.setState({runStage:q.GAME_OVER,history:e}),r.props.onNext()})).catch((function(e){r.setState({runStage:q.ERROR_STATE,errorTitle:"Error running game",errorDesc:e.message})}))}else r.setState({runStage:q.ERROR_STATE,errorTitle:"No game object available"})},r.statusMessage=function(){var e=r.state,t=e.runStage,n=e.errorDesc,a=e.errorTitle;switch(t){case q.CONTROLLER_INIT:return Object(M.jsx)(ee,{level:3,children:"Initialising controllers..."});case q.ERROR_STATE:return Object(M.jsx)(W.a,{message:a,description:Object(M.jsx)("pre",{children:n}),type:"error",showIcon:!0});case q.GAME_RUN:return Object(M.jsx)(ee,{level:3,children:"Running..."});case q.GAME_OVER:return Object(M.jsx)(ee,{level:3,children:"Game complete!"});default:return Object(M.jsx)(W.a,{message:"Game unset!? Contact dev",type:"warning",showIcon:!0})}},r.state={runStage:q.UNSET,tickProgress:0},r}return Object(z.a)(n,[{key:"componentDidUpdate",value:function(e,t){t.runStage!==this.state.runStage&&this.stateUpdate()}},{key:"componentDidMount",value:function(){var e=this.props,t=e.controllers,n=e.options;if(t&&t.length&&n){var r=new $(t,n,this.onTickUpdate);this.setState({game:r,runStage:q.CONTROLLER_INIT})}else this.setState({runStage:q.ERROR_STATE,errorTitle:"Missing controllers or options?",errorDesc:JSON.stringify(t,null,2)+"\n"+JSON.stringify(n,null,2)})}},{key:"render",value:function(){var e=this.statusMessage(),t=this.state,n=t.tickProgress,r=t.runStage,a="normal";return r===q.GAME_RUN?a="active":r===q.GAME_OVER?a="success":r===q.ERROR_STATE&&(a="exception"),Object(M.jsx)(M.Fragment,{children:Object(M.jsxs)(h.b,{direction:"vertical",style:{width:"100%",justifyContent:"center",alignItems:"center"},children:[e,Object(M.jsx)(F.a,{type:"circle",percent:n,status:a}),Object(M.jsx)("br",{}),Object(M.jsx)(p.a,{size:"large",onClick:this.onCancel,danger:!0,children:"Cancel"})]})})}}]),n}(i.a.Component),re=n(324),ae=function(e){var t=e.onConfigChange,n=e.onNext,r=e.onPrev,a=i.a.useState(50),s=Object(b.a)(a,2),o=s[0],l=s[1],u=i.a.useState(1e3),j=Object(b.a)(u,2),O=j[0],d=j[1],f=Object(c.useCallback)((function(){t({gridSize:o,maxTicks:O})}),[t,o,O]),x=Object(c.useCallback)((function(e){d(e),f()}),[f,d]),g=Object(c.useCallback)((function(e){l(e),f()}),[f,l]);return Object(c.useEffect)((function(){t({gridSize:o,maxTicks:O})}),[t,o,O]),Object(M.jsxs)(M.Fragment,{children:[Object(M.jsxs)(m.a,{children:[Object(M.jsx)(m.a.Item,{label:"Max ticks",children:Object(M.jsx)(re.a,{min:1,max:1e4,defaultValue:1e3,value:O,onChange:x})}),Object(M.jsx)(m.a.Item,{label:"Grid size",children:Object(M.jsx)(re.a,{min:10,max:1e3,defaultValue:50,value:o,onChange:g})})]}),Object(M.jsxs)(h.b,{children:[Object(M.jsx)(p.a,{onClick:r,children:"Previous"}),Object(M.jsx)(p.a,{type:"primary",onClick:n,children:"Start"})]})]})},ce=n(325),ie=n(327),se=n(335),oe=n(336),le=n(337),ue=n(196),je=n(338),be=n(103),Oe=n.n(be);!function(e){e.HISTORIES="histories"}(te||(te={}));var de,fe=function(){var e=Oe.a.get(te.HISTORIES)||{};return Object.values(e).sort((function(e,t){return new Date(e.timeStamp).valueOf()-new Date(t.timeStamp).valueOf()}))},he=function(e){var t=new Blob([JSON.stringify(e,null,2)],{type:"text/json"});return{href:URL.createObjectURL(t),download:"".concat(e.timeStamp,".json")}},pe=ce.a.Panel,me=d.a.Paragraph,xe=function(e){var t=e.gameHistory,n=e.onNext;if(Object(c.useEffect)((function(){t&&function(e){var t=Oe.a.get(te.HISTORIES)||{};Oe.a.set(te.HISTORIES,Object(T.a)(Object(T.a)({},t),{},Object(X.a)({},e.gameId,e)))}(t)})),!t)return Object(M.jsx)("div",{children:"Error: No game history specified"});var a=he(t),i=Object(M.jsx)(ie.a,{icon:Object(M.jsx)(se.a,{}),status:"success",title:"Player "+t.winner+" wins!"});return t.result===r.DRAW?i=Object(M.jsx)(ie.a,{icon:Object(M.jsx)(oe.a,{}),status:"warning",title:"Draw!"}):t.result===r.TIMEOUT&&(i=Object(M.jsx)(ie.a,{icon:Object(M.jsx)(le.a,{}),status:"warning",title:"Timeout"})),Object(M.jsxs)(M.Fragment,{children:[i,Object(M.jsxs)(h.b,{children:[Object(M.jsx)(p.a,{onClick:n,type:"primary",children:"New game"}),Object(M.jsx)(l.b,{to:"/viewer?gameId=".concat(null===t||void 0===t?void 0:t.gameId),children:Object(M.jsx)(p.a,{icon:Object(M.jsx)(ue.a,{}),children:"Show in viewer"})}),Object(M.jsx)(p.a,Object(T.a)(Object(T.a)({icon:Object(M.jsx)(je.a,{})},a),{},{children:"Download replay"}))]}),Object(M.jsx)(x.a,{}),Object(M.jsx)(ce.a,{children:Object(M.jsx)(pe,{header:"Full Game History",children:Object(M.jsx)(me,{children:Object(M.jsx)("pre",{children:JSON.stringify(t,null,2)})})},"1")})]})},ge=O.a.Step,ve=d.a.Title;!function(e){e[e.CONTROLLER_CREATOR=0]="CONTROLLER_CREATOR",e[e.GAME_SETUP=1]="GAME_SETUP",e[e.PLAYING=2]="PLAYING",e[e.SUMMARY=3]="SUMMARY"}(de||(de={}));var Se=function(){var e=Object(c.useState)(de.CONTROLLER_CREATOR),t=Object(b.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)([]),i=Object(b.a)(a,2),s=i[0],o=i[1],l=Object(c.useState)(),u=Object(b.a)(l,2),j=u[0],d=u[1],f=Object(c.useState)(),h=Object(b.a)(f,2),p=h[0],m=h[1],x=Object(c.useCallback)((function(e){o(e)}),[o]),g=Object(c.useCallback)((function(e){d(e)}),[d]),v=Object(c.useCallback)((function(e){m(e)}),[m]),S=Object(c.useCallback)((function(){r((n+1)%(de.SUMMARY+1))}),[n,r]),y=Object(c.useCallback)((function(){r((n-1)%(de.SUMMARY+1))}),[n,r]);return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(ve,{children:"Play a Game"}),Object(M.jsxs)(O.a,{current:n,children:[Object(M.jsx)(ge,{title:"Controller Creator"}),Object(M.jsx)(ge,{title:"Game Setup"}),Object(M.jsx)(ge,{title:"Running"}),Object(M.jsx)(ge,{title:"Summary"})]}),Object(M.jsx)("br",{}),n===de.CONTROLLER_CREATOR&&Object(M.jsx)(D,{onControllerChange:x,onNext:S}),n===de.GAME_SETUP&&Object(M.jsx)(ae,{onConfigChange:g,onNext:S,onPrev:y}),n===de.PLAYING&&Object(M.jsx)(ne,{controllers:s,options:j,onPrev:y,onNext:S,gameComplete:v}),n===de.SUMMARY&&Object(M.jsx)(xe,{gameHistory:p,onNext:S})]})},ye=d.a.Title,ke=d.a.Paragraph,Re=function(e){return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(ye,{children:"Snake Tron - Code Fights!"}),Object(M.jsx)(ke,{children:"What, you thought there would be content?"})]})},Te=u.a.Content,Ce=function(e){return Object(M.jsx)(Te,{className:"content",children:e.children})},Ee=u.a.Footer,Ne=function(){return Object(M.jsxs)(Ee,{className:"footer",children:["Created by ",Object(M.jsx)("a",{href:"http://samuel-lewis.com/",children:"Samuel Lewis"})]})},Ie=n(86),we=u.a.Header,Ae=function(){return Object(M.jsxs)(we,{className:"header",children:[Object(M.jsx)("div",{className:"logo"}),Object(M.jsxs)(Ie.a,{theme:"dark",mode:"horizontal",children:[Object(M.jsx)(Ie.a.Item,{children:Object(M.jsx)(l.b,{to:"/",children:"Home"})},"home"),Object(M.jsx)(Ie.a.Item,{children:Object(M.jsx)(l.b,{to:"/game",children:"Game"})},"game"),Object(M.jsx)(Ie.a.Item,{children:Object(M.jsx)(l.b,{to:"/viewer",children:"Viewer"})},"viewer"),Object(M.jsx)(Ie.a.Item,{children:Object(M.jsx)(l.b,{to:"/tester",children:"Controller Tester"})},"tester")]})]})},Me=n(322),Pe=n(317),Ue=n(318),_e=Me.a.TabPane,Ge=d.a.Title,Le=d.a.Paragraph,De="48e2ee9e-171e-45bd-8904-a762d8e2b782",ze={playerNumber:1,playerCount:2,gameId:De,gridSize:50},He={tick:2,positions:[[[42,31],[41,31],[40,31]],[[47,27],[47,28]]],lastMoves:[a.NORTH,a.SOUTH],food:[[35,16],[17,6]],playerAlive:[!0,!0],meta:{playerCount:2,gameId:De,gridSize:50}},Je=function(){var e=Object(c.useState)(null),t=Object(b.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),i=Object(b.a)(a,2),s=i[0],o=i[1],l=Object(c.useState)(""),u=Object(b.a)(l,2),j=u[0],O=u[1],d=Object(c.useCallback)((function(e){r(_.create(e))}),[r]),f=Object(c.useCallback)((function(){O(JSON.stringify(ze,null,2)),null===n||void 0===n||n.init(ze).then((function(e){return o(JSON.stringify(e,null,2))})).catch((function(e){return o(e.message)}))}),[n,o]),m=Object(c.useCallback)((function(){O(JSON.stringify(He,null,2)),null===n||void 0===n||n.update(He,1).then((function(e){return o(JSON.stringify(e,null,2))})).catch((function(e){return o(e.message)}))}),[n,o]),g=Object(c.useCallback)((function(){O(JSON.stringify(He,null,2)),null===n||void 0===n||n.end(He,1).then((function(e){return o(JSON.stringify(e,null,2))})).catch((function(e){return o(e.message)}))}),[n,o]);return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(Ge,{children:"Controller Tester"}),Object(M.jsx)(Me.a,{defaultActiveKey:"1",children:Object(M.jsx)(_e,{tab:_.label,children:Object(M.jsx)(_.Selector,{onChange:d})},"1")}),Object(M.jsxs)(h.b,{children:[Object(M.jsx)(p.a,{onClick:f,children:"Test game initialise"}),Object(M.jsx)(p.a,{onClick:m,children:"Test game update"}),Object(M.jsx)(p.a,{onClick:g,children:"Test game end"})]}),Object(M.jsxs)(Pe.a,{gutter:16,children:[Object(M.jsxs)(Ue.a,{span:12,children:[Object(M.jsx)(x.a,{children:"Sent"}),Object(M.jsx)(Le,{children:j&&Object(M.jsx)("pre",{children:j})})]}),Object(M.jsxs)(Ue.a,{span:12,children:[Object(M.jsx)(x.a,{children:"Response"}),Object(M.jsx)(Le,{children:s&&Object(M.jsx)("pre",{children:s})})]})]})]})},We=n(195),Fe=n(194),Ve=n(332),Ye=n(319),qe=n(323),Be=["#e6194B","#3cb44b","#ffe119","#4363d8","#f58231","#911eb4","#42d4f4","#f032e6","#bfef45","#fabed4","#469990","#dcbeff","#9A6324","#fffac8","#800000","#aaffc3","#808000","#ffd8b1","#000075"],Ke=function(e){return Be[e%Be.length]},Xe=400,Qe=function(e,t){var n=Object(b.a)(e,2);return[n[0]*t+t/2,n[1]*t+t/2]};var Ze=function(e){var t=Object(c.useRef)(null),n=e.state,r=e.gridSize;return Object(c.useLayoutEffect)((function(){var e=t.current;if(e){var a=e.getContext("2d");if(a){var c=Xe/r;!function(e){e.clearRect(0,0,Xe,Xe),e.lineWidth=1,e.strokeStyle="white",e.strokeRect(0,0,Xe,Xe)}(a),n.positions.forEach((function(e,t){!function(e,t,n,r){var a=Ke(r),c=Qe(n[0],t),i=Object(b.a)(c,2),s=i[0],o=i[1];e.lineWidth=t-2,e.strokeStyle=a,e.lineCap="square",e.beginPath(),e.moveTo(s,o),n.forEach((function(n){var r=Qe(n,t),a=Object(b.a)(r,2),c=a[0],i=a[1];e.lineTo(c,i)})),e.stroke()}(a,c,e,t)})),n.food.forEach((function(e){return function(e,t,n){var r=Qe(n,t),a=Object(b.a)(r,2),c=a[0],i=a[1];e.fillStyle="green",e.beginPath(),e.arc(c,i,t/2,0,2*Math.PI),e.fill()}(a,c,e)}))}}}),[t,n,r]),Object(M.jsx)("canvas",{width:Xe,height:Xe,ref:t})},$e=n(143),et=n(145),tt=d.a.Paragraph,nt=function(e){var t=e.frame;if(!t)return null;var n=new Array(t.playerAlive.length).fill(null).map((function(e,n){return{key:"Player ".concat(n),alive:t.playerAlive[n],lastMove:t.lastMoves[n],position:t.positions[n],playerNumber:n}})),r=[{title:"Player",dataIndex:"playerNumber",key:"playerNumber",render:function(e){return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)("span",{className:"dot",style:{backgroundColor:Ke(e)}}),"Player ",e]})}},{title:"Alive",dataIndex:"alive",key:"alive",render:function(e){return e?Object(M.jsx)($e.a,{}):Object(M.jsx)(et.a,{})}},{title:"Last Move",dataIndex:"lastMove",key:"lastMove"},{title:"Positions",dataIndex:"position",key:"position",render:function(e){return JSON.stringify(e)},ellipsis:!0}];return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsxs)(tt,{children:["Tick: ",t.tick]}),Object(M.jsxs)(tt,{children:["Food: ",JSON.stringify(t.food)]}),Object(M.jsx)(Ye.a,{size:"small",dataSource:n,columns:r,pagination:!1,expandable:{expandedRowRender:function(e){return Object(M.jsx)("p",{style:{margin:0},children:JSON.stringify(e.position)})}}})]})},rt=function(e){var t=e.history,n=Object(c.useState)(0),r=Object(b.a)(n,2),a=r[0],i=r[1],s=Object(c.useCallback)((function(e){return i(e)}),[i]);return t?Object(M.jsxs)(Pe.a,{justify:"center",children:[Object(M.jsxs)(Ue.a,{span:12,children:[Object(M.jsx)(Ze,{state:t.ticks[a],gridSize:t.gridSize}),Object(M.jsx)(qe.a,{style:{width:"400px",marginLeft:0,marginRight:0},value:a,min:0,max:t.tickCount-1,onChange:s})]}),Object(M.jsx)(Ue.a,{span:12,children:Object(M.jsx)(nt,{frame:t.ticks[a]})})]}):Object(M.jsx)("div",{children:"Error: No history loaded?!"})},at=["key","humanDate"],ct=d.a.Title,it=function(){var e=Object(c.useState)(fe().reverse()),t=Object(b.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(),s=Object(b.a)(i,2),o=s[0],u=s[1],O=new URLSearchParams(Object(j.f)().search);Object(c.useEffect)((function(){var e=O.get("gameId");if(e)if("latest"!==e){var t=n.find((function(t){return t.gameId===e}));t?u(t):Fe.b.error("Could not find game ".concat(e))}else u(n[0])}),[n,u,O]);var d=Object(c.useMemo)((function(){return n.map((function(e){return Object(T.a)(Object(T.a)({},e),{},{key:e.gameId})}))}),[n]),f=[{title:"Timestamp",dataIndex:"timeStamp",key:"timeStamp",ellipsis:!0,sorter:{compare:function(e,t){return new Date(e.timeStamp).valueOf()-new Date(t.timeStamp).valueOf()},multiple:1},render:function(e){return Object(M.jsx)("span",{children:new Date(e).toString()})}},{title:"Result",dataIndex:"result",key:"result",sorter:{compare:function(e,t){return e.result.localeCompare(t.result)},multiple:2},render:function(e){var t=e===r.WINNER?"green":e===r.DRAW?"blue":"red";return Object(M.jsx)(Ve.a,{color:t,children:e})}},{title:"Winner",dataIndex:"winner",key:"winner",sorter:{compare:function(e,t){return e.winner-t.winner},multiple:3}},{title:"Player count",dataIndex:"playerCount",key:"playerCount",sorter:{compare:function(e,t){return e.playerCount-t.playerCount},multiple:4}},{title:"Tick count",dataIndex:"tickCount",key:"tickCount",sorter:{compare:function(e,t){return e.tickCount-t.tickCount},multiple:5}},{title:"Grid size",dataIndex:"gridSize",key:"gridSize",sorter:{compare:function(e,t){return e.gridSize-t.gridSize},multiple:6}},{title:"ID",dataIndex:"gameId",key:"gameId",ellipsis:!0,sorter:{compare:function(e,t){return e.gameId.localeCompare(t.gameId)},multiple:7}},{title:"Actions",key:"actions",render:function(e,t){t.key,t.humanDate;var n=Object(We.a)(t,at),r=he(n);return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(g.a,{title:"View",children:Object(M.jsx)(l.b,{to:"/viewer?gameId=".concat(n.gameId),children:Object(M.jsx)(p.a,{icon:Object(M.jsx)(ue.a,{})})})}),Object(M.jsx)(g.a,{title:"Download",children:Object(M.jsx)(p.a,Object(T.a)({icon:Object(M.jsx)(je.a,{})},r))}),Object(M.jsx)(g.a,{title:"Delete",children:Object(M.jsx)(p.a,{onClick:function(){!function(e){var t=Oe.a.get(te.HISTORIES)||{};t[e]=void 0,Oe.a.set(te.HISTORIES,t),fe()}(t.gameId),a(fe()),o&&o.gameId===t.gameId&&u(void 0)},icon:Object(M.jsx)(S.a,{})})})]})}}];return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(ct,{children:"Game Viewer"}),o&&Object(M.jsx)(rt,{history:o}),Object(M.jsx)(x.a,{children:"Saved Rounds"}),Object(M.jsx)(Ye.a,{dataSource:d,columns:f,pagination:{pageSize:10,position:["topRight","bottomRight"],showTotal:function(e){return"".concat(e," games")}}})]})};var st=function(){return Object(M.jsx)("div",{className:"App",children:Object(M.jsxs)(u.a,{className:"layout",children:[Object(M.jsx)(Ae,{}),Object(M.jsx)(Ce,{children:Object(M.jsxs)(j.c,{children:[Object(M.jsx)(j.a,{exact:!0,path:"/",children:Object(M.jsx)(Re,{})}),Object(M.jsx)(j.a,{path:"/game",children:Object(M.jsx)(Se,{})}),Object(M.jsx)(j.a,{path:"/viewer",children:Object(M.jsx)(it,{})}),Object(M.jsx)(j.a,{path:"/tester",children:Object(M.jsx)(Je,{})})]})}),Object(M.jsx)(Ne,{})]})})};o.a.render(Object(M.jsx)(i.a.StrictMode,{children:Object(M.jsx)(l.a,{children:Object(M.jsx)(st,{})})}),document.getElementById("root"))}},[[312,1,2]]]);
//# sourceMappingURL=main.f08d4534.chunk.js.map