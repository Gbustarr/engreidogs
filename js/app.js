// Inicializar el mapa
var myMap = L.map('map').locate({ setView: true, maxZoom: 16 });
var coordenadasMascotas = [];

// Agregar el mapa base
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
}).addTo(myMap);

if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(function (position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;

        console.log('Latitude:', latitude);
        console.log('Longitude:', longitude);


        

        // Obtén el elemento padre donde deseas agregar el div
        var parentElement = document.getElementById('mascotas');

        const nombres = ['Kira', "Potatsio", "Copi-Copi", "Elemento", "Adjetivo", "Mente en blanco"];
        const tipo = ["Gato", "Perro"];
        

        for (i = 0; i <= 5; i++) {
            // Crea un nuevo elemento div
            var newDiv = document.createElement('div');
            newDiv.classList.add('row');
            newDiv.style.backgroundColor = 'aliceblue';

            // Crea los elementos div y p con su contenido correspondiente
            var col1 = document.createElement('div');
            col1.classList.add('col', 's4');

            var string1 = '<p>';
            string1 += nombres[i];
            string1 += '</p>';

            col1.innerHTML = string1;
            console.log(string1);

            var col2 = document.createElement('div');
            col2.classList.add('col', 's4');

            var string2 = '<p>';
            if (i % 2 == 0) {
                string2 += tipo[0];
            } else {
                string2 += tipo[1];
            }
            string2 += '</p>';

            col2.innerHTML = string2;

            var col3 = document.createElement('div');
            col3.classList.add('col', 's4');

            var string3 = '<p><a class="btn" ';
            string3 += 'onclick="localizar(';
            string3 += i;
            string3 += ')" href="#">Localizar</a></p>';

            col3.innerHTML =  string3;
            console.log(string3);

            // Agrega los elementos hijos al div principal
            newDiv.appendChild(col1);
            newDiv.appendChild(col2);
            newDiv.appendChild(col3);

            // Agrega el div al elemento padre
            parentElement.appendChild(newDiv);

            //Generando coordenada aleatoria
            var numeroAleatorio = (Math.random() * (0.01)) - 0.005;
            var nuevaLatitude = latitude + numeroAleatorio;

            var numeroAleatorio2 = (Math.random() * (0.01)) - 0.005;
            var nuevaLongitude = longitude + numeroAleatorio2;

            coordenadasMascotas.push([nuevaLatitude,nuevaLongitude]);

        }
        // Crea un nuevo elemento div
        console.log(coordenadasMascotas);


    });
} else {
    console.log('Geolocation is not supported by this browser.');
}

function localizar(i){
    L.marker(coordenadasMascotas[i]).addTo(myMap)
            .bindPopup('¡Hola! Estoy Aqui!.')
            .openPopup();
}


