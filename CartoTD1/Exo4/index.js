
const iX = document.querySelector('#x')
const iY = document.querySelector('#y')
const iEvent = document.querySelector('#event')

const handleStart = (event) => {
    let x = event.touches[0].clientX
    let y = event.touches[0].clientY
    iX.textContent = x
    iY.textContent = y
    iEvent.textContent = "touchstart"
}
const handleMove = (event) => {
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