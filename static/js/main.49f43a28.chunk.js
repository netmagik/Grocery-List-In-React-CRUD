(this["webpackJsonpcrud-grocery-list"]=this["webpackJsonpcrud-grocery-list"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),u=n(7),c=n.n(u),r=(n(14),n(8)),m=n(1),i=function(e){return l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Item"),l.a.createElement("th",null,"Quantity"),l.a.createElement("th",null,"Action"))),l.a.createElement("tbody",null,e.items.length>0?e.items.map((function(t){return l.a.createElement("tr",{key:t.id},l.a.createElement("td",null,t.name),l.a.createElement("td",null,t.quantity),l.a.createElement("td",null,l.a.createElement("button",{className:"button muted-button",onClick:function(){e.editRow(t)}},"Edit"),l.a.createElement("button",{onClick:function(){return e.deleteItem(t.id)},className:"button muted-button"},"Delete")))})):l.a.createElement("tr",null,l.a.createElement("td",{colSpan:3},"No Items Found"))))},o=n(2),d=n(3),E=function(e){var t={id:null,name:"",quantity:""},n=Object(a.useState)(t),u=Object(m.a)(n,2),c=u[0],r=u[1],i=function(e){var t=e.target,n=t.name,a=t.value;r(Object(d.a)(Object(d.a)({},c),{},Object(o.a)({},n,a)))};return l.a.createElement("form",{onSubmit:function(n){n.preventDefault(),c.name&&c.quantity&&(e.addItem(c),r(t))}},l.a.createElement("label",null,"Item"),l.a.createElement("input",{type:"text",name:"name",value:c.name,onChange:i}),l.a.createElement("label",null,"Quantity"),l.a.createElement("input",{type:"number",name:"quantity",value:c.quantity,onChange:i}),l.a.createElement("button",null,"Add New Item"))},b=function(e){var t=Object(a.useState)(e.currentItem),n=Object(m.a)(t,2),u=n[0],c=n[1],r=function(e){var t=e.target,n=t.name,a=t.value;c(Object(d.a)(Object(d.a)({},u),{},Object(o.a)({},n,a)))};return Object(a.useEffect)((function(){c(e.currentItem)}),[e]),l.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.updateItem(u.id,u)}},l.a.createElement("label",null,"Item"),l.a.createElement("input",{type:"text",name:"name",value:u.name,onChange:r}),l.a.createElement("label",null,"Quantity"),l.a.createElement("input",{type:"number",name:"quantity",value:u.quantity,onChange:r}),l.a.createElement("button",null,"Edit Item"),l.a.createElement("button",{onClick:function(){return e.setEditing(!1)},className:"button muted-button"},"Cancel"))},s=function(){var e=Object(a.useState)([{id:1,name:"Bread",quantity:2},{id:2,name:"Butter",quantity:1},{id:3,name:"Milk",quantity:1},{id:4,name:"Cheese",quantity:1},{id:5,name:"Eggs",quantity:1},{id:6,name:"Yogurt",quantity:4},{id:7,name:"Granola",quantity:1}]),t=Object(m.a)(e,2),n=t[0],u=t[1],c=Object(a.useState)(!1),o=Object(m.a)(c,2),d=o[0],s=o[1],f=Object(a.useState)({id:null,name:"",quantity:""}),y=Object(m.a)(f,2),g=y[0],p=y[1];return l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"CRUD Grocery List with Hooks"),l.a.createElement("div",{className:"flex-row"},l.a.createElement("div",{className:"flex-large"},d?l.a.createElement(a.Fragment,null,l.a.createElement("h2",null,"Edit Item"),l.a.createElement(b,{setEditing:s,editing:d,currentItem:g,updateItem:function(e,t){s(!1),u(n.map((function(n){return n.id===e?t:n})))}})):l.a.createElement(a.Fragment,null,l.a.createElement("h2",null,"Add Item"),l.a.createElement(E,{addItem:function(e){e.id=n.length+1,u([].concat(Object(r.a)(n),[e]))}}))),l.a.createElement("div",{className:"flex-large"},l.a.createElement("h2",null,"View List"),l.a.createElement(i,{items:n,deleteItem:function(e){s(!1),u(n.filter((function(t){return t.id!==e})))},editRow:function(e){s(!0),p({id:e.id,name:e.name,quantity:e.quantity})}}))))};c.a.render(l.a.createElement(s,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.49f43a28.chunk.js.map