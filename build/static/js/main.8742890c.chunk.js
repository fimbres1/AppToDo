(this.webpackJsonptodo_firebase=this.webpackJsonptodo_firebase||[]).push([[0],{54:function(e,t,n){},56:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var c=n(9),a=n.n(c),o=n(40),r=n.n(o),i=(n(54),n(0)),s=n.n(i),u=n(1),l=n(37),d=n(12),j=(n(56),n(11));function b(){return Object(j.jsx)("div",{className:"title",children:Object(j.jsx)("h1",{children:"Todo App"})})}var O=n(41),f=n(19),p=n(21),h=n(25),g=n(47),v=Object(O.a)({apiKey:"AIzaSyCI48CgBDFTakc2wPbwFe2hbkdUeXRdCWQ",authDomain:"todo-list-e7202.firebaseapp.com",projectId:"todo-list-e7202",storageBucket:"todo-list-e7202.appspot.com",messagingSenderId:"527408402794",appId:"1:527408402794:web:8a351303085e1432d5d513",measurementId:"G-LEM3W7PC4C"}),m=Object(f.e)(v),x=Object(p.b)(v),w=new p.a,C=Object(h.b)(v);Object(g.a)(v);function k(){var e=a.a.useState(""),t=Object(d.a)(e,2),n=t[0],c=t[1],o=null;Object(p.c)(x,(function(e){o=e?e.uid:null}));var r=function(){var e=Object(u.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),Object(p.c)(x,(function(e){e?console.log(""):alert("Inicia sesi\xf3n para agregar una nueva tarea")})),""===n){e.next=6;break}return e.next=5,Object(f.a)(Object(f.b)(m,"todos"),{title:n,completed:!1,user:o});case 5:c("");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)("form",{onSubmit:r,children:[Object(j.jsx)("div",{className:"input_container",children:Object(j.jsx)("input",{type:"text",placeholder:"Ingresa una tarea",value:n,onChange:function(e){return c(e.target.value)}})}),Object(j.jsx)("div",{className:"btn_container",children:Object(j.jsx)("button",{children:"Agregar"})})]})}var S=n(43),y=n.n(S),I=n(45),N=n.n(I),D=n(46),T=n.n(D);function A(e){var t=e.todo,n=e.toggleComplete,c=e.handleDelete,o=e.handleEdit,r=a.a.useState(t.title),i=Object(d.a)(r,2),s=i[0],u=i[1],l=a.a.useState(""),b=Object(d.a)(l,2),O=b[0],f=(b[1],a.a.useState(0)),p=Object(d.a)(f,2),g=(p[0],p[1]);var v=Object(h.c)(C,"/files/".concat(O.name)),m=Object(h.d)(v,O);m.on("state_changed",(function(e){var t=Math.round(e.bytesTransferred/e.totalBytes*100);g(t)}),(function(e){return console.log(e)}),(function(){Object(h.a)(m.snapshot.ref).then((function(e){console.log(e)}))}));return Object(j.jsxs)("div",{className:"todo",children:[Object(j.jsx)("input",{style:{textDecoration:t.completed&&"line-through"},type:"text",value:""===t.title?s:t.title,className:"list",onChange:function(e){e.preventDefault(),!0===t.complete?u(t.title):(t.title="",u(e.target.value))}}),Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{className:"button-complete",onClick:function(){return n(t)},children:Object(j.jsx)(y.a,{id:"i"})}),Object(j.jsx)("button",{className:"button-edit",onClick:function(){return o(t,s)},children:Object(j.jsx)(N.a,{id:"i"})}),Object(j.jsx)("button",{className:"button-delete",onClick:function(){return c(t.id)},children:Object(j.jsx)(T.a,{id:"i"})})]})]})}var B=function(e){var t=e.setIsAuth;return console.log(""),Object(j.jsx)("div",{className:"loginPage",children:Object(j.jsxs)("button",{className:"login-with-google-btn",onClick:function(){Object(p.d)(x,w).then((function(e){localStorage.setItem("isAuth",!0),t(!0)})),Object(p.c)(x,(function(e){e&&alert("Bienvenido "+e.displayName)}))},children:[Object(j.jsx)("img",{src:"https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png",alt:"Trees",height:"10"}),"Iniciar Sesi\xf3n con Google"]})})};var E=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),n=t[0],o=t[1],r=a.a.useState([]),i=Object(d.a)(r,2),O=i[0],h=i[1];a.a.useEffect((function(){var e=Object(f.g)(Object(f.b)(m,"todos")),t=Object(f.f)(e,(function(e){var t=[];e.forEach((function(e){t.push(Object(l.a)(Object(l.a)({},e.data()),{},{id:e.id}))})),h(t)}));return function(){return t()}}),[]);var g=function(){var e=Object(u.a)(s.a.mark((function e(t,n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.h)(Object(f.d)(m,"todos",t.id),{title:n});case 2:alert("Tarea actualizada");case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),v=function(){var e=Object(u.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.h)(Object(f.d)(m,"todos",t.id),{completed:!t.completed});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(u.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.c)(Object(f.d)(m,"todos",t));case 2:alert("Tarea eliminada");case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"App",children:[n?Object(j.jsx)("button",{className:"signUserOut",onClick:function(){Object(p.e)(x).then((function(){localStorage.clear(),o(!1),alert("Se ha cerrado la sesi\xf3n")}))},children:" Cerrar Sesi\xf3n"}):Object(j.jsx)(B,{setIsAuth:o}),Object(j.jsx)("div",{children:Object(j.jsx)(b,{})}),Object(j.jsx)("div",{children:Object(j.jsx)(k,{})}),Object(j.jsx)("div",{className:"todo_container",children:O.map((function(e){return Object(j.jsx)(A,{todo:e,toggleComplete:v,handleDelete:w,handleEdit:g},e.id)}))})]})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,71)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),o(e),r(e)}))};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(E,{})}),document.getElementById("root")),F()}},[[63,1,2]]]);
//# sourceMappingURL=main.8742890c.chunk.js.map