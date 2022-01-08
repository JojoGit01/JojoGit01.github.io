
const iAlpa = document.querySelector('#alpha')
const iBeta = document.querySelector('#beta')
const iGamma = document.querySelector('#gamma')

const iX = document.querySelector('#X')
const iY = document.querySelector('#Y')
const iZ = document.querySelector('#Z')
const iGravityX = document.querySelector('#gravityX')
const iGravityY = document.querySelector('#gravityY')
const iGravityZ = document.querySelector('#gravityZ')


function handleOrientation(event) {
    iAlpa.textContent = event.alpha
    iBeta.textContent =  event.beta
    iGamma.textContent = event.gamma
}

function handleMotion(event) {
    iX.textContent = event.acceleration.x
    iY.textContent = event.acceleration.y
    iZ.textContent = event.acceleration.z
    iGravityX.textContent = event.accelerationIncludingGravity.x
    iGravityY.textContent = event.accelerationIncludingGravity.y
    iGravityZ.textContent = event.accelerationIncludingGravity.z
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
