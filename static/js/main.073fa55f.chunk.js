(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{3:function(e){e.exports=JSON.parse('{"a":"Vaisakh","c":"","b":"TP","f":"Im a full-stack web developer.","j":[{"id":0,"image":"fa-github","url":"https://github.com/vaisakh49","style":"socialicons"},{"id":1,"image":"fa-facebook","url":"https://www.facebook.com/vaisakh49","style":"socialicons"},{"id":2,"image":"fa-instagram","url":"https://www.instagram.com/vaisakh.tp/","style":"socialicons"},{"id":3,"image":"fa-linkedin","url":"https://www.linkedin.com/in/vaisakh49","style":"socialicons"}],"e":"About Me","d":"Hello, I\'m Vaisakh and I am a Full-stack web developer. I\'m working with the MERN stack and mainly focused on the front end. I graduated in June 2020 with a degree in computer application from Calicut university. I have always been interested in learning and applying new technologies and that keeps my mind alive and I look forward to my next step. ","k":"Recent Projects","g":"https://api.github.com/users/","i":"vaisakh49","h":"/repos?sort=updated&direction=desc","l":6,"n":true,"m":false}')},43:function(e,a,t){e.exports=t.p+"static/media/Profile.444e4d0d.jpg"},49:function(e,a,t){e.exports=t(86)},54:function(e,a,t){},58:function(e,a,t){},59:function(e,a,t){},86:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(18),i=t.n(r),c=(t(54),t(16)),s=t(12),o=(t(55),t(56),t(58),t(59),t(3)),m=t(48),u=t(11),d=t(42),p=t.n(d),g=function(){var e=Object(n.useState)(new Array(o.j.length).fill("socialicons")),a=Object(u.a)(e,2),t=a[0],r=a[1],i=function(e){var a=Object(m.a)(t);return"enter"===e.event?(a[e.icon.id]="socialiconshover",r(a)):"leave"===e.event?(a[e.icon.id]="socialicons",r(a)):void 0};return l.a.createElement("div",null,l.a.createElement("div",{id:"home",className:"title jumbotron jumbotron-fluid bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"},l.a.createElement("div",{id:"stars"}),l.a.createElement("div",{className:"container container-fluid text-center "},l.a.createElement("h1",{className:"display-1"},o.a+" "+o.c+" "+o.b),l.a.createElement(p.a,{className:"lead"},o.f),l.a.createElement("div",{className:"p-3"},o.j.map((function(e){return l.a.createElement("a",{key:e.id,target:"_blank",rel:"noopener noreferrer",href:e.url,"aria-label":"My ".concat(e.image.split("-")[1])},l.a.createElement("i",{className:"fab ".concat(e.image,"  fa-3x ").concat(t[e.id]),onMouseOver:function(){return i({icon:e,event:"enter"})},onMouseOut:function(){return i({icon:e,event:"leave"})}}))}))),l.a.createElement("a",{className:"btn btn-outline-light btn-lg",href:"#aboutme",role:"button","aria-label":"Learn more about me"},"More about me"))))},h=t(43),f=t.n(h),b=function(){return l.a.createElement("div",{id:"aboutme",className:"jumbotron jumbotron-fluid m-0",style:{backgroundColor:"#f7f7f7"}},l.a.createElement("div",{className:"container container-fluid"},l.a.createElement("div",{className:"flex-row"},l.a.createElement("div",{className:"col-5 d-none d-lg-inline align-self-center"},l.a.createElement("img",{className:"border border-secondary rounded-circle  align-self-center ",src:f.a,alt:"profilepicture",width:"375",height:"375"})),l.a.createElement("div",{className:"col d-lg-inline align-self-center"},l.a.createElement("h1",{className:"display-4 mb-5 text-center "},o.e),l.a.createElement("p",{className:"lead text-center"},o.d),l.a.createElement("br",null),l.a.createElement("p",{className:"lead text-center"},l.a.createElement("a",{className:"btn btn-outline-dark btn-lg",href:"#!",target:"_blank",rel:"noreferrer noopener",role:"button"},"Resume"))))))},E=t(22),v=t.n(E),N=function(e){var a=e.value,t=Object(n.useState)([]),r=Object(u.a)(t,2),i=r[0],c=r[1],s=Object(n.useCallback)((function(e){v.a.get(a).then((function(e){return c(e.data)})).catch((function(e){return console.error(e.message)})).finally((function(){}))}),[a]);Object(n.useEffect)((function(){s()}),[s]);var o=[],m=0;for(var d in i)o.push(d),m+=i[d];return l.a.createElement("div",{className:"pb-3"},"Languages:"," ",o.map((function(e){return l.a.createElement("p",{key:e,className:"badge badge-light card-link"},e,": ",Math.trunc(i[e]/m*1e3)/10," %")})))},y=function(e){var a=e.value,t=Object(n.useState)("0 mints"),r=Object(u.a)(t,2),i=r[0],c=r[1],s=Object(n.useCallback)((function(e){var t=new Date(a.pushed_at),n=(new Date).getTime()-t.getTime(),l=Math.trunc(n/1e3/60/60);if(l<24)return c("".concat(l.toString()," hours ago"));var r=t.getDate(),i=t.getMonth(),s=t.getFullYear();return c("on ".concat(r," ").concat(["January","February","March","April","May","June","July","August","September","October","November","December"][i]," ").concat(s))}),[a.pushed_at]);Object(n.useEffect)((function(){s()}),[s]);var o=a.name,m=a.description,d=a.svn_url,p=a.stargazers_count,g=a.languages_url;return l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"card shadow-lg p-3 mb-5 bg-white rounded"},l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title"},o," "),l.a.createElement("p",{className:"card-text"},m," "),l.a.createElement("a",{href:"".concat(d,"/archive/master.zip"),className:"btn btn-outline-secondary mr-3"},l.a.createElement("i",{className:"fab fa-github"})," Clone Project"),l.a.createElement("a",{href:d,target:" _blank",className:"btn btn-outline-secondary"},l.a.createElement("i",{className:"fab fa-github"})," Repo"),l.a.createElement("hr",null),l.a.createElement(N,{value:g}),l.a.createElement("p",{className:"card-text"},l.a.createElement("span",{className:"text-dark card-link mr-4"},l.a.createElement("i",{className:"fab fa-github"})," Stars"," ",l.a.createElement("span",{className:"badge badge-dark"},p)),l.a.createElement("small",{className:"text-muted"},"Updated ",i)))))},k=function(){var e=Object(n.useState)([]),a=Object(u.a)(e,2),t=a[0],r=a[1],i=Object(n.useCallback)((function(){v.a.get(o.g+o.i+o.h).then((function(e){return r(e.data.slice(0,o.l))})).catch((function(e){return console.error(e.message)})).finally((function(){}))}),[]);return Object(n.useEffect)((function(){i()}),[i]),l.a.createElement("div",{id:"projects",className:"jumbotron jumbotron-fluid m-0",style:{backgroundColor:"#f7f7f7"}},t.length&&l.a.createElement("div",{className:"container container-fluid"},l.a.createElement("h1",{className:"display-4 pb-5 text-center"},o.k),l.a.createElement("div",{className:"row"},t.map((function(e){return l.a.createElement(y,{key:e.id,id:e.id,value:e})})))))},w=function(){return l.a.createElement("div",{id:"contact",className:"jumbotron jumbotron-fluid m-0",style:{backgroundColor:"#f7f7f7"}},l.a.createElement("div",{className:"container container-fluid"},l.a.createElement("div",{className:"d-inline align-self-center"},l.a.createElement("h2",{className:"display-4 pb-3 text-center"},"Get In Touch"),l.a.createElement("p",{className:"lead text-center",style:{fontSize:"22px"}},"I'm currently looking for full-time Software Developing opportunities! If you know of any positions available, have any questions, or just want to say hi, please feel free to email me at",l.a.createElement("a",{href:"mailto:vaisakhtp133@gmail.com"}," vaisakhtp133@gmail.com"),"."),l.a.createElement("footer",{style:{backgroundColor:"#f7f7f7"},className:"mt-auto py-3 text-center"},l.a.createElement("i",{className:"fas fa-code"})," by"," ",l.a.createElement("a",{className:"badge badge-dark",rel:"noopener",href:"https://github.com/vaisakh49","aria-label":"My GitHub"},"Vaisakh")," ","using ",l.a.createElement("i",{className:"fab fa-react"})))))},x=function(e){var a=Object(n.useState)(!0),t=Object(u.a)(a,2),r=t[0],i=t[1];return Object(n.useEffect)((function(){document.addEventListener("scroll",(function(){var e=window.scrollY<300;e!==r&&i(e)}))}),[r]),l.a.createElement("nav",{className:"navbar navbar-expand-lg fixed-top navbar-light ".concat(r?"bg-transparent":"bg-gradient"," ")},l.a.createElement("a",{className:"navbar-brand",href:"/portfolio/#home"},"<".concat(o.a," />")),l.a.createElement("button",{className:"d-none navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo02","aria-controls":"navbarTogglerDemo02","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo02"},l.a.createElement("ul",{className:"navbar-nav mr-auto mt-2 mt-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link lead",href:"/portfolio/#aboutme"},l.a.createElement("b",null,"About"))),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link lead",href:"/portfolio/#projects"},l.a.createElement("b",null,"Projects"))),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link lead",href:"/portfolio/#skills"},l.a.createElement("b",null,"Skills"))),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link lead",href:"/portfolio/#interests"},l.a.createElement("b",null,"Interests"))),o.m&&l.a.createElement("li",{className:"nav-item"},l.a.createElement(c.b,{className:"nav-link lead",to:"/portfolio/blog"},l.a.createElement("b",null,"Blog"))))))},j=t(46),q=function e(a){var t=this,r=a.title,i=a.image,c=a.description;Object(j.a)(this,e),this.list=[],this.addHeading=function(e){return t.list.push(l.a.createElement(n.Fragment,{key:t.list.length},l.a.createElement("h1",{className:""},e),l.a.createElement("hr",null))),t},this.addParagraph=function(e){return t.list.push(l.a.createElement("p",{key:t.list.length,className:"lead"},e)),t},this.getBlog=function(){return l.a.createElement("div",{className:"container-lg"},t.list)},this.title=r,this.image=i,this.description=c},I=[],S=new q({title:"My First Blog",image:"img",description:"Description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, dolores? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia provident similique corporis rem ullam odio excepturi voluptas harum, architecto sit!"}).addHeading("Heading").addParagraph("1st Paragraph Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur vero reiciendis quas, autem sit culpa? Quibusdam, cupiditate voluptate a non nulla aliquid enim doloremque ullam, facilis quisquam similique hic omnis!").addParagraph("2nd Paragraph Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ad, temporibus quae obcaecati eum expedita pariatur aspernatur recusandae beatae iste soluta sunt blanditiis dolore ipsam quia laboriosam quas perspiciatis architecto?"),O=new q({title:"My Second Blog",image:"img",description:"Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempore aut neque consectetur voluptatem quam nihil, facere earum adipisci, animi beatae dicta maiores, ipsam delectus ab molestias dolorum aperiam? Sapiente?"}).addHeading("Heading").addParagraph("1st Paragraph Aspernatur vero reiciendis quas, autem sit culpa? Quibusdam, cupiditate voluptate a non nulla aliquid enim doloremque ullam, facilis quisquam similique hic omnis!").addParagraph("2nd Paragraph Consequuntur ad, temporibus quae obcaecati eum expedita pariatur aspernatur recusandae beatae iste soluta sunt blanditiis dolore ipsam quia laboriosam quas perspiciatis architecto?").addHeading("New Heading").addParagraph("1st Paragraph Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur vero reiciendis quas, autem sit culpa? Quibusdam, cupiditate voluptate a non nulla aliquid enim doloremque ullam, facilis quisquam similique hic omnis!").addParagraph("2nd Paragraph Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ad, temporibus quae obcaecati eum expedita pariatur aspernatur recusandae beatae iste soluta sunt blanditiis dolore ipsam quia laboriosam quas perspiciatis architecto?");I.push(S),I.push(O);var P=I,C=function(e){return l.a.createElement("div",{className:"container-lg mt-5 bg-blue"},l.a.createElement("h1",{className:"text-center"},"Blogs"),P.map((function(e,a){return l.a.createElement(M,{key:a,title:e.title,description:e.description,index:a})})))},M=function(e){var a=e.index,t=e.title,n=e.description;return l.a.createElement("div",{className:"m-5"},l.a.createElement("div",{className:""},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-4 col-lg-12"}),l.a.createElement("div",{className:"col-8 col-lg-12"},l.a.createElement("div",{className:""},l.a.createElement("h1",{className:""},t),l.a.createElement("p",{className:"lead"},n),l.a.createElement(c.b,{to:"".concat("/portfolio","blog/").concat(a)},"Read more..."," ")))),l.a.createElement("hr",null)))},A=function(e){var a=e.match.params.id,t=P[a];return l.a.createElement("div",{className:"container-lg mt-5"},t&&l.a.createElement("div",null,l.a.createElement("h1",{className:"display-2 text-center"},t.title,"hi"),l.a.createElement("img",{className:"img-fluid mb-2",src:t.image,alt:t.title}),t.getBlog()),!t&&l.a.createElement("h1",{className:"display-1 text-center"},"404 - Page not found"))},H=function(){return l.a.createElement("div",{id:"interests",className:"jumbotron jumbotron-fluid m-0",style:{backgroundColor:"white"}},l.a.createElement("div",{className:"container container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col d-lg-inline align-self-center"},l.a.createElement("h1",{className:"display-4 pb-4 text-center"},"Interests"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col text-center"},l.a.createElement("p",{className:"lead text-center",style:{fontSize:"28px"}},"Meditation"),l.a.createElement("img",{alt:"",src:"https://img.icons8.com/nolan/128/light.png"}),l.a.createElement("p",{className:"lead text-center"},"Every morning, I start my day with meditation. From the moment I started coding I started to meditate and learned how to focus and relax more. As my mind begins to calm down the day begins I can come up with new ideas.")),l.a.createElement("div",{className:"col text-center"},l.a.createElement("p",{className:"lead text-center",style:{fontSize:"28px"}},"Reading"),l.a.createElement("img",{alt:"",src:"https://img.icons8.com/nolan/128/saving-book.png"}),l.a.createElement("p",{className:"lead text-center"},"I have been a reader since I was young. I love reading stories because it takes us to another world. No one in that world can stop our imagination. I still try to find good books to read. It helps to calm my mind. I am very interested in teaching others what I have learned, which helps me to learn more about that subject.","!")),l.a.createElement("div",{className:"col text-center"},l.a.createElement("p",{className:"lead text-center",style:{fontSize:"28px"}},"Soccer"),l.a.createElement("img",{alt:"",src:"https://img.icons8.com/nolan/128/football2.png"}),l.a.createElement("p",{className:"lead text-center"},"Playing football is one of the habits from a young age. Although I can not say that I am a good player, but it makes me very happy when I play football. There is nothing happier than playing with friends.")),l.a.createElement("div",{className:"col text-center"},l.a.createElement("p",{className:"lead text-center",style:{fontSize:"28px"}},"Food"),l.a.createElement("img",{alt:"",src:"https://img.icons8.com/nolan/128/meal.png"}),l.a.createElement("p",{className:"lead text-center"},"I'm not a foodie but I'm still excited to discover new flavors. The pleasure of discovering and eating new flavors is something else. I'm still a person who likes to share my favorite food, and that makes me happy.")))))))},L=t(14),T=t(47),D=t(30),z=function(){return l.a.createElement("div",{id:"skills",className:"jumbotron jumbotron-fluid m-0",style:{backgroundColor:"#f7f7f7"}},l.a.createElement("div",{className:"container container-fluid"},l.a.createElement("div",{className:"d-inline align-self-center"},l.a.createElement("h1",{className:"display-4 pb-5 text-center"},"Skills"),l.a.createElement(T.a,{defaultActiveKey:"home",justify:!0,variant:"tabs",transition:!1,id:"skills-tabs",style:{backgroundColor:"#f7f7f7",fontSize:"1.25rem"}},l.a.createElement(D.a,{eventKey:"home",title:"Hard Skills"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("br",null),l.a.createElement("p",{className:"lead"},"HTML5",l.a.createElement(L.a,{now:90})),l.a.createElement("p",{className:"lead"},"CSS3",l.a.createElement(L.a,{now:75})),l.a.createElement("p",{className:"lead"},"Javascript",l.a.createElement(L.a,{now:78}))),l.a.createElement("div",{className:"col"},l.a.createElement("br",null),l.a.createElement("p",{className:"lead"},"React js",l.a.createElement(L.a,{now:78})),l.a.createElement("p",{className:"lead"},"Node/Express",l.a.createElement(L.a,{now:60})),l.a.createElement("p",{className:"lead"},"Git/Github",l.a.createElement(L.a,{now:85}))))),l.a.createElement(D.a,{eventKey:"soft",title:"Soft Skills"},l.a.createElement("div",{className:"col d-lg-inline align-self-center"},l.a.createElement("br",null),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col text-center"},l.a.createElement("p",{className:"lead text-center"},"Collaboration"),l.a.createElement("img",{alt:"",src:"https://img.icons8.com/ios/75/000000/collaboration-female-male.png"})),l.a.createElement("div",{className:"col text-center"},l.a.createElement("p",{className:"lead text-center"},"Problem Solving"),l.a.createElement("img",{alt:"",src:"https://img.icons8.com/ios/75/000000/critical-thinking.png"})),l.a.createElement("div",{className:"col text-center"},l.a.createElement("p",{className:"lead text-center"},"Positivity"),l.a.createElement("img",{alt:"",src:"https://img.icons8.com/ios/75/000000/happy-cloud.png"}))),l.a.createElement("br",null),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col text-center"},l.a.createElement("p",{className:"lead text-center"},"Goal Setting"),l.a.createElement("img",{alt:"",src:"https://img.icons8.com/ios/75/000000/goal.png"})),l.a.createElement("div",{className:"col text-center"},l.a.createElement("p",{className:"lead text-center"},"Organization"),l.a.createElement("img",{alt:"",src:"https://img.icons8.com/ios/75/000000/to-do.png"})),l.a.createElement("div",{className:"col text-center"},l.a.createElement("p",{className:"lead text-center"},"Empathy"),l.a.createElement("img",{alt:"",src:"https://img.icons8.com/ios/75/000000/trust.png"})))))))))},B=function(){return l.a.createElement(n.Fragment,null,l.a.createElement(g,null),l.a.createElement(b,null),l.a.createElement(k,null),l.a.createElement(z,null),l.a.createElement(H,null))},F=function(){return l.a.createElement(c.a,{basename:"/portfolio/"},o.n&&l.a.createElement(x,null),l.a.createElement(s.a,{path:"/",exact:!0,component:B}),o.m&&l.a.createElement(s.a,{path:"/blog",exact:!0,component:C}),o.m&&l.a.createElement(s.a,{path:"/blog/:id",component:A}),l.a.createElement(w,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[49,1,2]]]);
//# sourceMappingURL=main.073fa55f.chunk.js.map