(this["webpackJsonpsimple-homeworks"]=this["webpackJsonpsimple-homeworks"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports={Main:"Message_Main__lZCUc",Message:"Message_Message__XAgzQ",Image:"Message_Image__2ImLM",Name:"Message_Name__3FCnn",Time:"Message_Time__3u6Pb",Text:"Message_Text__icuA2",TypeText:"Message_TypeText__3VukT"}},,,,,,function(e,t,n){e.exports={homework:"Affairs_homework__10RYJ",name:"Affairs_name__3BoZ6",priority:"Affairs_priority__fgPJP"}},function(e,t,n){e.exports={superInput:"SuperInputText_superInput__3EQmV",errorInput:"SuperInputText_errorInput__1Jmom",error:"SuperInputText_error__z8pCJ"}},,,function(e,t,n){e.exports={blue:"HW4_blue__3MIuJ",column:"HW4_column__3MaQV",testSpanError:"HW4_testSpanError__3OK4f"}},function(e,t,n){e.exports={default:"SuperButton_default__1N9-a",red:"SuperButton_red__HmWEb"}},function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__4fQDi",spanClassName:"SuperCheckbox_spanClassName__EJ7fr"}},,,,,,function(e,t,n){e.exports={App:"App_App__Tauzh"}},function(e,t,n){e.exports={someClass:"Greeting_someClass__3vGj-",error:"Greeting_error__2YEpY"}},,,,,,,function(e,t,n){},,,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(24),s=n.n(c),i=(n(33),n(25)),o=n.n(i),j=n(6),l=n(2),u=n(0);var b=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{children:"404"}),Object(u.jsx)("div",{children:"Page not found!"}),Object(u.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})};var d=function(){return Object(u.jsx)("div",{})};var h=function(){return Object(u.jsx)("div",{})},m=n(3),x=n(7),O=n.n(x);var p=function(e){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:O.a.Main,children:[Object(u.jsx)("img",{className:O.a.Image,src:e.avatar,alt:"Avatar"}),Object(u.jsxs)("div",{className:O.a.Message,children:[Object(u.jsx)("p",{className:O.a.Name,children:e.name}),Object(u.jsx)("span",{className:O.a.Text,children:e.message}),Object(u.jsx)("p",{className:O.a.Time,children:e.time})]})]})})},f=new Date,_="".concat(f.getHours(),":").concat(f.getMinutes(),":").concat(f.getSeconds());var v=function(){var e=Object(r.useState)([{avatar:"https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",name:"MyName",message:"some text",time:_},{avatar:"https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",name:"MyName",message:"some text",time:_}]),t=Object(m.a)(e,2),n=t[0];return t[1],Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 1",n.map((function(e,t){return Object(u.jsx)(p,{avatar:e.avatar,name:e.name,message:e.message,time:e.time},t)})),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},g=n(13),C=n.n(g);var N=function(e){return Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:C.a.homework,children:[Object(u.jsx)("span",{className:C.a.name,children:e.affair.name}),Object(u.jsxs)("span",{className:C.a.priority,children:["[",e.affair.priority,"]"]})]}),Object(u.jsx)("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var k=function(e){var t=e.data.map((function(t){return Object(u.jsx)(N,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(u.jsxs)("div",{children:[t,Object(u.jsx)("button",{onClick:function(){e.setFilter("all")},children:"All"}),Object(u.jsx)("button",{onClick:function(){e.setFilter("high")},children:"High"}),Object(u.jsx)("button",{onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(u.jsx)("button",{onClick:function(){e.setFilter("low")},children:"Low"})]})},y=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var S=function(){var e=Object(r.useState)(y),t=Object(m.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)("all"),s=Object(m.a)(c,2),i=s[0],o=s[1],j=function(e,t){return"high"===t?e.filter((function(e){return"high"===e.priority})):"low"===t?e.filter((function(e){return"low"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):e}(n,i);return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 2",Object(u.jsx)(k,{data:j,setFilter:o,deleteAffairCallback:function(e){return a(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},w=n(28),T=n(26),M=n.n(T),A=function(e){var t=e.name,n=e.setNameCallback,r=e.addUser,a=e.error,c=e.totalUsers,s=a?M.a.error:"";return Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{value:t,onChange:n,className:s}),Object(u.jsx)("span",{children:a}),a?Object(u.jsx)("button",{disabled:!0,onClick:r,children:"add"}):Object(u.jsx)("button",{onClick:r,children:"add"}),Object(u.jsx)("span",{children:c})]})},I=function(e){var t=e.users,n=e.addUserCallback,a=Object(r.useState)(""),c=Object(m.a)(a,2),s=c[0],i=c[1],o=Object(r.useState)(!1),j=Object(m.a)(o,2),l=j[0],b=j[1],d=t.length;return Object(u.jsx)(A,{name:s,setNameCallback:function(e){""===e.target.value.trim()?b(!0):b(!1)," "!==e.target.value?i(e.target.value.trim()):i("")},addUser:function(){alert("Hello ".concat(s," !")),n(s),i("")},error:l,totalUsers:d})},E=n(43);var J=function(){var e=Object(r.useState)([]),t=Object(m.a)(e,2),n=t[0],a=t[1];return console.log(n),Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 3",Object(u.jsx)(I,{users:n,addUserCallback:function(e){a([{_id:Object(E.a)(),name:e}].concat(Object(w.a)(n)))}}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},F=n(8),P=n(9),W=n(14),H=n.n(W),B=function(e){e.type;var t=e.onChange,n=e.onChangeText,r=e.onKeyPress,a=e.onEnter,c=e.error,s=e.className,i=e.spanClassName,o=Object(P.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(H.a.error," ").concat(i||""),l="".concat(c?H.a.errorInput:H.a.superInput," ").concat(s);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("input",Object(F.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){r&&r(e),a&&"Enter"===e.key&&a()},className:l},o)),c&&Object(u.jsx)("span",{className:j,children:c})]})},U=n(17),G=n.n(U),Y=n(18),K=n.n(Y),Q=function(e){var t=e.red,n=e.className,r=Object(P.a)(e,["red","className"]),a="".concat(t?K.a.red:K.a.default," ").concat(n);return Object(u.jsx)("button",Object(F.a)({className:a},r))},X=n(19),Z=n.n(X),z=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,r=e.className,a=(e.spanClassName,e.children),c=Object(P.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(Z.a.checkbox," ").concat(r||"");return Object(u.jsxs)("label",{children:[Object(u.jsx)("input",Object(F.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},c)),a&&Object(u.jsx)("span",{className:Z.a.spanClassName,children:a})]})};var V=function(){var e=Object(r.useState)(""),t=Object(m.a)(e,2),n=t[0],a=t[1],c=n?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(r.useState)(!1),o=Object(m.a)(i,2),j=o[0],l=o[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 4",Object(u.jsxs)("div",{className:G.a.column,children:[Object(u.jsx)(B,{value:n,onChangeText:a,onEnter:s,error:c}),Object(u.jsx)(B,{className:G.a.blue}),Object(u.jsx)(Q,{children:"default"}),Object(u.jsx)(Q,{red:!0,onClick:s,children:"delete "}),Object(u.jsx)(Q,{disabled:!0,children:"disabled"}),Object(u.jsx)(z,{checked:j,onChangeChecked:l,children:"some text "}),Object(u.jsx)(z,{checked:j,onChange:function(e){return l(e.currentTarget.checked)}})]}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})};var q=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(v,{}),Object(u.jsx)(S,{}),Object(u.jsx)(J,{}),Object(u.jsx)(V,{})]})},D="/pre-junior",L="/junior",R="/junior-plus";var $=function(){return Object(u.jsx)("div",{children:Object(u.jsxs)(l.d,{children:[Object(u.jsx)(l.b,{path:"/",exact:!0,render:function(){return Object(u.jsx)(l.a,{to:D})}}),Object(u.jsx)(l.b,{path:D,exact:!0,render:function(){return Object(u.jsx)(q,{})}}),Object(u.jsx)(l.b,{path:L,exact:!0,render:function(){return Object(u.jsx)(d,{})}}),Object(u.jsx)(l.b,{path:R,exact:!0,render:function(){return Object(u.jsx)(h,{})}}),Object(u.jsx)(l.b,{render:function(){return Object(u.jsx)(b,{})}})]})})};n(40);var ee=function(){return Object(u.jsxs)("div",{className:"header",children:[Object(u.jsx)("input",{type:"checkbox",id:"hmt",className:"hidden-menu-ticker"}),Object(u.jsxs)("label",{className:"btn-menu",htmlFor:"hmt",children:[Object(u.jsx)("span",{className:"first"}),Object(u.jsx)("span",{className:"second"}),Object(u.jsx)("span",{className:"third"})]}),Object(u.jsxs)("ul",{className:"hidden-menu",children:[Object(u.jsx)(j.b,{to:D,activeClassName:"active",children:"Pre-junior"}),Object(u.jsx)(j.b,{to:L,activeClassName:"active",children:"Junior"}),Object(u.jsx)(j.b,{to:R,activeClassName:"active",children:"Junior+"})]})]})};var te=function(){return Object(u.jsx)("div",{children:Object(u.jsxs)(j.a,{children:[Object(u.jsx)(ee,{}),Object(u.jsx)($,{})]})})};var ne=function(){return Object(u.jsxs)("div",{className:o.a.App,children:[Object(u.jsx)("div",{children:"react homeworks:"}),Object(u.jsx)(te,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(ne,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[41,1,2]]]);
//# sourceMappingURL=main.82dad04e.chunk.js.map