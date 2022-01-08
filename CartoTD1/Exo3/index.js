
const iAlpa = document.querySelector('#alpha')
const iBeta = document.querySelector('#beta')
const iGamma = document.querySelector('#gamma')

const iX = document.querySelector('#X')
const iY = document.querySelector('#Y')
const iZ = document.querySelector('#Z')

function handleOrientation(event) {
    iAlpa.textContent = event.alpha
    iBeta.textContent =  event.beta
    iGamma.textContent = event.gamma
}

function handleMotion(event) {
    iX.textContent = event.accelerationIncludingGravity.x
    iY.textContent = event.accelerationIncludingGravity.y
    iZ.textContent = event.accelerationIncludingGravity.z
}


document.addEventListener("DOMContentLoaded", () => {    
    if(window.DeviceOrientationEvent) {
        window.addEventListener("deviceorientation", handleOrientation, true);
    } else {
        alert("Le naviguateur ne supporte pas l'événement deviceorientation")
    }

    if(window.DeviceMotionEvent) {
        window.addEventListener("devicemotion", handleMotion, true);
    } else {
        alert("Le naviguateur ne supporte pas l'évenement devicemotion")
    }
})
