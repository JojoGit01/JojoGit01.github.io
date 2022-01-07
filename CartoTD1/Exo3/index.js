
const alpa = document.querySelector('#alpa')
const beta = document.querySelector('#beta')
const gamma = document.querySelector('#gamma')

const x = document.querySelector('#X')
const y = document.querySelector('#Y')
const z = document.querySelector('#Z')

function handleOrientation(event) {
    let alpha    = event.alpha;
    let beta     = event.beta;
    let gamma    = event.gamma;
  
    alpa.textContent = alpha
    beta.textContent = alpha
    gamma.textContent = gamma
}

function handleAcceleration(event) {
    let x = event.accelerationIncludingGravity.x;
    let y = event.accelerationIncludingGravity.y;
    let z = event.accelerationIncludingGravity.z;

    x.textContent = x
    y.textContent = y
    z.textContent = z
}
  
if(window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", handleOrientation, false);
} else {
    alert("Le naviguateur ne supporte pas l'événement deviceorientation")
}

if(window.DeviceMotionEvent) {
    window.addEventListener("devicemotion", handleAcceleration, false);
} else {
    alert("Le naviguateur ne supporte pas l'évenement devicemotion")
}