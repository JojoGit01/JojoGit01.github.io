window.addEventListener("deviceorientation", handleOrientation, true);

const alpa = document.querySelector('#alpa')
const beta = document.querySelector('#beta')
const gamma = document.querySelector('#gamma')
const rotation = document.querySelector('#rotation')
const acceleration = document.querySelector('#acceleration')

function handleOrientation(event) {
    var alpha    = event.alpha;
    var beta     = event.beta;
    var gamma    = event.gamma;
  
    var rotationRate = deviceMotionEvent.rotationRate;
    var acceleration = event.acceleration;

    alpa.textContent = alpha
    beta.textContent = alpha
    gamma.textContent = gamma

    rotation.textContent = rotationRate
    acceleration.textContent = acceleration

}
  