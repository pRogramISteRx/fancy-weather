export function addMap(latitude, longitude) {
  mapboxgl.accessToken =
    'pk.eyJ1IjoibW90b2xlbmVjIiwiYSI6ImNrNDdocWxzdDBzaTYzZmxmNTQ5bmJxdXMifQ.niT5vJEczJxol3E69gqgsA';
  const map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [longitude, latitude], // starting position
    zoom: 9, // starting zoom
  });

  // Add zoom and rotation controls to the map.
  map.addControl(new mapboxgl.NavigationControl());
}
