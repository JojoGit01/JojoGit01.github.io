const lon1 = document.querySelector(`#lon1`)
const lat1 = document.querySelector(`#lat1`)

const CENTRE_VILLE_LATITUDE = 43.7005009
const CENTRE_VILLE_LONGITUDE = 7.2679183

var map = L.map('map').setView([CENTRE_VILLE_LATITUDE, CENTRE_VILLE_LONGITUDE], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const successGetCurrentPosition = (pos) => {
    let crd = pos.coords; 
    lon1.textContent = `${crd.longitude}`
    lat1.textContent = `${crd.latitude}`

    map.setView(new L.LatLng(crd.latitude, crd.longitude), 8);

    L.marker([crd.latitude, crd.longitude]).addTo(map)
        .bindPopup('Ma Position !')
        .openPopup();
}

const ShowMarkerCenterCity = () => {
    L.marker([CENTRE_VILLE_LATITUDE, CENTRE_VILLE_LONGITUDE]).addTo(map)
        .bindPopup('Marker Centre ville Nice !')
        .openPopup();
}

const error = (err) => {
    console.warn(`ERREUR (${err.code}): ${err.message}`);
}

document.addEventListener("DOMContentLoaded", () => {
    navigator.geolocation.getCurrentPosition(successGetCurrentPosition, error);
    ShowMarkerCenterCity()
})