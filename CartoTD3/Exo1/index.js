var canvas = document.getElementById('mycanvas');
var myimg = document.getElementById('scream');

var ctx = canvas.getContext('2d');

const COLOR_RED = "#ff2d00"
const COLOR_BROWN = "#480e02"
const COLOR_RED_2 = "#543e3a"
const COLOR_RED_3 = "#e5654e"

const DrawTriangle = () => {
    ctx.lineWidth="15";
    ctx.strokeStyle= COLOR_BROWN;
    ctx.fillStyle = COLOR_RED
    ctx.beginPath(); 
    ctx.moveTo(90,290);
    ctx.lineTo(360,290);
    ctx.lineTo(220,160);
    ctx.closePath(); 
    ctx.stroke();
    ctx.fill()
}

const DrawRectangle = () => {
    ctx.beginPath();
    ctx.lineWidth = "5";
    ctx.strokeStyle = COLOR_BROWN;
    ctx.fillStyle = COLOR_RED_2;
    ctx.rect(85, 300, 280, 160); 
    ctx.fillRect(85, 300, 280, 165);
    ctx.stroke();
}

const DrawDoor = () => {
    ctx.beginPath();
    ctx.lineWidth = "5";
    ctx.strokeStyle = COLOR_BROWN;
    ctx.fillStyle = COLOR_RED_3;
    ctx.rect(115, 313, 60, 140); 
    ctx.fillRect(115, 313, 60, 140); 
    ctx.stroke();
}

const DrawSoleil = () => {
    ctx.fillStyle = "#f5ff00";
    ctx.beginPath();
    ctx.arc(850, 80, 65, 2*Math.PI, 0);
    ctx.fill();
}

DrawTriangle()
DrawRectangle()
DrawDoor()
DrawSoleil()


// For Svg
const ID_SOLEIL = "soleil"
const ID_CIEL = "ciel"
const ID_DOOR = "door"

let colorCiel = "blue"

document.getElementById(ID_SOLEIL).addEventListener('click', () => {
    let rectCiel = document.getElementById(ID_CIEL)
    colorCiel = colorCiel == "blue" ? "grey" : "blue"
    rectCiel.style.setProperty("fill", colorCiel)
})

const DOOR = document.getElementById(ID_DOOR)
const randColor = () => "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();


DOOR.addEventListener('mouseover', () => {
    DOOR.style.setProperty("fill", randColor())
})