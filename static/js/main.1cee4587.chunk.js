(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{333:function(t,e,n){"use strict";n.r(e);var o=n(7),c=n.n(o),a=n(79),i=n.n(a),r=(n(87),n(88),n(47)),s=n(21),u=n(4);var d=function(t){var e=Object(o.useState)(t.edit?t.edit.value:""),n=Object(s.a)(e,2),c=n[0],a=n[1],i=Object(o.useRef)(null);Object(o.useEffect)((function(){i.current.focus()}));var r=function(t){a(t.target.value)};return Object(u.jsx)("form",{className:"todo-form",onSubmit:function(e){e.preventDefault(),t.onSubmit({id:Math.floor(1e5*Math.random()),text:c}),a("")},children:t.edit?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("input",{type:"text",placeholder:"Update your item",value:c,name:"text",className:"todo-input edit",onChange:r,ref:i}),Object(u.jsx)("button",{className:"todo-button edit",children:"UPDATE"})]}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("input",{type:"text",placeholder:"Add a todo",value:c,name:"text",className:"todo-input",onChange:r,ref:i}),Object(u.jsx)("button",{className:"todo-button",children:"ADD"})]})})},l=n(80),j=n(81);var b=function(t){var e=t.todos,n=t.completeTodo,c=t.removeTodo,a=t.updateTodo,i=Object(o.useState)({id:null,value:""}),r=Object(s.a)(i,2),b=r[0],f=r[1];return b.id?Object(u.jsx)(d,{edit:b,onSubmit:function(t){a(b.id,t),f({id:null,value:""})}}):e.map((function(t,e){return Object(u.jsxs)("div",{className:t.isComplete?"todo-row complete":"todo-row",children:[Object(u.jsx)("div",{onClick:function(){return n(t.id)},children:t.text},t.id),Object(u.jsxs)("div",{className:"icons",children:[Object(u.jsx)(l.a,{onClick:function(){return c(t.id)},className:"delete-icon"}),Object(u.jsx)(j.a,{onClick:function(){return f({id:t.id,value:t.text})},className:"edit-icon"})]})]},e)}))};var f=function(){var t=Object(o.useState)([]),e=Object(s.a)(t,2),n=e[0],c=e[1];return Object(o.useEffect)((function(){var t=JSON.parse(localStorage.getItem("react-todo-data"));t&&c(t)}),[]),Object(o.useEffect)((function(){localStorage.setItem("react-todo-data",JSON.stringify(n))}),[n]),Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"What's the Plan for Today?"}),Object(u.jsx)(d,{onSubmit:function(t){if(t.text&&!/^\s*$/.test(t.text)){var e=[t].concat(Object(r.a)(n));c(e),console.log(t)}}}),Object(u.jsx)(b,{todos:n,completeTodo:function(t){var e=n.map((function(e){return e.id===t&&(e.isComplete=!e.isComplete),e}));c(e)},removeTodo:function(t){var e=Object(r.a)(n).filter((function(e){return e.id!==t}));c(e)},updateTodo:function(t,e){e.text&&!/^\s*$/.test(e.text)&&c((function(n){return n.map((function(n){return n.id===t?e:n}))}))}})]})},m=n(82),O=n.n(m);var v=function(){return Object(u.jsx)(O.a,{params:{particles:{number:{value:120},size:{value:2}},interactivity:{events:{onhover:{enable:!0,mode:"repulse"}}}},style:{position:"absolute",zIndex:-1,left:0,right:0,bottom:0,top:0,height:"100vh"}})};var x=function(){return Object(u.jsxs)("div",{className:"todo-app",children:[Object(u.jsx)(v,{}),Object(u.jsx)(f,{})]})};i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(x,{})}),document.getElementById("root"))},87:function(t,e,n){},88:function(t,e,n){}},[[333,1,2]]]);
//# sourceMappingURL=main.1cee4587.chunk.js.map