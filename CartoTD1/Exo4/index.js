const start = () => { 

}

const iEvent = document.querySelector('#event')

const getPosClicked = (event) => {
    const iX = document.querySelector('#x')
    const iY = document.querySelector('#y')

    iX.textContent = event.pageX
    iY.textContent = event.pageY
}

const onTouch = (event) => {
    event.preventDefault();

    switch (event.type) {
        case "touchestart": iEvent.textContent = "touchestart"
        case "touchmove": iEvent.textContent = "touchmove"
        case "touchcancel": iEvent.textContent = "touchcancel"
        case "touchend": iEvent.textContent = "touchend"
    }
}

document.addEventListener("DOMContentLoaded", () =>  {

    document.addEventListener('touchend', getPosClicked)

    document.addEventListener('touchstart', onTouch)
    document.addEventListener('touchmove', onTouch)
    document.addEventListener('touchcancel', onTouch)
    document.addEventListener('touchend', onTouch)
} )