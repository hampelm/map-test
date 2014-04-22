$(function(){
  var map = L.map('map').setView([42.42, -83.02 ], 13);

  var baseLayer = L.tileLayer('http://a.tiles.mapbox.com/v3/matth.map-zmpggdzn/{z}/{x}/{y}.png');
  map.addLayer(baseLayer);

  function onLocationFound(e) {
    console.log("Found location:", e.latlng.lat, e.latlng.lng);
    alert("Found location: " + e.latlng.lat + " " + e.latlng.lng);

    var radius = e.accuracy / 2;

    L.marker(e.latlng).addTo(map)
        .bindPopup("You are within " + radius + " meters of this point").openPopup();

    L.circle(e.latlng, radius).addTo(map);
  }
  map.on('locationfound', onLocationFound);
  map.on('locationerror', function(error) {
    console.log("Error finding location", error);
    alert(error.message);
  });

  map.locate({
    setView: true,
    maxZoom: 18,
    enableHighAccuracy: true
  });
});
