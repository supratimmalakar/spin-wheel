(this["webpackJsonpfampay-wheel"]=this["webpackJsonpfampay-wheel"]||[]).push([[0],{22:function(e,t,s){},24:function(e,t,s){},30:function(e,t,s){},32:function(e,t,s){},33:function(e,t,s){"use strict";s.r(t);var c=s(2),n=s.n(c),i=s(13),a=s.n(i),r=(s(22),s(5)),l=s(6),j=s.n(l),o=s(12),b=s(8),d=(s(24),s(14)),p=s(15),h=s(9),u=s(17),O=s(16),x=s(3),m=s(4),v=(s(30),s(0)),f=function(e){Object(u.a)(s,e);var t=Object(O.a)(s);function s(e){var c;return Object(d.a)(this,s),(c=t.call(this,e)).spinHandler=c.spinHandler.bind(Object(h.a)(c)),c}return Object(p.a)(s,[{key:"spinHandler",value:function(){var e=this;if(null===this.props.selectedItem){var t=Math.floor(Math.random()*this.props.items.length);this.props.setSelectedItem(t),setTimeout((function(){e.props.setShowPopup(!0)}),4300),this.props.setData(Object(r.a)(Object(r.a)({},this.props.data),{},{webClient:this.props.ip,time:(new Date).toLocaleString(),spin_result_index:t})),this.props.postData(this.props.data,this.props.setData)}else this.props.setSelectedItem(null),setTimeout(this.spinHandler,500)}},{key:"render",value:function(){var e=this.props,t=e.selectedItem,s=e.items,c={"--nb-item":s.length,"--selected-item":t};return Object(v.jsx)("div",{className:"wheel-main",children:Object(v.jsxs)("div",{className:"wheel-sub",children:[Object(v.jsx)("div",{className:"selector ".concat(null!==t?"spinning":""),style:c,children:Object(v.jsx)(x.a,{className:"icon",color:"#FFDDA1",icon:m.d})}),Object(v.jsx)("div",{className:"wheel-container",children:Object(v.jsxs)("div",{className:"wheel ".concat(null!==t?"spinning":""),style:c,onClick:this.spinHandler,children:[Object(v.jsx)("h2",{className:"spin",children:"Spin"}),s.map((function(e,t){return Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{className:"dot-container",style:{"--item-nb":t},children:Object(v.jsxs)("div",{className:"dot-rotate",children:[Object(v.jsx)(x.a,{className:"dot",color:"#FFDDA1",icon:m.b}),Object(v.jsx)(x.a,{className:"dot",color:"#FFDDA1",icon:m.b})]})}),Object(v.jsx)("div",{className:"wheel-item",style:{"--item-nb":t},children:Object(v.jsx)("div",{className:"text",children:e})},t)]})}))]})})]})})}}]),s}(n.a.Component);s(32);function g(e){var t=e.selectedItem,s=e.setShowPopup,c=[Object(v.jsx)("p",{children:"Yay! You got \u20b920 \ud83d\udcb8"}),Object(v.jsx)("p",{children:"Hurray! You doubled your savings."}),Object(v.jsx)("p",{children:"Yay! You got \u20b950 \ud83d\udcb8"}),Object(v.jsx)("p",{children:"Yay! Your savings increased by 50%."}),Object(v.jsx)("p",{children:"Yay! You got \u20b950 \ud83d\udcb8"}),Object(v.jsx)("p",{children:"Hurray! You doubled your savings."}),Object(v.jsx)("p",{children:"Kaching! You got \u20b9100 Cashback\ud83d\udcb8"}),Object(v.jsxs)("p",{children:[" Better luck next time ",Object(v.jsx)(x.a,{icon:m.c})," "]})];return Object(v.jsx)("div",{className:"popup-container",children:Object(v.jsxs)("div",{className:"popup-sub",children:[c[t],Object(v.jsxs)("button",{className:"close-btn",onClick:function(){s(!1)},children:["Close ",Object(v.jsx)(x.a,{icon:m.f})]})]})})}var w=function(){var e=Object(c.useState)(null),t=Object(b.a)(e,2),s=t[0],n=t[1],i=Object(c.useState)(!1),a=Object(b.a)(i,2),l=a[0],d=a[1],p=Object(c.useState)(""),h=Object(b.a)(p,2),u=h[0],O=h[1],w=Object(c.useState)({webClient:"",time:"",spin_result_index:""}),N=Object(b.a)(w,2),y=N[0],S=N[1];Object(c.useEffect)((function(){k()}),[]);var k=function(){var e=Object(o.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://geolocation-db.com/json/f6b71820-809c-11eb-95f1-01287ca1dfdd",{method:"GET"}).then((function(e){return e.json()})).then((function(e){O(e.IP)}));case 3:e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(o.a)(j.a.mark((function e(t,s){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://v1.nocodeapi.com/supratimmalakar/google_sheets/RWrQzHmbPgCtDclx?tabId=Sheet1",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify([[t.webClient,t.time,t.spin_result_index]])});case 3:return c=e.sent,e.next=6,c.json();case 6:s(Object(r.a)(Object(r.a)({},t),{},{webClient:"",time:"",spin_result_index:""})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,s){return e.apply(this,arguments)}}(),D=[Object(v.jsxs)("p",{children:[Object(v.jsx)("b",{children:"\u20b920"})," \ud83d\udcb8"]}),Object(v.jsxs)("p",{children:[Object(v.jsx)("b",{children:"2X"}),Object(v.jsx)("br",{})," Savings"]}),Object(v.jsxs)("p",{children:[Object(v.jsx)("b",{children:"\u20b950"})," \ud83d\udcb8"]}),Object(v.jsxs)("p",{children:[Object(v.jsx)("b",{children:"1.5X"}),Object(v.jsx)("br",{})," Savings"]}),Object(v.jsxs)("p",{children:[Object(v.jsx)("b",{children:"\u20b950"})," \ud83d\udcb8"]}),Object(v.jsxs)("p",{children:[Object(v.jsx)("b",{children:"2X"}),Object(v.jsx)("br",{})," Savings"]}),Object(v.jsxs)("p",{children:[Object(v.jsx)("b",{children:"\u20b9100"})," ",Object(v.jsx)("br",{})," Cashback "]}),Object(v.jsxs)("p",{children:["Better luck ",Object(v.jsx)("br",{}),"next time!"]})];return Object(v.jsx)("div",{className:"App",children:Object(v.jsxs)("div",{className:"view-container",children:[l?Object(v.jsx)("div",{className:"popup-main",children:Object(v.jsx)(g,{selectedItem:s,setShowPopup:d})}):"",Object(v.jsx)("div",{className:"top-bar",children:Object(v.jsxs)("div",{children:[Object(v.jsx)(x.a,{className:"top-icon",icon:m.e}),Object(v.jsx)(x.a,{className:"top-icon",icon:m.b}),Object(v.jsx)(x.a,{className:"top-icon wifi-icon",icon:m.g})]})}),Object(v.jsxs)("div",{className:"rewards-btn",children:[Object(v.jsx)(x.a,{className:"back-icon",icon:m.a}),Object(v.jsx)("p",{children:"Your rewards"})]}),Object(v.jsx)(f,{items:D,selectedItem:s,setSelectedItem:n,setShowPopup:d,data:y,setData:S,postData:C,ip:u}),Object(v.jsxs)("div",{className:"spin-msg-box",children:[Object(v.jsxs)("h1",{children:["Spin the wheel now to ",Object(v.jsx)("br",{})," get rewarded"]}),Object(v.jsx)("p",{children:"Tap on Spin or rotate the wheel anti-clockwise and release to start spinning "})]}),Object(v.jsx)("div",{className:"help",children:Object(v.jsx)("p",{children:Object(v.jsxs)("b",{children:["Have a question? ",Object(v.jsx)("a",{target:"_blank",href:"https://fampay.in/",children:"Get Help"})]})})})]})})},N=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,34)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,i=t.getLCP,a=t.getTTFB;s(e),c(e),n(e),i(e),a(e)}))};a.a.render(Object(v.jsx)(n.a.StrictMode,{children:Object(v.jsx)(w,{})}),document.getElementById("root")),N()}},[[33,1,2]]]);
//# sourceMappingURL=main.1c9d4256.chunk.js.map