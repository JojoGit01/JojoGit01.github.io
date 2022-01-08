const start = () => { 

}

const iX = document.querySelector('#x')
const iY = document.querySelector('#y')
const iEvent = document.querySelector('#event')

function onTouch(event) {
    event.preventDefault();
    if (event.touches.length > 1 || (event.type == "touchend" && event.touches.length > 0))
      return;
  
    var newEvt = document.createEvent("MouseEvents");
    var type = null;
    var touch = null;
    switch (event.type) {
      case "touchstart": type = "mousedown"; touch = event.changedTouches[0];
      case "touchmove":  type = "mousemove"; touch = event.changedTouches[0];
      case "touchend":   type = "mouseup"; touch = event.changedTouches[0];
    }
    newEvt.initMouseEvent(type, true, true, event.originalTarget.ownerDocument.defaultView, 0,
        touch.screenX, touch.screenY, touch.clientX, touch.clientY,
        evt.ctrlKey, evt.altKey, evt.shirtKey, evt.metaKey, 0, null);
    event.originalTarget.dispatchEvent(newEvt);
    iX.textContent = event.clientX
    iY.textContent = event.clientY
    iEvent.textContent = event.type
}
  

document.addEventListener("DOMContentLoaded", () =>  {
    document.addEventListener('touchstart', onTouch)
    document.addEventListener('touchmove', onTouch)
    document.addEventListener('touchcancel', onTouch)
    document.addEventListener('touchend', onTouch)
} )