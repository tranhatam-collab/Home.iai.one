/* =========================================================
   IAI.ONE
   CORE INTERACTION ENGINE
   Language + Ecosystem + Portal UI
========================================================= */


const IAI = {

version: "1.0",

platforms: [

{
name: "IAI Flow",
url: "https://flow.iai.one",
desc: "AGI workflow automation"
},

{
name: "LifeCode",
url: "https://lifecode.iai.one",
desc: "Human life intelligence system"
},

{
name: "Research",
url: "https://research.iai.one",
desc: "Knowledge research platform"
},

{
name: "Community",
url: "https://community.iai.one",
desc: "Global community network"
},

{
name: "Projects",
url: "https://projects.iai.one",
desc: "Innovation and ecosystem projects"
}

]

}



/* =========================================================
   LANGUAGE SYSTEM
========================================================= */


function setLang(lang){

localStorage.setItem("iai_lang", lang)
location.reload()

}


function loadLang(){

const lang = localStorage.getItem("iai_lang") || "vi"

let dict = LANG_VI

if(lang === "en") dict = LANG_EN

document.querySelectorAll("[data-lang]").forEach(el => {

const key = el.dataset.lang

if(dict[key]){

el.innerText = dict[key]

}

})

document.documentElement.lang = lang

const labelText = lang === "vi" ? "🇻🇳 Tiếng Việt" : "🇺🇸 English"
const switchAria = lang === "vi"
  ? "Chuyển sang tiếng Anh / Switch to English"
  : "Chuyển sang tiếng Việt / Switch to Vietnamese"

document.querySelectorAll("[data-lang-label]").forEach(el => {
  el.textContent = labelText
})

document.querySelectorAll("[data-lang-toggle]").forEach(btn => {
  btn.setAttribute("aria-label", switchAria)
  if(!btn.dataset.langBound){
    btn.dataset.langBound = "true"
    btn.addEventListener("click", () => {
      const current = localStorage.getItem("iai_lang") || "vi"
      setLang(current === "vi" ? "en" : "vi")
    })
  }
})

}



/* =========================================================
   SCROLL ANIMATION
========================================================= */


function initScrollAnimation(){

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("visible")

}

})

},{ threshold:.15 })


document.querySelectorAll(".section").forEach(section => {

observer.observe(section)

})

}



/* =========================================================
   ECOSYSTEM ANIMATION
========================================================= */


function ecosystemOrbit(){

const nodes = document.querySelectorAll(".ecosystem-map .node")

nodes.forEach((node,i)=>{

let angle = i * 72

setInterval(()=>{

angle += 0.2

const radius = 150

const x = Math.cos(angle*Math.PI/180)*radius
const y = Math.sin(angle*Math.PI/180)*radius

node.style.transform =
`translate(${x}px, ${y}px)`

},50)

})

}



/* =========================================================
   APP LAUNCHER
========================================================= */


function renderLauncher(){

const container = document.querySelector(".apps")

if(!container) return

container.innerHTML = ""

IAI.platforms.forEach(p=>{

const card = document.createElement("a")

card.className = "app-card"

card.href = p.url

card.innerHTML = `

<h3>${p.name}</h3>
<p>${p.desc}</p>

`

container.appendChild(card)

})

}



/* =========================================================
   SUBDOMAIN DISCOVERY
========================================================= */


async function discoverPlatforms(){

const grid = document.querySelector(".apps")

if(!grid) return

IAI.platforms.forEach(p=>{

fetch(p.url,{mode:"no-cors"})
.then(()=>{

console.log("active:",p.url)

})
.catch(()=>{

console.log("offline:",p.url)

})

})

}



/* =========================================================
   HERO PARALLAX
========================================================= */


function heroParallax(){

const hero = document.querySelector(".hero")

window.addEventListener("scroll",()=>{

const y = window.scrollY * 0.4

hero.style.backgroundPosition = `center ${y}px`

})

}



/* =========================================================
   SMOOTH SCROLL
========================================================= */


function smoothScroll(){

document.querySelectorAll("a[href^='#']").forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault()

const target = document.querySelector(this.getAttribute("href"))

if(target){

target.scrollIntoView({

behavior:"smooth"

})

}

})

})

}



/* =========================================================
   INIT
========================================================= */


document.addEventListener("DOMContentLoaded",()=>{

loadLang()

initScrollAnimation()

renderLauncher()

discoverPlatforms()

smoothScroll()

heroParallax()

if(document.querySelector(".ecosystem-map")){

ecosystemOrbit()

}

})
