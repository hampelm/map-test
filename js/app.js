$(function(){
  var map = L.map('map').setView([42.42, -83.02 ], 13);

  baseLayer = L.tileLayer('http://a.tiles.mapbox.com/v3/matth.map-zmpggdzn/{z}/{x}/{y}.png');
  map.addLayer(baseLayer);

  function onLocationFound(e) {
    var radius = e.accuracy / 2;

    L.marker(e.latlng).addTo(map)
        .bindPopup("You are within " + radius + " meters of this point").openPopup();

    L.circle(e.latlng, radius).addTo(map);
  }
  map.on('locationfound', onLocationFound);
  map.locate({setView: true, maxZoom: 18});


});
