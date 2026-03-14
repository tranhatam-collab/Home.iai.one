/*
=========================================================
IAI GLOBAL KNOWLEDGE UNIVERSE
3D Knowledge Map for Creators
IAI.ONE AGI Ecosystem
=========================================================
*/

(function(){

if(typeof THREE === "undefined"){
console.warn("Three.js not loaded");
return;
}

const container = document.getElementById("knowledgeUniverse");

if(!container) return;


/* ======================================================
SCENE
====================================================== */

const scene = new THREE.Scene();

scene.fog = new THREE.FogExp2(0x05070d,0.0015);



/* ======================================================
CAMERA
====================================================== */

const camera = new THREE.PerspectiveCamera(
60,
container.clientWidth/container.clientHeight,
0.1,
5000
);

camera.position.z = 300;



/* ======================================================
RENDERER
====================================================== */

const renderer = new THREE.WebGLRenderer({
antialias:true,
alpha:true
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(container.clientWidth,container.clientHeight);

container.appendChild(renderer.domElement);



/* ======================================================
LIGHT
====================================================== */

const ambient = new THREE.AmbientLight(0xffffff,0.8);
scene.add(ambient);

const directional = new THREE.DirectionalLight(0xffffff,0.6);
directional.position.set(200,200,100);
scene.add(directional);



/* ======================================================
STARFIELD
====================================================== */

const starsGeometry = new THREE.BufferGeometry();

const starVertices = [];

for(let i=0;i<20000;i++){

const x = THREE.MathUtils.randFloatSpread(4000);
const y = THREE.MathUtils.randFloatSpread(4000);
const z = THREE.MathUtils.randFloatSpread(4000);

starVertices.push(x,y,z);

}

starsGeometry.setAttribute(
'position',
new THREE.Float32BufferAttribute(starVertices,3)
);

const starsMaterial = new THREE.PointsMaterial({
color:0xffffff,
size:1
});

const starField = new THREE.Points(starsGeometry,starsMaterial);

scene.add(starField);



/* ======================================================
KNOWLEDGE NODE DATA
====================================================== */

const nodes = [

{
name:"LifeCode OS",
url:"https://lifecode.iai.one",
type:"platform",
image:"assets/images/lifecode.png",
position:[-80,30,0]
},

{
name:"IAI Flow",
url:"https://flow.iai.one",
type:"ai-engine",
image:"assets/images/flow.png",
position:[50,40,0]
},

{
name:"Nhà Chung",
url:"https://nhachung.org",
type:"community",
image:"assets/images/nhachung.png",
position:[120,-30,0]
},

{
name:"Duong Sao Toa Sang",
url:"https://duongsaotoasang.com",
type:"knowledge",
image:"assets/images/dsts.png",
position:[-120,-40,0]
},

{
name:"Muốn Nói",
url:"https://muonnoi.org",
type:"network",
image:"assets/images/muonnoi.png",
position:[0,80,0]
},

{
name:"Trần Hà Tâm",
url:"https://tranhatam.com",
type:"creator",
image:"assets/images/tam.png",
position:[0,-100,0]
}

];



/* ======================================================
NODE MATERIAL
====================================================== */

const loader = new THREE.TextureLoader();

const nodeObjects = [];


nodes.forEach(node => {

const texture = loader.load(node.image);

const material = new THREE.SpriteMaterial({
map:texture,
transparent:true
});

const sprite = new THREE.Sprite(material);

sprite.position.set(
node.position[0],
node.position[1],
node.position[2]
);

sprite.scale.set(30,30,1);

sprite.userData = node;

scene.add(sprite);

nodeObjects.push(sprite);

});



/* ======================================================
CONNECTION LINES
====================================================== */

function createLine(a,b){

const material = new THREE.LineBasicMaterial({
color:0x999999,
opacity:0.3,
transparent:true
});

const points = [];

points.push(new THREE.Vector3(...a.position));
points.push(new THREE.Vector3(...b.position));

const geometry = new THREE.BufferGeometry().setFromPoints(points);

const line = new THREE.Line(geometry,material);

scene.add(line);

}

for(let i=0;i<nodeObjects.length;i++){

for(let j=i+1;j<nodeObjects.length;j++){

createLine(nodeObjects[i],nodeObjects[j]);

}

}



/* ======================================================
RAYCAST CLICK
====================================================== */

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

container.addEventListener("click",function(event){

const rect = container.getBoundingClientRect();

mouse.x = ((event.clientX - rect.left)/rect.width)*2 -1;
mouse.y = -((event.clientY - rect.top)/rect.height)*2 +1;

raycaster.setFromCamera(mouse,camera);

const intersects = raycaster.intersectObjects(nodeObjects);

if(intersects.length>0){

const node = intersects[0].object.userData;

if(node.url){

window.open(node.url,"_blank");

}

}

});



/* ======================================================
AUTO ROTATION
====================================================== */

let rotationSpeed = 0.0008;



/* ======================================================
ANIMATE
====================================================== */

function animate(){

requestAnimationFrame(animate);

scene.rotation.y += rotationSpeed;

renderer.render(scene,camera);

}

animate();



/* ======================================================
RESIZE
====================================================== */

window.addEventListener("resize",function(){

camera.aspect = container.clientWidth/container.clientHeight;

camera.updateProjectionMatrix();

renderer.setSize(container.clientWidth,container.clientHeight);

});



})();
