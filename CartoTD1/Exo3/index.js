
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
  
    iAlpa.innerHTML = eAlpha
    iBeta.innerHTML =  eBeta
    iGamma.innerHTML = eGamma
}

function handleAcceleration(event) {
    let eX = event.accelerationIncludingGravity.x;
    let eY = event.accelerationIncludingGravity.y;
    let eZ = event.accelerationIncludingGravity.z;

    iX.innerHTML = eX
    iY.innerHTML = eY
    iZ.innerHTML = eZ
}
  
if(window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", handleOrientation, true);
} else {
    alert("Le naviguateur ne supporte pas l'événement deviceorientation")
}

if(window.DeviceMotionEvent) {
    document.addEventListener("devicemotion", handleAcceleration, true);
} else {
    alert("Le naviguateur ne supporte pas l'évenement devicemotion")
}