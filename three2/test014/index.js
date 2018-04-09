const WIDTH = window.innerWidth
const HEIGHT = window.innerHeight
const aspect = WIDTH / HEIGHT
const canvas = document.getElementById('canvas')
const CELL_NUM = 20

const renderer = new THREE.WebGLRenderer({canvas: canvas})
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(WIDTH, HEIGHT)

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(45, aspect)
camera.position.set(0, 0, 400)

const container = new THREE.Group()
scene.add(container)

const material = new THREE.MeshNormalMaterial()

for(let i = 0; i < CELL_NUM; i++) {
  for(let j = 0; j < CELL_NUM; j++) {
    for(let k = 0; k < CELL_NUM; k++) {
      const mesh = new THREE.Mesh(
        new THREE.BoxGeometry(5, 5, 5),
        material
      )

      mesh.position.set(
        10 * (i - CELL_NUM / 2),
        10 * (j - CELL_NUM / 2),
        10 * (k - CELL_NUM / 2),
      )

      container.add(mesh)
    } 
  } 
} 


const render = () => {
  container.rotation.x += 0.1
  container.rotation.y += 0.1

  renderer.render(scene, camera)
  requestAnimationFrame(render)
}


render()