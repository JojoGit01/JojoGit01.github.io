
const iAlpa = document.querySelector('#alpha')
const iBeta = document.querySelector('#beta')
const iGamma = document.querySelector('#gamma')

const iX = document.querySelector('#X')
const iY = document.querySelector('#Y')
const iZ = document.querySelector('#Z')

function handleOrientation(event) {
    let eAlpha    = event.alpha;
    let eBeta     = event.beta;
    let eGamma    = event.gamma;
  
    iAlpa.textContent = eAlpha
    iBeta.textContent =  eBeta
    iGamma.textContent = eGamma
}

function handleAcceleration(event) {
    let eX = event.accelerationIncludingGravity.x;
    let eY = event.accelerationIncludingGravity.y;
    let eZ = event.accelerationIncludingGravity.z;

    iX.textContent = eX
    iY.textContent = eY
    iZ.textContent = eZ
}
  
if(window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", handleOrientation, false);
} else {
    alert("Le naviguateur ne supporte pas l'événement deviceorientation")
}

if(window.DeviceMotionEvent) {
    document.addEventListener("devicemotion", handleAcceleration, false);
} else {
    alert("Le naviguateur ne supporte pas l'évenement devicemotion")
}