// Jojo -_-

// Create Scene 
const scene = new THREE.Scene()
scene.background = new THREE.Color('#11111f')

// Create a camera
const fov = 15
const aspect = window.innerWidth / window.innerHeight
const near = 0.1
const far = 100 
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.set(0, 0, 10); // Set camera (x, y, z)
camera.add(new THREE.PointLight(0xffffff));

// Create the light
const light = new THREE.DirectionalLight('white', 8);
light.position.set(10, 10, 10);

// create the renderer
const renderer = new THREE.WebGLRenderer({
    antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio)

// renderer
document.body.append(renderer.domElement)

// Texture 
const loader = new THREE.TextureLoader();

// Controls
const controls = new THREE.OrbitControls( camera, renderer.domElement );
controls.update();

// Create Sphere
const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(1, 32, 16),
    new THREE.MeshBasicMaterial({
        map: loader.load('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/4013c234-b843-4331-84cd-8a86d940d26f/dcrbmun-38493001-d0cc-4bd6-9acb-2bf1109b488b.jpg')
    })
)

const convertLatLonToCartesien = ( lat, lon, radius) => {
    var phi   = (90-lat)*(Math.PI/180);
    var theta = (lon+180)*(Math.PI/180);

    let x = -(radius * Math.sin(phi)*Math.cos(theta));
    let z = (radius * Math.sin(phi)*Math.sin(theta));
    let y = (radius * Math.cos(phi));
  
    return {x: x, y: y, z: z};
}

const createMarker = (cartesien, flagImg) => {
    const marker = new THREE.Mesh(
        new THREE.SphereGeometry( 0.03, 32, 16 ),
        new THREE.MeshBasicMaterial( { map:  loader.load(flagImg) } )
    )
    marker.position.x = cartesien.x
    marker.position.y = cartesien.y
    marker.position.z = cartesien.z
    sphere.add( marker );
}

const getModel3DSoldier = (cartesien) => {
    let loader3D = new THREE.GLTFLoader()
    let soldier3D = new THREE.Object3D();
    loader3D.load('Models/soldier/scene.gltf', (gltf) => {
        soldier3D = gltf.scene
        soldier3D.scale.set(0.001, 0.001, 0.001);
        soldier3D.position.x = cartesien.x
        soldier3D.position.y = cartesien.y + 0.1
        soldier3D.position.z = cartesien.z
        sphere.add(soldier3D)
    })
}

const successGetCurrentPosition = (pos) => {
    let crd = pos.coords;  
    getModel3DSoldier( convertLatLonToCartesien(crd.latitude, crd.longitude, 1) )
}

const render = () => {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
}

const getDataCountries = () => {
    const URL = "https://restcountries.com/v3.1/all"
    fetch(URL)  
        .then( (data) => data.json())
        .then( (data) => {
            data.forEach(elm => createMarker(convertLatLonToCartesien(elm.latlng[0], elm.latlng[1], 1), elm.flags.png) )
        })
}

const app = () => {
    navigator.geolocation.getCurrentPosition(successGetCurrentPosition);
    scene.add(sphere, light); 
    render(); 

    getDataCountries()
}

app()