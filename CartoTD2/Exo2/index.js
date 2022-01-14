const optionTerrainLat = 24.886
const optionTerrainLon = -70.268

const createTerrain = (id, lat, lon, zoom) => {
    let layer = new L.StamenTileLayer("terrain");
    let map = new L.Map(id, {
        center: new L.LatLng(lat, lon),
        zoom: zoom,
    });
    map.addLayer(layer)
    return map

}


const CreatePolygonBermude = () => {
    const map = createTerrain("map", optionTerrainLat, optionTerrainLon, 4)
    const triangleCoords = [
        { lat: 18.466, lng: -66.118 },
        { lat: 32.321, lng: -64.757 },
        { lat: 25.774, lng: -80.19 },
    ];
        
    let bermudaTriangle = L.polygon(triangleCoords, {
        color:'red',
        fillColor: '#f03',
        fillOpacity: 0.5
    }) ;
    
    map.addLayer(bermudaTriangle);
}

const CircleWithMyPosition = (pos) => {
    let crd = pos.coords; 
    let map = createTerrain("mapcircle", crd.latitude, crd.longitude, 15.5)
    let circle = new L.circle([crd.latitude, crd.longitude], {radius: crd.accuracy});
    let marker =  L.marker([crd.latitude, crd.longitude]).addTo(map)
        .bindPopup('Ma Position !')
        .openPopup();
    map.addLayer(circle)
    map.addLayer(marker)

}

const NICE_LATITUDE = 43.7005009
const NICE_LONGITUDE = 7.2679183

const MARSEILL_LATITUDE = 43.2804489
const MARSEILL_LONGITUDE = 5.3106088

const CaclulDistanceMarseilleNice = () => {
    let map = createTerrain("mapdistance", NICE_LATITUDE, NICE_LONGITUDE, 7)

    let lagLgns = [ 
        [NICE_LATITUDE, NICE_LONGITUDE],
        [MARSEILL_LATITUDE, MARSEILL_LONGITUDE]
    ]
    
    let posNice = L.marker([NICE_LATITUDE, NICE_LONGITUDE])
    let posMarseille = L.marker([MARSEILL_LATITUDE, MARSEILL_LONGITUDE])
    let from = posNice.getLatLng();
    let to = posMarseille.getLatLng();

    L.polygon(lagLgns, {color: 'red'} ).addTo(map)

    posNice.bindPopup('Nice ' + (from).toString());
    posMarseille.bindPopup('Marseille ' + (to).toString());

    map.addLayer(posNice);
    map.addLayer(posMarseille);
    getDistance(from, to)
}


function getDistance(from, to)
{
    const container = document.getElementById('distance');
    container.innerHTML = ("Nice à Marseille - " + (from.distanceTo(to)).toFixed(0)/1000) + ' km';
}

CreatePolygonBermude()
navigator.geolocation.getCurrentPosition(CircleWithMyPosition);
CaclulDistanceMarseilleNice()