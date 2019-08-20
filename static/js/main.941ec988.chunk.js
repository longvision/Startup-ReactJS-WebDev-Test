(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{113:function(n,t,e){"use strict";e.r(t);var r={};e.r(r),e.d(r,"LOAD_REQUEST",function(){return v}),e.d(r,"LOAD_SUCCESS",function(){return O}),e.d(r,"addRepoRequest",function(){return j}),e.d(r,"addRepoSuccess",function(){return y});var a={};e.r(a),e.d(a,"LOAD_COMMITS_REQUEST",function(){return w}),e.d(a,"LOAD_COMMITS_SUCCESS",function(){return C}),e.d(a,"loadCommitsRequest",function(){return k}),e.d(a,"loadCommitsSuccess",function(){return S});var o=e(0),i=e.n(o),c=e(27),u=e.n(c),l=(e(71),e(83),e(84),e(17)),p=e(18),s=e(21),d=e(19),f=e(22),m=e(20),b=e(114),x=e(7),h=e(63),g=e(23),v="LOAD_REQUEST",O="LOAD_SUCCESS",j=function(n){return{type:"LOAD_REQUEST",payload:{repository:n}}},y=function(n){return{type:"LOAD_SUCCESS",payload:{data:n}}},E={data:[],loading:!1};var w="LOAD_COMMITS_REQUEST",C="LOAD_COMMITS_SUCCESS",k=function(n){return{type:"LOAD_COMMITS_REQUEST",payload:{full_name:n}}},S=function(n){return{type:"LOAD_COMMITS_SUCCESS",payload:{data:n}}},_={data:[],loading:!1};var L=Object(x.c)({repo:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(g.a)({},n,{loading:!0});case O:return Object(g.a)({},n,{data:t.payload.data,loading:!1});default:return n}},commits:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(g.a)({},n,{loading:!0});case C:return Object(g.a)({},n,{data:t.payload.data,loading:!1});default:return n}}}),z=e(15),A=e.n(z),R=e(11),M=e(57),D=e.n(M).a.create({baseURL:"https://api.github.com"}),I=A.a.mark(T);function T(n){var t,e;return A.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(R.call)(D.get,"/users/".concat(n.payload.repository,"/repos?per_page=100"));case 3:return t=r.sent,e=t.data,r.next=7,Object(R.put)(y(e));case 7:r.next=11;break;case 9:r.prev=9,r.t0=r.catch(0);case 11:case"end":return r.stop()}},I,null,[[0,9]])}var U=e(13),Q=Object(U.a)(),G=A.a.mark(q);function q(n){var t;return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(R.call)(D.get,"/repos/".concat(n.payload.full_name,"/commits"));case 3:return t=e.sent,e.next=6,Object(R.put)(S(t.data));case 6:Q.push("/commits"),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}},G,null,[[0,9]])}var F=A.a.mark(J);function J(){return A.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(R.all)([Object(R.takeLatest)(v,T),Object(R.takeLatest)(w,q)]);case 2:case"end":return n.stop()}},F)}var N=[],B=Object(h.a)({sagaMonitor:null});N.push(B);var W=Object(x.d)(x.a.apply(void 0,N)),H=Object(x.e)(L,W);B.run(J);var K=H,P=e(30),V=e.n(P),X=e(5),Y=e(6);function Z(){var n=Object(X.a)(["\n  margin-top: 20px;\n  width: 100%;\n  max-width: 550px;\n  /* display: flex; */\n\n  input {\n    flex: 1;\n    height: 55px;\n    padding: 0 20px;\n    background: #fff;\n    border: 0;\n    color: #48285b;\n    font-size: 18px;\n    border-radius: 3px;\n    min-width: 300px;\n  }\n  button {\n    height: 55px;\n    padding: 0 20px;\n    margin-left: 10px;\n    background: #ffe162;\n    color: #48285b;\n    border: 0;\n    font-size: 20px;\n    font-weight: bold;\n    border-radius: 3px;\n    flex: 1;\n    &:hover {\n      background: #fff111;\n    }\n  }\n"]);return Z=function(){return n},n}function $(){var n=Object(X.a)(["\n  height: 100%;\n"]);return $=function(){return n},n}function nn(){var n=Object(X.a)(["\n  height: 250px;\n  margin-bottom: 1px;\n"]);return nn=function(){return n},n}function tn(){var n=Object(X.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 60px;\n  height: 100%;\n  min-height: 1020px;\n  background-color: #48285b;\n  flex: 1;\n"]);return tn=function(){return n},n}var en=Y.b.div(tn()),rn=Y.b.img(nn()),an=(Y.b.div($()),Y.b.form(Z()));function on(){var n=Object(X.a)(["\n  height: 100%;\n"]);return on=function(){return n},n}function cn(){var n=Object(X.a)(["\n  margin: 25px;\n  padding: 25px;\n"]);return cn=function(){return n},n}function un(){var n=Object(X.a)(["\n  background: #ffe160;\n  border-radius: 3px;\n  min-width: 120px;\n  margin: 5px 0;\n  font-size: 24px;\n"]);return un=function(){return n},n}function ln(){var n=Object(X.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n"]);return ln=function(){return n},n}function pn(){var n=Object(X.a)(["\n  color: #ffe160;\n  font-size: 20px;\n  padding-top: 20px;\n"]);return pn=function(){return n},n}function sn(){var n=Object(X.a)(["\n  width: 90%;\n  background: #fff;\n  border-radius: 3px;\n  /* display: flex; */\n  flex-direction: column;\n  margin: 5px;\n\n  header {\n    padding: 0 20px 20px;\n    display: flex;\n    flex-direction: column;\n    align-items: left;\n    justify-content: center;\n    flex: 1;\n\n    strong {\n      font-size: 26px;\n      color: #000;\n      max-width: 750px;\n    }\n    small {\n      font-size: 19px;\n      color: #666;\n      max-width: 750px;\n    }\n  }\n  img {\n    width: 64px;\n    height: 64px;\n    margin: 15px 15px;\n  }\n"]);return sn=function(){return n},n}var dn=Y.b.div(sn()),fn=Y.b.span(pn()),mn=Y.b.div(ln()),bn=Y.b.button(un()),xn=Y.b.ul(cn()),hn=(Y.b.div(on()),function(n){function t(){var n,e;Object(l.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=Object(s.a)(this,(n=Object(d.a)(t)).call.apply(n,[this].concat(a)))).state={toCommits:!1,full_name:""},e.openCommits=function(n){(0,e.props.loadCommitsRequest)(n.full_name)},e}return Object(f.a)(t,n),Object(p.a)(t,[{key:"render",value:function(){var n=this,t=this.props.repo;return i.a.createElement(o.Fragment,null,t.loading&&i.a.createElement(fn,null," Carregando..."),i.a.createElement(xn,null,t.data.map(function(t){return i.a.createElement(mn,{key:t.id,"data-testid":"repo-list"},i.a.createElement(dn,null,i.a.createElement("img",{src:t.owner.avatar_url,alt:"avatar"}),i.a.createElement("header",null,i.a.createElement("strong",null,t.login),i.a.createElement("strong",null,t.name),i.a.createElement("small",null,t.description))),i.a.createElement(bn,{onClick:function(){return n.openCommits(t)}},"Commits"))})))}}]),t}(o.Component)),gn=Object(m.b)(function(n){return{repo:n.repo,commits:n.commits}},function(n){return Object(x.b)(a,n)})(hn),vn=function(n){function t(){var n,e;Object(l.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=Object(s.a)(this,(n=Object(d.a)(t)).call.apply(n,[this].concat(a)))).state={repositoryInput:""},e.handleAddRepository=function(n){n.preventDefault();var t=e.props,r=t.addRepoRequest;t.repo;r(e.state.repositoryInput)},e}return Object(f.a)(t,n),Object(p.a)(t,[{key:"render",value:function(){var n=this,t=this.state.repositoryInput,e=this.props.repo;return i.a.createElement(en,null,i.a.createElement(rn,{src:V.a,alt:"Github Guru"}),i.a.createElement("div",null,i.a.createElement("h1",null,e.data.id),i.a.createElement(an,{onSubmit:this.handleAddRepository},i.a.createElement("input",{type:"text",placeholder:"Type your Git username...",value:this.state.repositoryInput,onChange:function(t){return n.setState({repositoryInput:t.target.value})}}),i.a.createElement("button",{type:"submit"},"Check"))),i.a.createElement(gn,{repositoryInput:t}))}}]),t}(o.Component),On=Object(m.b)(function(n){return{repo:n.repo}},function(n){return Object(x.b)(r,n)})(vn),jn=e(29),yn=e(60),En=e.n(yn);function wn(){var n=Object(X.a)(["\n  max-width: 750px;\n  background: #fff;\n  border-radius: 3px;\n  display: flex;\n  flex-direction: column;\n  margin: 15px;\n  flex: 1;\n\n  /* padding: 10px; */\n  h1 {\n    font-size: 28px;\n  }\n\n  div {\n    flex-direction: row;\n    display: flex;\n\n    h2 {\n      padding: 40px;\n      font-size: 44px;\n      justify-content: center;\n      align-items: center;\n    }\n\n    img {\n      width: 100px;\n      height: 100px;\n      min-width: 125px;\n      min-width: 125px;\n      border-radius: 100%;\n      margin: 25px;\n    }\n  }\n\n  header {\n    padding: 13px;\n    font-size: 24px;\n    color: #c33;\n  }\n  strong {\n    font-size: 22px;\n    padding: 13px;\n    color: #c44;\n  }\n  small {\n    font-size: 19px;\n    padding: 13px;\n    color: #c66;\n  }\n  h2 {\n    margin: 0 25px 15px;\n  }\n"]);return wn=function(){return n},n}function Cn(){var n=Object(X.a)(["\n  /* margin-top: 20px;\n  width: 100%;\n   max-width: 400px; */\n  display: flex;\n  /* flex: 1; */\n  flex-direction: row;\n\n  border-radius: 3px;\n  -webkit-border-radius: 3px;\n  -moz-border-radius: 3px;\n  height: 55px;\n\n  margin-top: 20px;\n  width: 100%;\n  max-width: 400px;\n  input {\n    flex: 1;\n    height: 55px;\n    padding: 0 20px;\n    background: #fff;\n    border: 0;\n    color: #48285b;\n    font-size: 18px;\n    border-radius: 3px;\n  }\n\n  button {\n    height: 55px;\n    padding: 0 20px;\n    margin-left: 10px;\n    background: #ffe162;\n    color: #48285b;\n    border: 0;\n    font-size: 20px;\n    font-weight: bold;\n    border-radius: 3px;\n\n    &:hover {\n      background: #fff111;\n    }\n  }\n"]);return Cn=function(){return n},n}function kn(){var n=Object(X.a)(["\n  height: 100%;\n"]);return kn=function(){return n},n}function Sn(){var n=Object(X.a)(["\n  height: 250px;\n  /* margin-bottom: 15px; */\n"]);return Sn=function(){return n},n}function _n(){var n=Object(X.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  width: 100%;\n"]);return _n=function(){return n},n}function Ln(){var n=Object(X.a)(["\n  color: #fff;\n"]);return Ln=function(){return n},n}function zn(){var n=Object(X.a)(["\n  /* flex: 1;\n  padding: 0 20px; */\n  background: #fff;\n\n  /* color: #48285b; */\n  font-size: 18px;\n  border-radius: 3px;\n"]);return zn=function(){return n},n}function An(){var n=Object(X.a)(["\n  background: #fbfbfb;\n  border: 1px solid #eaeaea;\n  border-radius: 3px;\n  -webkit-border-radius: 3px;\n  -moz-border-radius: 3px;\n  height: 55px;\n  background-color: #f2f2f2;\n\n  margin-top: 20px;\n  width: 100%;\n  max-width: 400px;\n"]);return An=function(){return n},n}function Rn(){var n=Object(X.a)(["\n  color: #fff;\n  font-size: 22px;\n  margin-top: 15px;\n"]);return Rn=function(){return n},n}function Mn(){var n=Object(X.a)(["\n  flex: 1;\n  height: 55px;\n  padding: 0 20px;\n  background: #fff;\n  border: 0;\n  color: #48285b;\n  font-size: 18px;\n  border-radius: 3px;\n"]);return Mn=function(){return n},n}function Dn(){var n=Object(X.a)(["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  align-items: center;\n  padding-top: 60px;\n  height: 100%;\n  min-height: 1020px;\n\n  /* background: #fff; */\n"]);return Dn=function(){return n},n}var In=Y.b.div(Dn()),Tn=(Y.b.ul(Mn()),Y.b.h1(Rn())),Un=(Y.b.div(An()),Y.b.input(zn())),Qn=(Y.b.li(Ln()),Y.b.div(_n())),Gn=Y.b.img(Sn()),qn=(Y.b.div(kn()),Y.b.form(Cn())),Fn=Y.b.div(wn()),Jn=e(61),Nn=e.n(Jn),Bn=function(n){function t(){var n,e;Object(l.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=Object(s.a)(this,(n=Object(d.a)(t)).call.apply(n,[this].concat(a)))).state={items:[],search:""},e.filterList=function(n){var t=e.props.commits,r=e.state.items;r=t.data.filter(function(t){return-1!==t.commit.message.toLowerCase().search(n.target.value.toLowerCase())}),e.setState({items:r,search:n.target.value})},e.componentDidMount=function(){var n=e.props.commits;e.setState({items:n.data})},e}return Object(f.a)(t,n),Object(p.a)(t,[{key:"componentWillMount",value:function(){var n=this.props.commits.data.filter(function(n){return""===n.commit.message});this.setState({items:n})}},{key:"render",value:function(){var n=this.state,t=n.items,e=n.search;return console.log(t),i.a.createElement(In,null,i.a.createElement(Gn,{src:V.a,alt:"Github Guru"}),i.a.createElement(qn,null,i.a.createElement(Un,{type:"text",className:"form-control form-control-lg",placeholder:"Filter by commit message...",onChange:this.filterList}),i.a.createElement("button",{type:"submit"},"Filter")),""===e?i.a.createElement(Tn,null,"Last 20 commits:"):i.a.createElement(Tn,null,"All commits with '",e,"' will appear below:"),t.slice(0,20).map(function(n){return i.a.createElement(Qn,{key:n.sha},i.a.createElement(Fn,null,i.a.createElement("div",null,null===n.author?i.a.createElement("img",Object(jn.a)({src:Nn.a,alt:"avatar"},"alt","avatar")):i.a.createElement("img",{src:n.author.avatar_url}),i.a.createElement("h2",null,n.commit.author.name)),i.a.createElement("h2",null,"Commit message:",i.a.createElement("strong",null,n.commit.message)),i.a.createElement("h2",null,"Last Commit:",i.a.createElement("small",null,En()(n.commit.author.date).fromNow()))))}))}}]),t}(o.Component),Wn=Object(m.b)(function(n){return{repo:n.repo,commits:n.commits}})(Bn),Hn=function(){return i.a.createElement(b.c,null,i.a.createElement(b.a,{exact:!0,path:"/",component:On}),i.a.createElement(b.a,{path:"/commits",component:Wn}))};function Kn(){var n=Object(X.a)(["\n* {\n  margin:0;\n  padding:0;\n  outline:0;\n  box-sizing: border-box;\n\n}\nhtml, body, #root {\n  min-height: 100%;\n  min-width: 375px;\n}\nbody{\n  background:#48285b;\n  /* text-rendering: optimizeLegibility !important; */\n  -webkit-font-smoothing: antialiased !important;\n  font-family: sans-serif;\n  }\n"]);return Kn=function(){return n},n}var Pn=Object(Y.a)(Kn()),Vn=function(n){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,n),Object(p.a)(t,[{key:"render",value:function(){return i.a.createElement(b.b,{history:Q},i.a.createElement(m.a,{store:K},i.a.createElement(Hn,null),i.a.createElement(Pn,null)))}}]),t}(o.Component);u.a.render(i.a.createElement(Vn,null),document.getElementById("root"))},30:function(n,t,e){n.exports=e.p+"static/media/logo.8407d2c3.png"},61:function(n,t,e){n.exports=e.p+"static/media/avatar.c6460685.png"},66:function(n,t,e){n.exports=e(113)}},[[66,1,2]]]);
//# sourceMappingURL=main.941ec988.chunk.js.map