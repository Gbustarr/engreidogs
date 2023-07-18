// Inicializar el mapa
var myMap = L.map('map').setView([51.505, -0.09], 13);

// Agregar el mapa base
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
}).addTo(myMap);

// Agregar un marcador
L.marker([51.5, -0.09]).addTo(myMap)
    .bindPopup('¡Hola! Este es un marcador de Leaflet.')
    .openPopup();