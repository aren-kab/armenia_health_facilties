mapboxgl.accessToken = 'pk.eyJ1IjoiYXJlbi1rYWIiLCJhIjoiY2tsMTJhejk3MHhxazJxcW5sbGo0d3R3bSJ9.iuLNkGjRTZohqeqRzq-r7g';

var map = new mapboxgl.Map({
  container: 'mapContainer', // container ID
  style: 'mapbox://styles/mapbox/light-v10', // style URL
  center: [45.12267497723875, 40.27928204045164], // starting position [lng, lat]
  zoom: 7.5 // starting zoom
});

map.on('style.load', function () {
  //add geojson
  map.addSource('arm_health_facilities', {
     type: 'geojson',
     data: '/data/arm_health_facilities.geojson'
   });

 map.addLayer({
   'id': 'arm_health_facilities',
   'type': 'fill',
   'source': 'arm_health_facilities',
   'layout': {},
   'paint': {
      'fill-color': {
        property: 'Facilities_per_10K', // this will be your density property form you geojson
        stops: [
          [1, ' #ffd9b3'],
          [1.5, '#ffbf80'],
          [2, '#ffa64d'],
          [3, '#ff8c1a'],
          [4, '#e67300'],
          [5, '#cc6600'],
        ]
      },
      'fill-outline-color': 'black',
      'fill-opacity': .8
    }
  });


});
