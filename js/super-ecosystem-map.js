/* =========================================================
   IAI SUPER ECOSYSTEM MAP
   3D AGI Ecosystem Visualization
========================================================= */

const container = document.getElementById("ecosystem3d")

if(!container) return

const scene = new THREE.Scene()

scene.background = null



/* ========================================
   CAMERA
======================================== */

const camera = new THREE.PerspectiveCamera(

75,
container.clientWidth / container.clientHeight,
0.1,
1000

)

camera.position.set(0,1,6)



/* ========================================
   RENDERER
======================================== */

const renderer = new THREE.WebGLRenderer({

antialias:true,
alpha:true

})

renderer.setSize(container.clientWidth,420)

renderer.setPixelRatio(window.devicePixelRatio)

container.appendChild(renderer.domElement)



/* ========================================
   LIGHT
======================================== */

const light1 = new THREE.PointLight(0xffffff,1)

light1.position.set(5,5,5)

scene.add(light1)

const light2 = new THREE.PointLight(0x00e5ff,.6)

light2.position.set(-5,-5,-5)

scene.add(light2)



/* ========================================
   CORE NODE
======================================== */

const coreGeo = new THREE.SphereGeometry(.5,32,32)

const coreMat = new THREE.MeshStandardMaterial({

color:0x00e5ff,
emissive:0x00e5ff,
emissiveIntensity:.4

})

const core = new THREE.Mesh(coreGeo,coreMat)

scene.add(core)



/* ========================================
   PLATFORMS
======================================== */

const ecosystem = [

{
name:"Flow",
url:"https://flow.iai.one"
},

{
name:"LifeCode",
url:"https://lifecode.iai.one"
},

{
name:"Research",
url:"https://research.iai.one"
},

{
name:"Community",
url:"https://community.iai.one"
},

{
name:"Projects",
url:"https://projects.iai.one"
},

{
name:"Knowledge",
url:"https://knowledge.iai.one"
}

]



/* ========================================
   NODES
======================================== */

const nodes = []

ecosystem.forEach((p,i)=>{

const geo = new THREE.SphereGeometry(.25,16,16)

const mat = new THREE.MeshStandardMaterial({

color:0xffffff

})

const node = new THREE.Mesh(geo,mat)

scene.add(node)

nodes.push({

mesh:node,
data:p,
angle:i*(Math.PI*2/ecosystem.length)

})

})



/* ========================================
   LINES
======================================== */

nodes.forEach(n=>{

const material = new THREE.LineBasicMaterial({

color:0x00e5ff,
opacity:.3,
transparent:true

})

const points = []

points.push(new THREE.Vector3(0,0,0))
points.push(new THREE.Vector3(0,0,0))

const geo = new THREE.BufferGeometry().setFromPoints(points)

const line = new THREE.Line(geo,material)

scene.add(line)

n.line = line

})



/* ========================================
   ORBIT
======================================== */

function animate(){

requestAnimationFrame(animate)

core.rotation.y += .01

nodes.forEach(n=>{

n.angle += .002

const r = 2.5

const x = Math.cos(n.angle)*r
const z = Math.sin(n.angle)*r

n.mesh.position.set(x,0,z)

const positions = n.line.geometry.attributes.position.array

positions[3] = x
positions[5] = z

n.line.geometry.attributes.position.needsUpdate = true

})

renderer.render(scene,camera)

}

animate()



/* ========================================
   CLICK INTERACTION
======================================== */

const raycaster = new THREE.Raycaster()
const mouse = new THREE.Vector2()

window.addEventListener("click",(event)=>{

const rect = renderer.domElement.getBoundingClientRect()

mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1

raycaster.setFromCamera(mouse,camera)

const intersects = raycaster.intersectObjects(nodes.map(n=>n.mesh))

if(intersects.length){

const obj = intersects[0].object

const found = nodes.find(n=>n.mesh === obj)

if(found){

window.open(found.data.url)

}

}

})



/* ========================================
   MOUSE ROTATION
======================================== */

let isDragging = false
let previousMousePosition = {x:0,y:0}

renderer.domElement.addEventListener("mousedown",()=>{

isDragging = true

})

renderer.domElement.addEventListener("mouseup",()=>{

isDragging = false

})

renderer.domElement.addEventListener("mousemove",(event)=>{

if(!isDragging) return

const deltaMove = {

x:event.offsetX - previousMousePosition.x,
y:event.offsetY - previousMousePosition.y

}

scene.rotation.y += deltaMove.x * 0.005

previousMousePosition = {

x:event.offsetX,
y:event.offsetY

}

})
