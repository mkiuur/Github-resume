(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{NrsU:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("/eHF"),l=a.n(i),o=a("c+OE"),c=a.n(o),s=a("7vrA"),m=a("3Z9Z"),u=a("JI6e"),d=a("Wbzz"),g=a("RQEK"),p=(a("bOu6"),a("DgTb"),function(e){var t=e.filename;e.alt;return r.a.createElement(d.StaticQuery,{query:"3019095435",render:function(e){e.images.edges.find((function(e){return e.node.relativePath.includes(t)}));switch(console.log(t),t.substring(t.length-4,t.length)){case".jpg":case".png":case".gif":return r.a.createElement("img",{src:a("a2qD")("./"+t),style:{maxWidth:600,maxHeight:400}});default:return r.a.createElement("a",{href:"<%=video1[2]%>",target:"iframe_video1"},r.a.createElement("img",{src:"Amu Concept Art.png"}))}}})});t.a=function(){var e=Object(n.useContext)(g.b).projects,t=Object(n.useState)(!1),a=t[0],i=t[1],o=Object(n.useState)(!1),b=o[0],f=o[1];return Object(n.useEffect)((function(){window.innerWidth>769?(i(!0),f(!1)):(f(!0),i(!1))}),[]),r.a.createElement("section",{id:"projects"},r.a.createElement(s.a,null,r.a.createElement("div",{className:"project-wrapper"},e.map((function(e){var t=e.title,n=e.info,i=e.info2,o=e.url,s=e.repo,d=e.img,g=e.id;return r.a.createElement(m.a,{key:g},r.a.createElement(u.a,{lg:4,sm:12},r.a.createElement(l.a,{left:a,bottom:b,duration:1e3,delay:500,distance:"30px"},r.a.createElement("div",{className:"project-wrapper__text"},r.a.createElement("h3",{className:"project-wrapper__text-title"},t||"Project Title"),r.a.createElement("div",null,r.a.createElement("p",null,n||""),r.a.createElement("p",{className:"mb-4"},i||"")),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"cta-btn cta-btn--hero",href:o||"#!"},"See Live"),s&&r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"cta-btn text-color-main",href:s},"Source Code")))),r.a.createElement(u.a,{lg:8,sm:12},r.a.createElement(l.a,{right:a,bottom:b,duration:1e3,delay:1e3,distance:"30px"},r.a.createElement("div",{className:"project-wrapper__image"},r.a.createElement("a",{href:o||"#!",target:"_blank","aria-label":"Project Link",rel:"noopener noreferrer"},r.a.createElement(c.a,{options:{reverse:!1,max:8,perspective:1e3,scale:1,speed:300,transition:!0,axis:null,reset:!0,easing:"cubic-bezier(.03,.98,.52,.99)"}},r.a.createElement("div",{"data-tilt":!0,className:"thumbnail rounded"},r.a.createElement(p,{alt:t,filename:d}))))))))})),r.a.createElement("div",null,r.a.createElement(d.Link,{to:"../",className:"cta-btn cta-btn--hero"},"Return to main page")))))}},aWMu:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),i=a("qhky"),l=a("KQm4"),o=(a("fFdN"),a("bIqx")),c=(a("NrsU"),a("nKWw"),a("sksH")),s=a("RQEK"),m=a("4b23"),u={title:"",name:"Margaret Riese",subtitle:"Computer Engineer",cta:""},d={img:"Work_Photo.jpg",paragraphOne:"Learning Unity Animation Features",paragraphTwo:"I have recently been learning how to use Unity's animation features. Check out my progress!",paragraphThree:"",resume:"https://drive.google.com/file/d/13_lCtgol_VL0ybbYB13QqvnAUJ7H592x/view?usp=sharing"},g=[{id:Object(m.a)(),img:"Animation Layers.gif",title:"Animation Layers",info:"By creating an mask of the humanoid rig, a separate animation can be used for different parts of the body. ",info2:"An example of this would be using an upper body mask for an idle pistol holding animation while the lower body continues to play a walking or running animation.",url:"",repo:""},{id:Object(m.a)(),img:"Animation Retargetting Before.gif",title:"Animation Retargetting Before",info:"When starting to retarget animations to other characters, because the animations were not mapped to humanoid characters, there were some unexpected results...",info2:"",url:"",repo:""},{id:Object(m.a)(),img:"Animation Retargetting After.gif",title:"Animation Retargetting After",info:"After mapping all the animations to be humanoid using Unity's humanoid animation retargetting system, the animations work as expected for all humanoid rigs.",info2:"",url:"",repo:""},{id:Object(m.a)(),img:"2D Blend Trees.gif",title:"2D Blend Trees",info:"The walking and running animations are now blended with a right strafe and left strafe animation depending on the velocity float in the Z direction.",info2:"The X and Z velocities are locked and reset at 0.5f for walking and 2.0f for running based on whether the 'shift' key is being pressed.",url:"",repo:"https://github.com/mkiuur/Learning-Unity-Animation-Features/blob/main/twoDimensionalAnimationStateController.cs"},{id:Object(m.a)(),img:"1D Blend Trees.gif",title:"1D Blend Trees",info:"The animations for walking and running are blended together based on a float value for velocity in the X direction. The longer 'w' is pressed, the greater the velocity.",info2:"As the velocity increases, the running animation will be further blended into the walking animation.",url:"",repo:"https://github.com/mkiuur/Learning-Unity-Animation-Features/blob/main/animationStateControllerBlend.cs"},{id:Object(m.a)(),img:"Boolean Animation Controller.gif",title:"Boolean Animation Controller",info:"Animations are changed based on boolean values. e.g. if 'w' is pressed, she will walk, if 'shift' is pressed, she will run.",info2:"Switching between walking and running animations is immediate and choppy looking.",url:"",repo:"https://github.com/mkiuur/Learning-Unity-Animation-Features/blob/main/animationStateController.cs"}],p={cta:"mkiuur@gmail.com",btn:"Let's Talk",email:"mkiuur@gmail.com"},b={networks:[{id:Object(m.a)(),name:"linkedin",url:"https://www.linkedin.com/in/margaret-riese/"},{id:Object(m.a)(),name:"github",url:"https://github.com/mkiuur"}]};var f=function(){var e=Object(n.useState)({}),t=e[0],a=e[1],i=Object(n.useState)({}),m=i[0],f=i[1],h=Object(n.useState)([]),E=h[0],w=h[1],v=Object(n.useState)({}),j=v[0],k=v[1],y=Object(n.useState)({}),O=y[0],x=y[1];return Object(n.useEffect)((function(){a(Object.assign({},u)),f(Object.assign({},d)),w(Object(l.a)(g)),k(Object.assign({},p)),x(Object.assign({},b))}),[]),r.a.createElement(s.a,{value:{hero:t,about:m,projects:E,contact:j,footer:O}},r.a.createElement(o.a,null),r.a.createElement(c.a,null))},h=a("jooN");a("q4sD"),a("J9yo"),t.default=function(){var e=h.e.title,t=h.e.lang,a=h.e.description;return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("title",null,e||"Margaret Riese Resume Site"),r.a.createElement("html",{lang:t||"en"}),r.a.createElement("meta",{name:"description",content:a||"Margaret Riese Resume Site"})),r.a.createElement(f,null))}},bIqx:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("/eHF"),l=a.n(i),o=a("c+OE"),c=a.n(o),s=a("7vrA"),m=a("3Z9Z"),u=a("JI6e"),d=(a("Wbzz"),a("RQEK")),g=a("bOu6"),p=(a("50V+"),a("cT+2"));t.a=function(){var e,t=Object(n.useContext)(d.b).projects,a=Object(n.useContext)(d.b).about,i=(a.img,a.paragraphOne),o=a.paragraphTwo,b=(a.paragraphThree,a.resume,Object(n.useState)(!1)),f=b[0],h=b[1],E=Object(n.useState)(!1),w=E[0],v=E[1];return Object(n.useEffect)((function(){window.innerWidth>769?(h(!0),v(!1)):(v(!0),h(!1))}),[]),r.a.createElement("section",{id:"project_item"},r.a.createElement(s.a,null,r.a.createElement(g.a,{title:i||""}),r.a.createElement(l.a,((e={bottom:f}).bottom=w,e.duration=1e3,e.delay=500,e.distance="30px",e),r.a.createElement("p",{className:"project_item__text"},o||"")),r.a.createElement("div",{className:"project-wrapper"},t.map((function(e){var t=e.title,a=e.info,n=e.info2,i=(e.url,e.repo),o=e.img,s=e.id;return r.a.createElement(m.a,{key:s},r.a.createElement(u.a,{lg:4,sm:12},r.a.createElement(l.a,{left:f,bottom:w,duration:1e3,delay:500,distance:"30px"},r.a.createElement("div",{className:"project-wrapper__text"},r.a.createElement("h1",{className:"project-wrapper__text-title"},t||"Project Title"),r.a.createElement("div",null,r.a.createElement("p",null,a||""),r.a.createElement("p",{className:"mb-4"},n||"")),i&&r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"cta-btn cta-btn--resume",href:i},"Source Code")))),r.a.createElement(u.a,{lg:8,sm:12},r.a.createElement(l.a,{right:f,bottom:w,duration:1e3,delay:1e3,distance:"30px"},r.a.createElement("div",{className:"project-wrapper__image"},r.a.createElement(c.a,{options:{reverse:!1,max:8,perspective:1e3,scale:1,speed:300,transition:!0,axis:null,reset:!0,easing:"cubic-bezier(.03,.98,.52,.99)"}},r.a.createElement("div",{"data-tilt":!0,className:"thumbnail rounded"},r.a.createElement(p.a,{alt:t,filename:o}))))),r.a.createElement("p",null,r.a.createElement("h1",{className:"project-wrapper__text-title"},""))))})))))}},"cT+2":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("Wbzz");a("DgTb");t.a=function(e){var t=e.filename;e.alt;return r.a.createElement(i.StaticQuery,{query:"3019095435",render:function(e){e.images.edges.find((function(e){return e.node.relativePath.includes(t)}));switch(console.log(t),t.substring(t.length-4,t.length)){case".jpg":case".png":case".gif":return r.a.createElement("img",{src:a("a2qD")("./"+t),style:{maxWidth:600,maxHeight:400}});default:return r.a.createElement("iframe",{width:"560",height:"315",src:t,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})}}})}},sksH:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("Wbzz"),l=a("RQEK"),o=a("3OCX"),c=a("7vrA"),s=a("3Z9Z"),m=a("JI6e"),u=a("jooN");t.a=function(){var e=Object(n.useContext)(l.b).footer.networks,t=u.d.isEnabled;return r.a.createElement("footer",{className:"footer navbar-static-bottom"},r.a.createElement(c.a,null,r.a.createElement("span",{className:"back-to-top"},r.a.createElement(i.Link,{to:"projects",smooth:!0,duration:1e3},r.a.createElement("i",{className:"fa fa-angle-up fa-2x","aria-hidden":"true"}))),r.a.createElement(s.a,null,r.a.createElement(m.a,null),r.a.createElement(m.a,null,r.a.createElement("div",null,r.a.createElement(i.Link,{to:"/",className:"cta-btn cta-btn--hero"},"Return to main page"))),r.a.createElement(m.a,null,r.a.createElement("div",null,r.a.createElement(i.Link,{to:"/projects",className:"cta-btn cta-btn--hero"},"Return to projects list"))),r.a.createElement(m.a,null)),r.a.createElement("div",{className:"social-links"},e&&e.map((function(e){var t=e.id,a=e.name,n=e.url;return r.a.createElement("a",{key:t,href:n||"https://mkiuur.github.io/Github-resume/",rel:"noopener noreferrer",target:"_blank","aria-label":a},r.a.createElement("i",{className:"fa fa-"+(a||"refresh")+" fa-inverse"}))}))),r.a.createElement("hr",null),t&&r.a.createElement(o.a,null)))}}}]);
//# sourceMappingURL=component---src-pages-learning-unity-animation-features-js-39dc71a4274ebebc5bf9.js.map