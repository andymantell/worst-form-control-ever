(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(15)},15:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(9),i=a.n(r),l=a(2),c=a(3),o=a(5),u=a(4),h=a(6),p=a(7),y=a(1),b=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).calculateValueHandler=a.calculateValueFunc.bind(Object(y.a)(Object(y.a)(a))),a.state={value:0,averageTypingRate:0},a.keypresses=[],a.rateHistory=[],a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"calculateValueFunc",value:function(){if(this.keypresses.push(Date.now()),this.keypresses.length>30&&this.keypresses.shift(),this.keypresses.length>1){var e=this.keypresses[0],t=this.keypresses[this.keypresses.length-1],a=this.keypresses.length/(t-e)*5e3;this.rateHistory.push(a),this.rateHistory.length>30&&this.rateHistory.shift();var n=Math.ceil(this.rateHistory.reduce(function(e,t){return e+t},0)/this.rateHistory.length);this.setState(function(e,t){return{value:n}})}}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("label",{htmlFor:"angry-typing"},"Please enter your age"),s.a.createElement("p",null,"Enter a number by adjusting your typing speed accordingly."),s.a.createElement("input",{id:"angry-typing",type:"text",onChange:this.calculateValueHandler,name:this.props.name,value:this.state.value}),s.a.createElement("div",{style:{position:"relative",height:"".concat(Math.ceil(Math.max.apply(Math,Object(p.a)(this.rateHistory)))+15,"px"),paddingLeft:"30px",width:"50%"}},this.rateHistory.map(function(e,t){return s.a.createElement("div",{key:t,style:{position:"absolute",left:"".concat(5*t,"px"),bottom:0,width:"5px",background:"green",height:"".concat(e,"px")}})}),s.a.createElement("div",{style:{position:"absolute",top:0,left:0}},Math.ceil(Math.max.apply(Math,Object(p.a)(this.rateHistory)))),s.a.createElement("div",{style:{position:"absolute",bottom:0,left:0}},"0"),s.a.createElement("div",{style:{position:"absolute",background:"black",height:"1px",width:"100%",left:0,bottom:"".concat(this.state.value,"px")}})))}}]),t}(n.Component),m=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(b,null))}}]),t}(n.Component);i.a.render(s.a.createElement(m,null),document.getElementById("root"))}},[[10,2,1]]]);
//# sourceMappingURL=main.765f527c.chunk.js.map