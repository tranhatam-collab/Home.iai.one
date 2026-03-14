/*
=====================================================
APPLE STYLE APP LAUNCHPAD
=====================================================
*/

(function(){

const container=document.getElementById("appLaunchpad");

if(!container) return;

const apps=[

{
name:"LifeCode",
url:"https://lifecode.iai.one",
icon:"assets/icons/lifecode.png"
},

{
name:"IAI Flow",
url:"https://flow.iai.one",
icon:"assets/icons/flow.png"
},

{
name:"Nhà Chung",
url:"https://nhachung.org",
icon:"assets/icons/nhachung.png"
},

{
name:"Muốn Nói",
url:"https://muonnoi.org",
icon:"assets/icons/muonnoi.png"
},

{
name:"ĐSTS",
url:"https://duongsaotoasang.com",
icon:"assets/icons/dsts.png"
}

];

apps.forEach(app=>{

const el=document.createElement("div");

el.className="app-icon";

el.innerHTML=`<img src="${app.icon}" width="60">`;

el.onclick=()=>window.open(app.url);

container.appendChild(el);

});

})();
