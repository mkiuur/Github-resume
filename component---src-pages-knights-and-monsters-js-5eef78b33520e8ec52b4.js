(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{NrsU:function(e,t,a){"use strict";a("q1tI"),a("/eHF"),a("c+OE"),a("7vrA"),a("3Z9Z"),a("JI6e"),a("Wbzz"),a("RQEK"),a("bOu6"),a("cT+2")},bIqx:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),i=a("/eHF"),s=a.n(i),o=a("c+OE"),c=a.n(o),l=a("7vrA"),m=a("3Z9Z"),u=a("JI6e"),h=(a("Wbzz"),a("RQEK")),d=a("bOu6"),g=(a("50V+"),a("cT+2"));t.a=function(){var e,t=Object(r.useContext)(h.b).projects,a=Object(r.useContext)(h.b).about,i=(a.img,a.paragraphOne),o=a.paragraphTwo,p=(a.paragraphThree,a.resume,Object(r.useState)(!1)),b=p[0],f=p[1],E=Object(r.useState)(!1),j=E[0],v=E[1];return Object(r.useEffect)((function(){window.innerWidth>769?(f(!0),v(!1)):(v(!0),f(!1))}),[]),n.a.createElement("section",{id:"project_item"},n.a.createElement(l.a,null,n.a.createElement(d.a,{title:i||""}),n.a.createElement(s.a,((e={bottom:b}).bottom=j,e.duration=1e3,e.delay=500,e.distance="30px",e),n.a.createElement("p",{className:"project_item__text"},o||"")),n.a.createElement("div",{className:"project-wrapper"},t.map((function(e){var t=e.title,a=e.info,r=e.info2,i=(e.url,e.repo),o=e.img,l=e.id;return n.a.createElement(m.a,{key:l},n.a.createElement(u.a,{lg:4,sm:12},n.a.createElement(s.a,{left:b,bottom:j,duration:1e3,delay:500,distance:"30px"},n.a.createElement("div",{className:"project-wrapper__text"},n.a.createElement("h1",{className:"project-wrapper__text-title"},t||"Project Title"),n.a.createElement("div",null,n.a.createElement("p",null,a||""),n.a.createElement("p",{className:"mb-4"},r||"")),i&&n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"cta-btn cta-btn--resume",href:i},"Source Code")))),n.a.createElement(u.a,{lg:8,sm:12},n.a.createElement(s.a,{right:b,bottom:j,duration:1e3,delay:1e3,distance:"30px"},n.a.createElement("div",{className:"project-wrapper__image"},n.a.createElement(c.a,{options:{reverse:!1,max:8,perspective:1e3,scale:1,speed:300,transition:!0,axis:null,reset:!0,easing:"cubic-bezier(.03,.98,.52,.99)"}},n.a.createElement("div",{"data-tilt":!0,className:"thumbnail rounded"},n.a.createElement(g.a,{alt:t,filename:o}))))),n.a.createElement("p",null,n.a.createElement("h1",{className:"project-wrapper__text-title"},""))))})))))}},sksH:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),i=a("Wbzz"),s=a("RQEK"),o=a("3OCX"),c=a("7vrA"),l=a("3Z9Z"),m=a("JI6e"),u=a("jooN");t.a=function(){var e=Object(r.useContext)(s.b).footer.networks,t=u.d.isEnabled;return n.a.createElement("footer",{className:"footer navbar-static-bottom"},n.a.createElement(c.a,null,n.a.createElement("span",{className:"back-to-top"},n.a.createElement(i.Link,{to:"projects",smooth:!0,duration:1e3},n.a.createElement("i",{className:"fa fa-angle-up fa-2x","aria-hidden":"true"}))),n.a.createElement(l.a,null,n.a.createElement(m.a,null),n.a.createElement(m.a,null,n.a.createElement("div",null,n.a.createElement(i.Link,{to:"/",className:"cta-btn cta-btn--hero"},"Return to main page"))),n.a.createElement(m.a,null,n.a.createElement("div",null,n.a.createElement(i.Link,{to:"/projects",className:"cta-btn cta-btn--hero"},"Return to projects list"))),n.a.createElement(m.a,null)),n.a.createElement("div",{className:"social-links"},e&&e.map((function(e){var t=e.id,a=e.name,r=e.url;return n.a.createElement("a",{key:t,href:r||"https://mkiuur.github.io/Github-resume/",rel:"noopener noreferrer",target:"_blank","aria-label":a},n.a.createElement("i",{className:"fa fa-"+(a||"refresh")+" fa-inverse"}))}))),n.a.createElement("hr",null),t&&n.a.createElement(o.a,null)))}},"y+Om":function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),n=a.n(r),i=a("qhky"),s=a("KQm4"),o=(a("fFdN"),a("bIqx")),c=(a("NrsU"),a("nKWw"),a("sksH")),l=a("RQEK"),m=a("4b23"),u={title:"",name:"Margaret Riese",subtitle:"Computer Engineer",cta:""},h={img:"Work_Photo.jpg",paragraphOne:"Knights and Monsters",paragraphTwo:"Computer graphics systems I worked on to build towards creating my Knights and Monsters demonstration.",paragraphThree:"",resume:""},d=[{id:Object(m.a)(),img:"raster-images.gif",title:"Raster Images",info:"I built a handful of rasterization converters. Given a RGBA picture, the converters would be able to manually rotate, recolor, or perform a number of transformations on the image.",info2:"These functions are manually performed using a number of matrix transformations and manipulations of the RGB, HSL, or alpha values. ",url:"",repo:"https://github.com/mkiuur/Knights-and-Monsters/tree/master/raster-images"},{id:Object(m.a)(),img:"casterImages.jpg",title:"Ray Casting",info:"The ray caster I built casts rays from the camera into the scene to judge depth and lighting. Combining the components or the casting vectors, the system determines the intersection point of the ray and any object in the scene within view.",info2:"For each pixel in the image, the system generated a ray and then, for each object in the scene, if the ray intersects the object, a pixel color is set. The system is inefficient and is improved upon in later parts of the project.",url:"",repo:"https://github.com/mkiuur/Knights-and-Monsters/tree/master/ray-casting"},{id:Object(m.a)(),img:"sphere-and-plane.gif",title:"Ray Tracing",info:"The ray tracing system takes the intersection point from the ray caster and fires a new ray to each point or directional light source to determine how much the object is lit.",info2:"The system also calculates ambient lighting, diffuse lighting, specular reflection, and refraction based on the material of the object. These are combined in the Blinn Phong model.",url:"",repo:"https://github.com/mkiuur/Knights-and-Monsters/tree/master/ray-tracing"},{id:Object(m.a)(),img:"rubber-ducky-aabb-tree.jpg",title:"Bounding Volume Hierarchies",info:"I built a bounding box system to reduce the time taken to search for intersections during ray tracing. First all the objects are encapsulated in one large object oriented bounding box. ",info2:"Then the bounding box is filled with half the objects in the box recursively, duplicating objects that intersect more than one box. This allows objects to be searched for in O(logn) instead of O(n).",url:"",repo:"https://github.com/mkiuur/Knights-and-Monsters/tree/master/bounding-volume-hierarchy"},{id:Object(m.a)(),img:"bob-subdivision.gif",title:"Meshes",info:"To reduce storage size, I changed the triangle meshes from being stored as individual triangles to being stored as half edges. This takes up 1/3 of the original method.",info2:"I also implemented per-corner normals and a system to recursively subdivide surfaces of a mesh to create a smoother surface.",url:"",repo:"https://github.com/mkiuur/Knights-and-Monsters/tree/master/meshes"},{id:Object(m.a)(),img:"giphy 2.gif",title:"Shader Pipeline",info:"To further reduce space, I split the polygon into equal segments and average the colors to reduce the colors that need to be stored for a particular asset.",info2:"I also created a texture mapping system that would generate perlin noise with a random seed to reduce the amount of mesh complexity required in certain scenarios. I also made sure the shadow of the object reflected the new surface texture.",url:"",repo:"https://github.com/mkiuur/Knights-and-Monsters/tree/master/shader-pipeline"},{id:Object(m.a)(),img:"https://drive.google.com/file/d/1SvJnw3wrdw3bZ7VK9aGkerqgs1Tbqo6h/preview",title:"Kinematics",info:"Using inverse kinematics, I create a rotation and translation matrix for each bone and then recursively multiply the matrices from the origin of the movement to the base of the skeleton.",info2:"The mesh is deformable. Each point on the mesh is attached to multiple bones with weights that can be averaged to create a smooth deformation. ",url:"",repo:"https://github.com/mkiuur/Knights-and-Monsters/tree/master/kinematics"},{id:Object(m.a)(),img:"flag.gif",title:"Mass Spring System",info:"Each point in the mesh is assigned a mass and an acceleration for an initial force and any external forces are added to this. e.g. gravity, wind",info2:"By recursively calculating the effects of other points in the mesh on a single point like a group of connected springs, the total movement can be calculated. The spring constants are assigned to simulate the intended material.",url:"",repo:"https://github.com/mkiuur/Knights-and-Monsters/tree/master/mass-spring-systems"}],g={cta:"mkiuur@gmail.com",btn:"Let's Talk",email:"mkiuur@gmail.com"},p={networks:[{id:Object(m.a)(),name:"linkedin",url:"https://www.linkedin.com/in/margaret-riese/"},{id:Object(m.a)(),name:"github",url:"https://github.com/mkiuur"}]};var b=function(){var e=Object(r.useState)({}),t=e[0],a=e[1],i=Object(r.useState)({}),m=i[0],b=i[1],f=Object(r.useState)([]),E=f[0],j=f[1],v=Object(r.useState)({}),y=v[0],k=v[1],w=Object(r.useState)({}),O=w[0],x=w[1];return Object(r.useEffect)((function(){a(Object.assign({},u)),b(Object.assign({},h)),j(Object(s.a)(d)),k(Object.assign({},g)),x(Object.assign({},p))}),[]),n.a.createElement(l.a,{value:{hero:t,about:m,projects:E,contact:y,footer:O}},n.a.createElement(o.a,null),n.a.createElement(c.a,null))},f=a("jooN");a("q4sD"),a("J9yo"),t.default=function(){var e=f.e.title,t=f.e.lang,a=f.e.description;return n.a.createElement(n.a.Fragment,null,n.a.createElement(i.a,null,n.a.createElement("meta",{charSet:"utf-8"}),n.a.createElement("title",null,e||"Margaret Riese Resume Site"),n.a.createElement("html",{lang:t||"en"}),n.a.createElement("meta",{name:"description",content:a||"Margaret Riese Resume Site"})),n.a.createElement(b,null))}}}]);
//# sourceMappingURL=component---src-pages-knights-and-monsters-js-5eef78b33520e8ec52b4.js.map