(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(t,e,n){t.exports=n(17)},16:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),c=n(4),r=n.n(c),s=n(2),i=n(5),h=n(6),u=n(8),l=n(7),d=n(1),p=n(9),f=(n(16),function(t){return o.a.createElement("img",{src:t.src,alt:""})}),v=function(t){function e(t){var n;return Object(i.a)(this,e),(n=Object(u.a)(this,Object(l.a)(e).call(this,t))).changeHandler=n.changeHandler.bind(Object(d.a)(n)),n.state={color:"red",photos:[],contador:0},n}return Object(p.a)(e,t),Object(h.a)(e,[{key:"componentDidMount",value:function(){var t=this,e=[];fetch("https://reqres.in/api/users?page=2").then(function(t){return t.json()}).then(function(n){n.data.forEach(function(t,n){e.push(t.avatar)}),t.setState(Object(s.a)({},t.state,{photos:e}))}).catch(function(t){}),window.setInterval(this.changeHandler,1e3)}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.changeHandler)}},{key:"changeHandler",value:function(){var t=this.state.contador;t=++t>=this.state.photos.length?0:t,this.setState(Object(s.a)({},this.state,{contador:t}))}},{key:"render",value:function(){var t={};return t=0===this.state.photos.length?null:o.a.createElement(f,{src:this.state.photos[this.state.contador]}),o.a.createElement("div",null,t)}}]),e}(o.a.Component);r.a.render(o.a.createElement(v,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.81a930bf.chunk.js.map