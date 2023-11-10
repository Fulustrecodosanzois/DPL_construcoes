function obterLocalizacao() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(mostrarLocalizacao);
    } else {
        document.getElementById("demo").innerHTML = "Geolocalização não é suportada pelo seu navegador.";
    }
}

function mostrarLocalizacao(posicao) {
    var latitude = posicao.coords.latitude;
    var longitude = posicao.coords.longitude;

    // Utilizando a API de geocodificação do Google Maps
    var apiKey = 'AIzaSyBjOHNCyjuHDNVTf8Vw9qie3O3sLJ60DpI';
    var url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.results.length > 0) {
                var endereco = data.results[0].formatted_address;
                document.getElementById("demo").innerHTML = `Sua localização atual é: ${endereco}`;
            } else {
                document.getElementById("demo").innerHTML = 'Endereço não encontrado.';
            }
        })
        .catch(error => {
            console.error('Erro ao obter o endereço:', error);
            document.getElementById("demo").innerHTML = 'Erro ao obter o endereço.';
        });
}