var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

const lon = document.querySelector('#lon')
const lat = document.querySelector('#lat')
const preci_mesure = document.querySelector('#preci_mesure')
const vitesse = document.querySelector('#vitesse')
const timestamp = document.querySelector('#timestamp')


function success(pos) {
  let crd = pos.coords;

  lon.textContent = `${crd.latitude}`
  lat.textContent = `${crd.longitude}`
  preci_mesure.textContent = `${crd.accuracy}`
  vitesse.textContent = `${crd.speed}`
  getDate()
}

const getDate = () => {
  const date = new Date();
  timestamp.textContent = `${date.toLocaleTimeString()}`;
  setTimeout(function() {getDate()}, 1000);
}

function error(err) {
  console.warn(`ERREUR (${err.code}): ${err.message}`);
}

// Watch position
//var survId = navigator.geolocation.watchPosition(success, error, options);

// Get Current Position
navigator.geolocation.getCurrentPosition(success, error, options);