
const ID_DIV_DATA_GET_CURRENT_POSITION = document.querySelector('#data_getCurrentPosition')
const ID_DIV_DATA_WATCH_POSITION = document.querySelector('#data_watchPosition')

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

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

const getDate = (index) => {
  const timestamp = index === 1 ? document.querySelector('#timestamp1') : document.querySelector('#timestamp2')
  const date = new Date();
  timestamp.textContent = `${date.toLocaleTimeString()}`;
  setTimeout(function() {getDate()}, 1000);
}

const successGetCurrentPosition = (pos) => {
  let crd = pos.coords;
  lon1.textContent = `${crd.longitude}`
  lat1.textContent = `${crd.latitude}`
  preci_mesure1.textContent = `${crd.accuracy}`
  vitesse1.textContent = `${crd.speed}`
  getDate(1)
}

const successWatchPosition = (pos) => {
  let crd = pos.coords;
  lon2.textContent = `${crd.longitude}`
  lat2.textContent = `${crd.latitude}`
  preci_mesure2.textContent = `${crd.accuracy}`
  vitesse2.textContent = `${crd.speed}`
  getDate(2)
}

function error(err) {
  console.warn(`ERREUR (${err.code}): ${err.message}`);
}

document.getElementById('btn_getCurrentPosition').addEventListener('click', () => {
  // Get Current Position
  navigator.geolocation.getCurrentPosition(successGetCurrentPosition, error);
})

document.addEventListener("DOMContentLoaded", () => {
  // Watch position
  var survId = navigator.geolocation.watchPosition(successWatchPosition, error, options);
})
