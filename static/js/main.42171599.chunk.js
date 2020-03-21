(this["webpackJsonpreact-hw-3-phonebook"]=this["webpackJsonpreact-hw-3-phonebook"]||[]).push([[0],{13:function(e,t,n){e.exports={section:"Section_section__Ap5Zy"}},15:function(e,t,n){e.exports=n(24)},24:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(10),l=n.n(c),i=n(14),o=n(1),u=n(2),m=n(3),s=n(5),h=n(4),d=n(6),b=n(11),f=n.n(b),p=n(12),v=n.n(p),E=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",number:""},n.handleInput=function(e){n.setState(Object(o.a)({},e.target.name,e.target.value))},n.submitForm=function(e){var t={id:v()(),name:n.state.name,number:n.state.number};n.props.handleSubmit(e,t),n.setState({name:"",number:""})},n}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return r.a.createElement("form",{onSubmit:this.submitForm},r.a.createElement("div",null,r.a.createElement("h3",null,"Name"),r.a.createElement("input",{placeholder:"Enter name",onChange:this.handleInput,name:"name",value:t,type:"text"})),r.a.createElement("div",null,r.a.createElement("h3",null,"Number"),r.a.createElement(f.a,{onChange:this.handleInput,name:"number",placeholder:"Enter phone number",value:n,options:{delimiter:"-",blocks:[3,2,2],numericOnly:!0}})),r.a.createElement("input",{type:"submit",value:"Add"}))}}]),t}(a.Component),y=n(13),S=n.n(y),g=function(e){var t=e.title,n=e.children;return r.a.createElement("div",{className:S.a.section},r.a.createElement("h2",null,t),n)},O=function(e){var t=e.name,n=void 0===t?"":t,a=e.number,c=void 0===a?"":a,l=e.handleDelete;return r.a.createElement("div",null,r.a.createElement("span",null,n||"noName",": ",c||"noNumber"),r.a.createElement("button",{onClick:l,type:"button"},"Delete"))},C=function(e){var t=e.contacts,n=e.handleDelete,a=t.map((function(e){var t=e.id,a=e.name,c=e.number;return r.a.createElement("li",{key:t},r.a.createElement(O,{handleDelete:function(){n(t)},id:t,name:a,number:c}))}));return r.a.createElement("ul",null,a)},j=function(e){var t=e.onChange,n=e.filter;return r.a.createElement("div",null,r.a.createElement("input",{type:"text",value:n,onChange:t,name:"filter",id:""}))},k=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},n.filterContacts=function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))},n.handleInput=function(e){n.setState(Object(o.a)({},e.target.name,e.target.value))},n.handleSubmit=function(e,t){if(e.preventDefault(),-1!==n.state.contacts.findIndex((function(e){return e.name===t.name})))return alert("contact exist in your book"),!1;n.setState((function(e){return{contacts:[].concat(Object(i.a)(e.contacts),[t]),filter:""}}))},n.handleDelete=function(e){n.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},n}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=[];try{e=JSON.parse(localStorage.getItem("contacts"))||this.state.contacts}catch(t){e=[]}this.setState((function(t){return{contacts:e}}))}},{key:"componentDidUpdate",value:function(){localStorage.setItem("contacts",JSON.stringify(this.state.contacts,null,2))}},{key:"render",value:function(){var e=this.state,t=e.name,n=e.number,a=e.contacts,c=e.filter,l=this.filterContacts(a,c);return r.a.createElement("div",null,r.a.createElement(g,{title:"Phonebook"},r.a.createElement(E,{name:t,number:n,handleSubmit:this.handleSubmit,handleInput:this.handleInput})),r.a.createElement(g,{title:"Contacts"},r.a.createElement(j,{onChange:this.handleInput,filter:c}),r.a.createElement(C,{handleDelete:this.handleDelete,contacts:l})))}}]),t}(a.Component);l.a.render(r.a.createElement(k,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.42171599.chunk.js.map