const app = () => {
    
    // Create Scene 
    const scene = new THREE.Scene()
    scene.background = new THREE.Color('#11111f')

    // Create a camera
    const fov = 35
    const aspect = window.innerWidth / window.innerHeight
    const near = 0.1
    const far = 100 
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(0, 0, 10); // Set camera (x, y, z)
    camera.add(new THREE.PointLight(0xffffff));

    // Create the light
    const light = new THREE.DirectionalLight('white', 8);
    light.position.set(10, 10, 10);

    // Texture 
    const loader = new THREE.TextureLoader();
    const IMAGE_LOADER_PRAIRIE = "img/prairie.png"
    const IMAGE_LOADER_PEINTURE = "img/peinture.png"

    // Create the cube
    const geometry = new THREE.BoxGeometry(2, 2, 2)
    const material = new THREE.MeshStandardMaterial({
        color: 0xA0260B,
        emissive: 0x080808,
        map: loader.load(IMAGE_LOADER_PRAIRIE)
    })
    const cube = new THREE.Mesh(geometry, material)

    // Create Particule 
    let particlesGeometry = new THREE.BufferGeometry()
    let particleCount = 1800
    let posArray = new Float32Array(1800 * 3)

    for(let i = 0; i < particleCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * (Math.random() * 20)
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))
    const materialGeometry = new THREE.PointsMaterial({
        size: 0.05,
        map: loader.load(IMAGE_LOADER_PEINTURE),
        transparent: true, 
        color: 'red',
        blending: THREE.AdditiveBlending
    })
    const particlesMesh = new THREE.Points(particlesGeometry, materialGeometry)

    const animateParicles = () => {
        requestAnimationFrame( animateParicles );
        particlesMesh.rotation.x += 0.01
        particlesMesh.rotation.y += 0.01
    }

    // Add object
    scene.add(cube, light, particlesMesh);

    cube.rotation.x = 10;
    cube.rotation.y = 20;

    // create the renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.append(renderer.domElement)

    // renderer
    renderer.render(scene, camera);

    // Animate Object
    const animateObject = (x, y) => {
        requestAnimationFrame( animateObject );
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render( scene, camera );
    };
    
    let boolHandleMotion = false;
    if(!boolHandleMotion) animateObject()

    // Animate Object
    const handleMotion = (event) => {
        boolHandleMotion = true
        let x = event.acceleration.x || 0.01
        let y = event.acceleration.y || 0.01
        animateObject(x, y)
    }

    const animateDeviceObject = () => {
        if(window.DeviceMotionEvent) window.addEventListener("devicemotion", handleMotion, true);
        else alert("Le naviguateur ne supporte pas l'évenement devicemotion")
    }

    animateDeviceObject();

    animateParicles()

}

app()