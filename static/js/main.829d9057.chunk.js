(this["webpackJsonpreact-hooks-bank-of-flatiron-code-challenge"]=this["webpackJsonpreact-hooks-bank-of-flatiron-code-challenge"]||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),r=n(4),s=n.n(r),i=n(2);var o=function(e){var t=e.date,n=e.description,a=e.category,r=e.amount;return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:t}),Object(c.jsx)("td",{children:n}),Object(c.jsx)("td",{children:a}),Object(c.jsx)("td",{children:r})]})};var j=function(e){var t=e.transactions.map((function(e){return Object(c.jsx)(o,{date:e.date,description:e.description,category:e.category,amount:e.amount},e.id)}));return Object(c.jsx)("table",{className:"ui celled striped padded table",children:Object(c.jsxs)("tbody",{children:[Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:Object(c.jsx)("h3",{className:"ui center aligned header",children:"Date"})}),Object(c.jsx)("th",{children:Object(c.jsx)("h3",{className:"ui center aligned header",children:"Description"})}),Object(c.jsx)("th",{children:Object(c.jsx)("h3",{className:"ui center aligned header",children:"Category"})}),Object(c.jsx)("th",{children:Object(c.jsx)("h3",{className:"ui center aligned header",children:"Amount"})})]}),t]})})};var l=function(e){var t=e.handleSearch;return Object(c.jsxs)("div",{className:"ui large fluid icon input",children:[Object(c.jsx)("input",{type:"text",placeholder:"Search your Recent Transactions",onChange:t}),Object(c.jsx)("i",{className:"circular search link icon"})]})};var d=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(""),o=Object(i.a)(s,2),j=o[0],l=o[1],d=Object(a.useState)(""),u=Object(i.a)(d,2),h=u[0],b=u[1],O=Object(a.useState)(""),x=Object(i.a)(O,2),p=x[0],m=x[1];return Object(c.jsx)("div",{className:"ui segment",children:Object(c.jsxs)("form",{onSubmit:function(e){fetch("http://localhost:8001/transactions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({date:n,description:j,category:h,amount:p})}),alert("added successfully")},className:"ui form",children:[Object(c.jsxs)("div",{className:"inline fields",children:[Object(c.jsx)("input",{value:n,onChange:function(e){return r(e.target.value)},type:"date",name:"date"}),Object(c.jsx)("input",{value:j,onChange:function(e){return l(e.target.value)},type:"text",name:"description",placeholder:"Description"}),Object(c.jsx)("input",{value:h,onChange:function(e){return b(e.target.value)},type:"text",name:"category",placeholder:"Category"}),Object(c.jsx)("input",{value:p,onChange:function(e){return m(e.target.value)},type:"number",name:"amount",placeholder:"Amount",step:"0.01"})]}),Object(c.jsx)("button",{className:"ui button",type:"submit",children:"Add Transaction"})]})})};var u=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(""),o=Object(i.a)(s,2),u=o[0],h=o[1];return Object(a.useEffect)((function(){fetch("http://localhost:8001/transactions?q="+u).then((function(e){return e.json()})).then((function(e){return r(e)}))}),[u]),Object(c.jsxs)("div",{children:[Object(c.jsx)(l,{handleSearch:function(e){h(e.target.value)}}),Object(c.jsx)(d,{}),Object(c.jsx)(j,{transactions:n})]})};var h=function(){return Object(c.jsxs)("div",{className:"ui raised segment",children:[Object(c.jsx)("div",{className:"ui segment violet inverted",children:Object(c.jsx)("h2",{children:"The Royal Bank of Flatiron"})}),Object(c.jsx)(u,{})]})};n(10),n(11);s.a.render(Object(c.jsx)(h,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.829d9057.chunk.js.map