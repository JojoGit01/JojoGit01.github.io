
const ialpa = document.querySelector('#alpa')
const ibeta = document.querySelector('#beta')
const igamma = document.querySelector('#gamma')

const x = document.querySelector('#X')
const y = document.querySelector('#Y')
const z = document.querySelector('#Z')

function handleOrientation(event) {
    let alpha    = event.alpha;
    let beta     = event.beta;
    let gamma    = event.gamma;
  
    ialpa.textContent = alpha
    ibeta.textContent =  beta
    igamma.textContent = gamma
}

function handleAcceleration(event) {

    alert("zeaz")


    let ex = event.accelerationIncludingGravity.x;
    let ey = event.accelerationIncludingGravity.y;
    let ez = event.accelerationIncludingGravity.z;

    x.textContent = ex
    y.textContent = ey
    z.textContent = ez
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