
const iX = document.querySelector('#x')
const iY = document.querySelector('#y')
const iEvent = document.querySelector('#event')

const handleStart = (event) => {
    iX.textContent = event.touches[0].clientX
    iY.textContent = event.touches[0].clientY
    iEvent.textContent = "touchstart"
}
const handleMove = (event) => {
    iX.textContent = event.touches[0].clientX
    iY.textContent = event.touches[0].clientY
    iEvent.textContent = "touchemove"
}

const handleCancel = (event) => {
    iEvent.textContent = "touchcancel"
}

const handleEnd = (event) => {
    iEvent.textContent = "touchend"
} 

document.addEventListener("DOMContentLoaded", () =>  {
    document.addEventListener('touchstart', handleStart)
    document.addEventListener('touchmove', handleMove)
    document.addEventListener('touchcancel', handleCancel)
    document.addEventListener('touchend', handleEnd)
} )