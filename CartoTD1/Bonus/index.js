const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

const ID_BTN_MAP = document.querySelector('#btn_map')

const lon1 = document.querySelector(`#lon1`)
const lat1 = document.querySelector(`#lat1`)
const preci_mesure1 = document.querySelector(`#preci_mesure1`)
const vitesse1 = document.querySelector(`#vitesse1`)
const timestamp1 = document.querySelector(`#timestamp1`)

const lon2 = document.querySelector(`#lon2`)
const lat2 = document.querySelector(`#lat2`)
const preci_mesure2 = document.querySelector(`#preci_mesure2`)
const vitesse2 = document.querySelector(`#vitesse2`)
const timestamp2 = document.querySelector(`#timestamp2`)

const iAlpa = document.querySelector('#alpha')
const iBeta = document.querySelector('#beta')
const iGamma = document.querySelector('#gamma')

const iX = document.querySelector('#X')
const iY = document.querySelector('#Y')
const iZ = document.querySelector('#Z')
const iGravityX = document.querySelector('#gravityX')
const iGravityY = document.querySelector('#gravityY')
const iGravityZ = document.querySelector('#gravityZ')

const mapPosition = (pos) => {
    let crd = pos.coords

    let data = [
        {
            type: "scattermapbox",
            text: "Ma Position",
            lon: crd.longitude,
            lat: crd.latitude,
            marker: { color: "fuchsia", size: 7 }
        }
    ];

    const layout = {
        dragmode: "zoom",
        mapbox: { style: "open-street-map", center: { lat: crd.latitude, lon: crd.longitude }, zoom: 16 },
        margin: { r: 0, t: 0, b: 0, l: 0 }
    };

	Plotly.newPlot("map", data, layout);
    lon1.textContent = `${crd.longitude}`
    lat1.textContent = `${crd.latitude}`
    preci_mesure1.textContent = `${crd.accuracy}`
    vitesse1.textContent = `${crd.speed}`
    getDate(1)

}

const getDate = (index) => {
    const timestamp = index === 1 ? document.querySelector('#timestamp1') : document.querySelector('#timestamp2')
    const date = new Date();
    timestamp.textContent = `${date.toLocaleTimeString()}`;
    setTimeout(function() {getDate()}, 1000);
}
  
const successWatchPosition = (pos) => {
    let crd = pos.coords;
    lon2.textContent = `${crd.longitude}`
    lat2.textContent = `${crd.latitude}`
    preci_mesure2.textContent = `${crd.accuracy}`
    vitesse2.textContent = `${crd.speed}`
    getDate(2)
}

const error = (err) => {
    console.warn(`ERREUR (${err.code}): ${err.message}`);
}

const createChartOrientation = (event) => {
    let data = [{
        values: [event.alpha, event.beta, event.gamma],
        labels: ["Alpha", "Beta", "Gamma"],
        type: 'pie'
    }]
    let layout = {
        width: 250,
        height: 250
    }
    Plotly.newPlot('chartOrientation', data, layout)
}

const handleOrientation = (event) => {
    iAlpa.textContent = event.alpha
    iBeta.textContent =  event.beta
    iGamma.textContent = event.gamma
    createChartOrientation(event)
}

const handleMotion = (event) => {
    iX.textContent = event.acceleration.x
    iY.textContent = event.acceleration.y
    iZ.textContent = event.acceleration.z
    iGravityX.textContent = event.accelerationIncludingGravity.x
    iGravityY.textContent = event.accelerationIncludingGravity.y
    iGravityZ.textContent = event.accelerationIncludingGravity.z
}

const device = () => {
    if(window.DeviceOrientationEvent) window.addEventListener("deviceorientation", handleOrientation, true);
    else alert("Le naviguateur ne supporte pas l'événement deviceorientation")

    if(window.DeviceMotionEvent) window.addEventListener("devicemotion", handleMotion, true);
    else alert("Le naviguateur ne supporte pas l'évenement devicemotion")
}

const capteur = () => {
    var canvas = document.getElementById('canvasCapteur');
    var ctx = canvas.getContext('2d');
    ctx.rect(10, 10, 100, 100);
    ctx.fillStyle = "blue"
    ctx.fill();
}

document.addEventListener("DOMContentLoaded", () => {
    navigator.geolocation.watchPosition(successWatchPosition, error, options);

    device()
    capteur()

    ID_BTN_MAP.addEventListener('click', () => {
        navigator.geolocation.getCurrentPosition(mapPosition, error);
    })

})