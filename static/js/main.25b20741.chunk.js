(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),r=a(2),c=a(6),s=a(7),o=(a(14),a(1)),l=(a(15),a(9)),d=a.n(l),u=(a(16),a(0)),m=function(e){var t=e.user,a=t.email,n=t.name;return Object(u.jsx)("a",{className:"UserInfo",href:"mailto:".concat(a),children:n})},j=function(e){var t=e.todo,a=t.title,n=t.completed,i=t.id,r=t.user;return Object(u.jsxs)("article",{"data-id":i,className:d()("TodoInfo",{"TodoInfo--completed":n}),children:[Object(u.jsx)("h2",{className:"TodoInfo__title",children:a}),r&&Object(u.jsx)(m,{user:r})]})},b=function(e){var t=e.todos;return Object(u.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(u.jsx)(j,{todo:e},e.id)}))})},h=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}];function f(e){return h.find((function(t){return t.id===e}))||null}var O=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(s.a)(Object(s.a)({},e),{},{user:f(e.userId)})})),p=Math.max.apply(Math,Object(c.a)(O.map((function(e){return e.id})))),x=function(){var e=Object(o.useState)(O),t=Object(r.a)(e,2),a=t[0],n=t[1],i=Object(o.useState)(0),s=Object(r.a)(i,2),l=s[0],d=s[1],m=Object(o.useState)(!1),j=Object(r.a)(m,2),x=j[0],v=j[1],y=Object(o.useState)(""),S=Object(r.a)(y,2),N=S[0],I=S[1],g=Object(o.useState)(!1),C=Object(r.a)(g,2),_=C[0],k=C[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Add todo form"}),Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),k(!N),v(!l),N&&l&&(!function(e,t){var a={id:p+1,title:e,userId:t,completed:!1,user:f(t)};n((function(e){return[].concat(Object(c.a)(e),[a])}))}(N,l),I(""),d(0))},children:[Object(u.jsx)("div",{className:"field",children:Object(u.jsxs)("label",{children:["Title:",Object(u.jsx)("input",{type:"text","data-cy":"titleInput",placeholder:"Please add title",value:N,onChange:function(e){k(!1),I(e.target.value)}}),_&&Object(u.jsx)("span",{className:"error",children:"Please enter a title"})]})}),Object(u.jsxs)("div",{className:"field",children:[Object(u.jsxs)("label",{children:["User:",Object(u.jsxs)("select",{"data-cy":"userSelect",value:l,onChange:function(e){v(!1),d(+e.target.value)},children:[Object(u.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),h.map((function(e){return Object(u.jsx)("option",{value:e.id,children:e.name},e.id)}))]})]}),x&&Object(u.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(u.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(u.jsx)(b,{todos:a})]})};i.a.render(Object(u.jsx)(x,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.25b20741.chunk.js.map