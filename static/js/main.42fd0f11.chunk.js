(this["webpackJsonpcontact-management-app"]=this["webpackJsonpcontact-management-app"]||[]).push([[0],{15:function(e,t,c){},16:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(9),i=c.n(a),l=(c(15),c(5)),r=c(2),o=c(3),d=c(7),j=c(10),b=c.n(j),O=(c(16),c(0));function h(e){var t=e.page;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("aside",{children:Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:Object(O.jsx)("a",{children:"Link 1"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{children:"Link 2"})})]})}),Object(O.jsxs)("div",{className:"my-navbar",children:[Object(O.jsxs)("div",{className:"hamburger",id:"nav-icon1",children:[Object(O.jsx)("span",{}),Object(O.jsx)("span",{}),Object(O.jsx)("span",{})]}),Object(O.jsx)("h2",{className:"float-start",children:"Contact"}),1===t?Object(O.jsx)(u,{}):""]})]})}function u(){return Object(O.jsxs)("div",{className:"d-flex justify-content-between top-links-row",children:[Object(O.jsx)("a",{children:Object(O.jsx)("img",{src:"assets/images/qr-code.svg",alt:""})}),Object(O.jsx)("a",{children:Object(O.jsx)("i",{className:"bi bi-search"})}),Object(O.jsxs)("div",{className:"dropdown",children:[Object(O.jsx)("button",{className:"btn btn-link dropdown-toggle",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false",children:Object(O.jsx)("i",{className:"bi bi-three-dots-vertical"})}),Object(O.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton1",children:[Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"dropdown-item",children:"Action"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"dropdown-item",children:"Another action"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"dropdown-item",children:"Something else here"})})]})]})]})}function m(e){var t=e.setPage,c=e.viewProf,n=e.setSetAllContact,s=e.allContact,a=c&&null!=c.discription?c.discription:"OOOO",i=c&&null!=c.name?c.name:"OOOO",l=c&&null!=c.priority?c.priority:"OOOO";console.log("KKKKKKKKK",s);return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"my-card",children:[Object(O.jsxs)("h4",{children:["Description: ",a]}),Object(O.jsxs)("h4",{children:["Phone Number: ",Object(O.jsx)("a",{className:"tel:"+i,children:i})," "]}),Object(O.jsxs)("h4",{children:["Priority: ",l]}),Object(O.jsxs)("div",{className:"btn-row d-flex justify-content-between",children:[Object(O.jsx)("button",{className:"btn btn-link",onClick:function(){if(console.log("sssssssssssssssss",s),c&&null!=c.name){for(var e=0;e<s.length;e++)if(s[e].id===c.id){s.splice(e,1);break}n(Object(d.a)(s))}t(1)},children:"DELETE"}),Object(O.jsx)("button",{className:"btn btn-link",onClick:function(){t(3)},children:"EDIT"})]})]})})}function p(e){var t=e.setPage,c=e.setSetAllContact,s=e.allContact,a=e.viewProf;console.log("YYYYYYYYYY",s);var i=Object(n.useState)({name:"",discription:""}),j=Object(o.a)(i,2),h=j[0],u=j[1],m=Object(n.useState)({buttonDisabled:!0}),p=Object(o.a)(m,2),x=p[0],f=p[1],g=Object(n.useRef)(new b.a);Object(n.useEffect)((function(){g.current.allValid()?f({buttonDisabled:!1}):f({buttonDisabled:!0})}),[h]),Object(n.useEffect)((function(){a&&null!=a.name&&u(Object(r.a)({},a))}),[]);var v=function(e){u(Object(r.a)(Object(r.a)({},h),{},Object(l.a)({},e.target.name,e.target.value))),g.current.showMessageFor(e.target.name)};return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"my-card",children:Object(O.jsxs)("form",{children:[Object(O.jsxs)("div",{className:"input-group-fix",children:[Object(O.jsxs)("div",{className:"form-floating",children:[Object(O.jsx)("input",{type:"text",className:"form-control",name:"name",id:"floatingInput",onChange:v,value:h.name,placeholder:"Phone number"}),Object(O.jsx)("label",{htmlFor:"floatingInput",children:"Phone number"}),Object(O.jsx)("div",{className:"form-group",style:{color:"red"},children:g.current.message("name",h.name,"required|phone")})]}),Object(O.jsxs)("div",{className:"form-floating",children:[Object(O.jsx)("input",{type:"text",className:"form-control",name:"discription",id:"floatingPassword",onChange:v,value:h.discription,placeholder:"Description"}),Object(O.jsx)("label",{htmlFor:"floatingPassword",children:"Description"}),Object(O.jsx)("div",{className:"form-group",style:{color:"red"},children:g.current.message("discription",h.discription,"required|alpha")})]})]}),Object(O.jsxs)("div",{className:"btn-row d-flex justify-content-between",children:[Object(O.jsx)("button",{className:"btn btn-link",onClick:function(e){e.preventDefault(),t(1)},children:"CANCEL"}),Object(O.jsx)("button",{className:"btn btn-link",onClick:function(e){if(e.preventDefault(),a&&null!=a.name){for(var n=0;n<s.length;n++)if(s[n].id===a.id){s.splice(n,1);break}c([].concat(Object(d.a)(s),[Object(r.a)(Object(r.a)({},h),{},{priority:"",id:a.id})]))}else c([].concat(Object(d.a)(s),[Object(r.a)(Object(r.a)({},h),{},{priority:"",id:s.length+1})]));console.log("ddddddddddddd",s),t(1)},disabled:x.buttonDisabled,children:"SUBMIT"})]})]})})})}function x(e){var t=e.page,c=e.setPage,n=e.allContact,s=e.setId;return Object(O.jsxs)("div",{className:"contact-container",children:[Object(O.jsxs)("div",{className:"contact-block",children:[Object(O.jsx)("p",{children:Object(O.jsx)("b",{children:"What's new"})}),Object(O.jsxs)("div",{className:"contact",children:[Object(O.jsx)("div",{className:"letter color1",children:Object(O.jsx)("i",{className:"bi bi-person"})}),Object(O.jsx)("p",{children:"Try sharing your profile "})]})]}),function(){var e=n.sort((function(e,t){return e.discription.toUpperCase()>t.discription.toUpperCase()?1:-1})),t="",a="",i=[],l=[],r=e.map((function(e,n){return t=e.discription.charAt(0).toUpperCase(),Object(O.jsxs)("div",{className:"contact",onClick:function(){var t;t=e.id,console.log("ddddddddddddddddd",t),s(t),c(2)},children:[Object(O.jsx)("div",{className:"letter color2",children:t}),Object(O.jsx)("p",{children:e.discription})]},n)}));t="";for(var o=0;o<e.length;o++){if(t=e[o].discription.charAt(0).toUpperCase(),o===e.length-1){if(t!=a){l.push(Object(O.jsxs)("div",{className:"contact-block",children:[Object(O.jsx)("p",{children:Object(O.jsx)("b",{children:a})}),i]},a)),l.push(Object(O.jsxs)("div",{className:"contact-block",children:[Object(O.jsx)("p",{children:Object(O.jsx)("b",{children:t})}),r[o]]},t));break}t="1",i.push(r[o])}if(t!=a&&""!=t&&""!=a){var d=Object(O.jsxs)("div",{className:"contact-block",children:[Object(O.jsx)("p",{children:Object(O.jsx)("b",{children:a})}),i]},a);l.push(d),i=[]}i.push(r[o]),a=e[o].discription.charAt(0).toUpperCase()}return l}(),Object(O.jsx)("div",{className:"fixed-row",children:Object(O.jsx)("a",{onClick:function(){console.log("vvvvvvvvvvvvv",t),c(3)},className:"float-end",children:Object(O.jsx)("i",{className:"bi bi-plus-circle-fill"})})})]})}function f(e){var t=e.page,c=e.setPage,n=e.setId,s=e.setSetAllContact,a=e.allContact,i=e.viewProf;console.log("zzzzzzzzzzz",a);return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h2",{className:"main-heading",children:"Emergency contacts"}),2===t?Object(O.jsx)(m,{setPage:c,setId:n,setSetAllContact:s,allContact:a,viewProf:i}):"",3===t?Object(O.jsx)(p,{setPage:c,setSetAllContact:s,allContact:a,viewProf:i}):"",Object(O.jsx)("p",{className:"text-center my-5",children:Object(O.jsx)("a",{onClick:function(){c(1)},className:"text-blue",children:"BACK TO PROFILE"})})]})}function g(e){var t=e.page,c=e.setPage,n=e.setContactId,s=e.setSetAllContact,a=e.allContact,i=e.viewProf;return console.log("ContactManagement",Math.random(),t,a),Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"wrapper",children:Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)(h,{page:t}),Object(O.jsxs)("div",{className:"main-container",children:[1===t?Object(O.jsx)(x,{setPage:c,allContact:a,setId:n}):"",2===t||3===t?Object(O.jsx)(f,{setSetAllContact:s,viewProf:i,allContact:a,setPage:c,page:t,setId:n}):""]})]})})})}console.log("zaaaaaaaaaaa",Math.random());var v=function(){var e=Object(n.useState)(1),t=Object(o.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(null),i=Object(o.a)(a,2),l=i[0],r=i[1],d=Object(n.useState)(null),j=Object(o.a)(d,2),b=j[0],h=j[1],u=Object(n.useState)([{name:"+92324240344",discription:"aabhh",priority:"",id:1},{name:"+92324240344",discription:"bbdul",priority:"",id:2},{name:"+92324240344",discription:"cbdul",priority:"",id:3},{name:"+92324240344",discription:"dbdul",priority:"",id:4},{name:"+92324240344",discription:"ebdul",priority:"",id:5},{name:"+92324240344",discription:"fbdul",priority:"",id:6},{name:"+92324240344",discription:"gbdul",priority:"",id:7},{name:"+92324240344",discription:"hcdul",priority:"",id:8}]),m=Object(o.a)(u,2),p=m[0],x=m[1];return Object(n.useEffect)((function(){h(p.filter((function(e){return e.id==l}))[0])}),[l]),Object(n.useEffect)((function(){1==c&&(h({}),r(null))}),[c]),console.log("APP",Math.random(),b,l,c,p),Object(O.jsx)(g,{allContact:p,viewProf:b,setSetAllContact:x,page:c,setPage:s,contactId:l,setContactId:r})},N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,19)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};i.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(v,{})}),document.getElementById("root")),N()}},[[18,1,2]]]);
//# sourceMappingURL=main.42fd0f11.chunk.js.map