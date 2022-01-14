
const C_LATITUDE = 43.7005009
const C_LONGITUDE = 7.2679183

var map = L.map('map').setView([C_LATITUDE, C_LONGITUDE], 8);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let bornes_l = L.geoJSON(bornes, {
    pointToLayer: (feature, latlng) =>{
        return L.marker(latlng).bindPopup(`Axe : ${feature.properties.AXE}`)
    }
}).addTo(map)