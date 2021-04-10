(this.webpackJsonpchatapp=this.webpackJsonpchatapp||[]).push([[0],{94:function(e,t,a){},95:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a(16),n=a.n(c),r=(a(46),a(12)),i=a(8),l=a(1),o=function(e){var t=e.message;return t.attachments&&t.attachments.length>0?Object(l.jsx)("img",{src:t.attachments[0].file,alt:"message-attachment",className:"message-image",style:{float:"right"}}):Object(l.jsx)("div",{className:"message",style:{float:"right",marginRight:"18px",color:"white",backgroundColor:"#3B2A50"},children:t.text})},m=function(e){var t=e.lastMessage,a=e.message,s=!t||t.sender.username!==a.sender.username;return Object(l.jsxs)("div",{className:"message-row",children:[s&&Object(l.jsx)("div",{className:"message-avatar",style:{backgroundImage:a.sender&&"url(".concat(a.sender.avatar,")")}}),a.attachments&&a.attachments.length>0?Object(l.jsx)("img",{src:a.attachments[0].file,alt:"message-attachment",className:"message-image",style:{marginLeft:s?"4px":"48px"}}):Object(l.jsx)("div",{className:"message",style:{float:"left",backgroundColor:"#CABCDC",marginLeft:s?"4px":"48px"},children:a.text})]})},u=a(9),j=a(97),d=a(98),b=function(e){var t=Object(s.useState)(""),a=Object(u.a)(t,2),c=a[0],n=a[1],r=e.chatId,o=e.creds,m=function(e){e.preventDefault();var t=c.trim();t.length>0&&Object(i.o)(o,r,{text:t}),n("")};return Object(l.jsxs)("form",{className:"message-form",onSubmit:m,children:[Object(l.jsx)("input",{className:"message-input",placeholder:"Send a message...",value:c,onChange:function(t){n(t.target.value),Object(i.l)(e,r)},onSubmit:m}),Object(l.jsx)("label",{htmlFor:"upload-button",children:Object(l.jsx)("span",{className:"image-button",children:Object(l.jsx)(j.a,{className:"picture-icon"})})}),Object(l.jsx)("input",{type:"file",multiple:!1,id:"upload-button",style:{display:"none"},onChange:function(e){Object(i.o)(o,r,{files:e.target.files,text:""})}.bind(undefined)}),Object(l.jsx)("button",{type:"submit",className:"send-button",children:Object(l.jsx)(d.a,{className:"send-icon"})})]})},h=function(e){var t=e.chats,a=e.activeChat,s=e.userName,c=e.messages,n=t&&t[a],i=function(e,t){return n.people.map((function(a,s){return a.last_read===e.id&&Object(l.jsx)("div",{className:"read-receipt",style:{float:t?"right":"left",backgroundImage:a.person.avatar&&"url(".concat(a.person.avatar,")")}},"read_".concat(s))}))};return n?Object(l.jsxs)("div",{className:"chat-feed",children:[Object(l.jsxs)("div",{className:"chat-title-container",children:[Object(l.jsx)("div",{className:"chat-title",children:null===n||void 0===n?void 0:n.title}),Object(l.jsx)("div",{className:"chat-subtitle",children:n.people.map((function(e){return" ".concat(e.person.username)}))})]}),function(){var e=Object.keys(c);return e.map((function(t,a){var n=c[t],r=0===a?null:e[a-1],u=s===n.sender.username;return Object(l.jsxs)("div",{style:{width:"100%"},children:[Object(l.jsx)("div",{className:"message-block",children:u?Object(l.jsx)(o,{message:n}):Object(l.jsx)(m,{message:n,lastMessage:c[r]})}),Object(l.jsx)("div",{className:"read-receipts",style:{marginRight:u?"18px":"0px",marginLeft:u?"0px":"68px"},children:i(n,u)})]},"msg_".concat(a))}))}(),Object(l.jsx)("div",{style:{height:"100px"}}),Object(l.jsx)("div",{className:"message-form-container",children:Object(l.jsx)(b,Object(r.a)(Object(r.a)({},e),{},{chatId:a}))})]}):Object(l.jsx)("div",{})},p=a(24),g=a.n(p),x=a(40),O=a(4),f=a.n(O),v=function(){var e=Object(s.useState)(""),t=Object(u.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(""),r=Object(u.a)(n,2),i=r[0],o=r[1],m=Object(s.useState)(""),j=Object(u.a)(m,2),d=j[0],b=j[1],h=function(){var e=Object(x.a)(g.a.mark((function e(t){var s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),s={"Project-ID":"4ed65356-523b-43ef-9d91-93b122cd20bf","User-Name":a,"User-Secret":i},e.prev=2,e.next=5,f.a.get("https://api.chatengine.io/chats",{headers:s});case 5:localStorage.setItem("username",a),localStorage.setItem("password",i),window.location.reload(),b(""),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),b("Oops, incorrect credentials.");case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsx)("div",{className:"wrapper",children:Object(l.jsxs)("div",{className:"form",children:[Object(l.jsxs)("div",{className:"title",children:[Object(l.jsx)("h1",{className:"h1",children:"Real Time Chat App"}),Object(l.jsx)("span",{children:"Develop By Azharul Islam"}),Object(l.jsx)("hr",{className:" text-center bg-danger"})]}),Object(l.jsxs)("form",{onSubmit:h,children:[Object(l.jsx)("input",{type:"text",value:a,onChange:function(e){return c(e.target.value)},className:"input",placeholder:"Username",required:!0}),Object(l.jsx)("input",{type:"password",value:i,onChange:function(e){return o(e.target.value)},className:"input",placeholder:"Password",required:!0}),Object(l.jsx)("div",{align:"center",children:Object(l.jsx)("button",{type:"submit",className:"btn btn-success w-75",children:"Start chatting"})})]}),Object(l.jsx)("h1",{children:d})]})})},N=(a(94),function(){return localStorage.getItem("username")?Object(l.jsx)(i.d,{height:"100vh",projectID:"4ed65356-523b-43ef-9d91-93b122cd20bf",userName:localStorage.getItem("username"),userSecret:localStorage.getItem("password"),renderChatFeed:function(e){return Object(l.jsx)(h,Object(r.a)({},e))},onNewMessage:function(){return new Audio("https://chat-engine-assets.s3.amazonaws.com/click.mp3").play()}}):Object(l.jsx)(v,{})});n.a.render(Object(l.jsx)(N,{}),document.getElementById("root"))}},[[95,1,2]]]);
//# sourceMappingURL=main.92c0c196.chunk.js.map