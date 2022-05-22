(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){},18:function(e,t,a){},20:function(e,t,a){},23:function(e,t,a){},25:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n,r,l=a(0),o=a.n(l),c=a(6),s=a.n(c),i=(a(16),a(2)),u=(a(18),a(20),function(e){return o.a.createElement("div",{className:"Header"},o.a.createElement("div",{className:"AIChatBubble fadeInBottom"},o.a.createElement("h3",null,o.a.createElement("span",{id:"hello"},"Howdy, I\u2019m Curie! \ud83d\udc4b "),"I\u2019m a AI Engine that can understand natural, English language. So tell me, what would you like to know?")),o.a.createElement("div",{className:"AIChatBubble fadeInBottom delay-2"},o.a.createElement("h3",null,"If you\u2019re stuck, try asking me something like, \u2018write a poem about dinosaurs in the snow\u2019. Or, \u2018tell me more about Alexander Neumann\u2019. ")),o.a.createElement("div",{className:" AIChatBubble  fadeInBottom delay-4 "},o.a.createElement("h3",null,o.a.createElement("img",{src:"warning.svg",alt:"warning"}),o.a.createElement("span",{id:"warning"}," Please note: Responses expressed are solely my own and do not express the views or opinions of my creator. They are not contextual. That's for the next update. "),o.a.createElement("span",null,"\ud83e\udd13"))))}),m=a(1);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var p=function(e){return o.a.createElement("svg",d({version:1.1,id:"Layer_1",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 180.1 155.8",style:{enableBackground:"new 0 0 180.1 155.8"},xmlSpace:"preserve"},e),o.a.createElement("g",null,n||(n=o.a.createElement("defs",null,o.a.createElement("rect",{id:"SVGID_1_",x:-761.4,y:-632.4,width:1366,height:900}))),o.a.createElement("clipPath",{id:"SVGID_2_"},o.a.createElement("use",{xlinkHref:"#SVGID_1_",style:{overflow:"visible"}}))),r||(r=o.a.createElement("path",{className:"st0",d:"M0,16.7C0.1,12.4,1,8.2,3.8,5c3.6-4.1,9.5-5.5,14.9-4.9S29.1,3,34,5.2C75.5,24,117.7,41.4,160.3,57.3 c5.9,2.2,12.2,4.6,16.1,9.6c4.9,6.1,4.9,15.6,0,21.7c-3.7,4.6-9.3,7.1-14.8,9.4c-23.5,9.8-47,19.7-70.4,29.5 c-20.1,8.4-40.2,16.8-60.6,24.5c-5.7,2.1-11.7,4.3-17.7,3.6c-14.1-1.5-13.8-14.5-12.1-25.4c1.3-8.4,3-16.7,5.1-24.9 c0.5-2.1,5.5-22.7,6.5-22.7c20.2,0,40.3,0,60.5,0c3.4,0,8-1,8.1-4.5c0.1-3.5-4.6-4.6-8.2-4.7c-19.9,0-39.9-0.1-59.8-0.1 C7.9,57.2,2.8,40.9,0.5,24.1C0.2,21.7,0,19.2,0,16.7z"})))},h=(a.p,a(5),function(){return o.a.createElement("span",null," Alexander Neumann is the 27 year old graphic designer and developer of this front-end Challenge. In his graphic design work, he has worked for ",o.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Christopher_Wylie",rel:"noopener"},"Christopher Wylie")," as well as developed his own block stacking game, ",o.a.createElement("a",{href:"https://vimeo.com/648414048",rel:"noopener"},"Misfits"),". In a front-end capacity, he worked for ",o.a.createElement("a",{href:"https://edaid.com/",rel:"noopener"},"EdAid"),", created a ",o.a.createElement("a",{href:"https://https://gooddaydashboard.herokuapp.com/",rel:"noopener"},"jQuery dashboard")," for up-to-the-minute conditions in London, UK, and recently completed a 6 month Software Engineering Immersive with General Assembly.")}),f=a(7),g=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("form",{onSubmit:function(t){t.preventDefault(),t.target.reset(),function(t){if(e.setIsLoading(!0),e.usersPromptData.toLowerCase().includes("alexander neumann")){var a=[o.a.createElement(o.a.Fragment,null,o.a.createElement(h,null))];e.updateValuesData(function(e){return[].concat(Object(m.a)(e),[["".concat(t),a]])}),e.setIsLoading(!1)}else{console.log(e.usersPromptData,t);var n={prompt:"".concat(t),temperature:1,max_tokens:200,top_p:1,frequency_penalty:0,presence_penalty:0};fetch("https://api.openai.com/v1/engines/text-curie-001/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat("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")},body:JSON.stringify(n)}).then(function(e){if(console.log(e),!e.ok)throw new Error("HTTP status "+e.status);return e.json()}).then(function(a){console.log(a.choices[0].text),e.setIsLoading(!1);var n=a.choices[0].text.replace(/((^.)(^,)(^())\r\n)/gm,"");n=""===n?"I'm sorry Dave, I'm afraid I can't that":n,e.updateValuesData(function(e){return[].concat(Object(m.a)(e),[["".concat(t),"".concat(n)]])}),console.log(e.allValuesData)})}}(e.usersPromptData,e.updateValuesData,e.setIsLoading)}},o.a.createElement(f.a,{placeholder:"Type a message...",onChange:function(t){t.preventDefault(),e.updateUsersPrompt(t.target.value)}}),o.a.createElement("button",{className:"Submit",type:"submit",disabled:e.isLoading},o.a.createElement(p,null))))};a(23),a(25);function E(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"spinner-container"},o.a.createElement("div",{className:"lineUp"},o.a.createElement("h3",null,"Please wait..."),o.a.createElement("span",{className:"dot-falling"}))))}var v=function(e){var t=Object(l.useRef)(null);Object(l.useEffect)(function(){t.current.scrollIntoView({behavior:"smooth"})},[e.allValuesData]);var a=Object(m.a)(e.allValuesData).map(function(e,t){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{key:"".concat(e,"-").concat(t),className:"HumanChatBubble fadeInBottom"},o.a.createElement("h3",null,e[0])),o.a.createElement("div",{key:"".concat(e,"-").concat(t-"response")},o.a.createElement("div",{className:"AIChatBubble fadeInBottom"},o.a.createElement("h3",null,e[1]))))});return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"Response"},e.isLoading?o.a.createElement(E,null):a,o.a.createElement("div",{className:"empty",ref:t})))},b=function(){var e=Object(l.useState)([]),t=Object(i.a)(e,2),a=t[0],n=t[1],r=Object(l.useState)([]),c=Object(i.a)(r,2),s=c[0],m=c[1],d=Object(l.useState)(!1),p=Object(i.a)(d,2),h=p[0],f=p[1];return o.a.createElement("div",{className:"App"},o.a.createElement("main",null,o.a.createElement(u,null),o.a.createElement(v,{allValuesData:s,setIsLoading:f,isLoading:h})),o.a.createElement(g,{usersPromptData:a,updateUsersPrompt:n,updateValuesData:m,allValuesData:s,isLoading:h,setIsLoading:f}))},y=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,32)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,l=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),l(e),o(e)})};a(27).config(),s.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(b,null))),y()},5:function(e,t,a){},8:function(e,t,a){e.exports=a(31)}},[[8,3,2]]]);
//# sourceMappingURL=main.4a8f63a3.chunk.js.map