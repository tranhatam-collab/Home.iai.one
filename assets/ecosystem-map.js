/*
=========================================================
IAI SUPER ECOSYSTEM MAP
3D Platform Universe
=========================================================
*/

(function(){

if(typeof THREE==="undefined") return;

const container=document.getElementById("ecosystemMap");

if(!container) return;

/* =========================
SCENE
========================= */

const scene=new THREE.Scene();
scene.background=new THREE.Color(0x05070d);

/* =========================
CAMERA
========================= */

const camera=new THREE.PerspectiveCamera(
60,
container.clientWidth/container.clientHeight,
0.1,
5000
);

camera.position.z=350;

/* =========================
RENDERER
========================= */

const renderer=new THREE.WebGLRenderer({antialias:true});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(container.clientWidth,container.clientHeight);

container.appendChild(renderer.domElement);

/* =========================
LIGHT
========================= */

scene.add(new THREE.AmbientLight(0xffffff,0.8));

const light=new THREE.DirectionalLight(0xffffff,0.6);
light.position.set(200,200,200);
scene.add(light);

/* =========================
PLATFORM DATA
========================= */

const platforms=[

{
name:"IAI.ONE",
url:"https://iai.one",
radius:0
},

{
name:"LifeCode",
url:"https://lifecode.iai.one",
radius:120
},

{
name:"IAI Flow",
url:"https://flow.iai.one",
radius:150
},

{
name:"Nhà Chung",
url:"https://nhachung.org",
radius:180
},

{
name:"Muốn Nói",
url:"https://muonnoi.org",
radius:200
},

{
name:"Đường Sao Tỏa Sáng",
url:"https://duongsaotoasang.com",
radius:220
},

{
name:"Trần Hà Tâm",
url:"https://tranhatam.com",
radius:250
}

];

/* =========================
CREATE NODE
========================= */

const nodes=[];

platforms.forEach((p,i)=>{

const geometry=new THREE.SphereGeometry(8,32,32);

const material=new THREE.MeshStandardMaterial({
color:0xd8bc77
});

const mesh=new THREE.Mesh(geometry,material);

if(i===0){

mesh.position.set(0,0,0);

}else{

const angle=Math.random()*Math.PI*2;

mesh.position.x=Math.cos(angle)*p.radius;
mesh.position.y=Math.sin(angle)*p.radius;
mesh.position.z=(Math.random()-0.5)*80;

}

mesh.userData=p;

scene.add(mesh);
nodes.push(mesh);

});

/* =========================
CONNECTIONS
========================= */

nodes.forEach((n,i)=>{

if(i===0) return;

const points=[
new THREE.Vector3(0,0,0),
n.position
];

const geo=new THREE.BufferGeometry().setFromPoints(points);

const mat=new THREE.LineBasicMaterial({
color:0x888888,
transparent:true,
opacity:0.4
});

const line=new THREE.Line(geo,mat);

scene.add(line);

});

/* =========================
RAYCAST
========================= */

const raycaster=new THREE.Raycaster();
const mouse=new THREE.Vector2();

container.addEventListener("click",(e)=>{

const rect=container.getBoundingClientRect();

mouse.x=((e.clientX-rect.left)/rect.width)*2-1;
mouse.y=-((e.clientY-rect.top)/rect.height)*2+1;

raycaster.setFromCamera(mouse,camera);

const hit=raycaster.intersectObjects(nodes);

if(hit.length){

const node=hit[0].object.userData;

window.open(node.url,"_blank");

}

});

/* =========================
ANIMATION
========================= */

function animate(){

requestAnimationFrame(animate);

scene.rotation.y+=0.0008;

renderer.render(scene,camera);

}

animate();

/* =========================
RESIZE
========================= */

window.addEventListener("resize",()=>{

camera.aspect=container.clientWidth/container.clientHeight;

camera.updateProjectionMatrix();

renderer.setSize(container.clientWidth,container.clientHeight);

});

})();
