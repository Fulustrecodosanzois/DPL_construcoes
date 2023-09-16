// Função de inicialização
function initMap() {
    // Crie um objeto Autocomplete para o campo de input
    const input = document.getElementById('#local_js');
    const autocomplete = new google.maps.places.Autocomplete(input);

    // Defina o tipo de sugestões (endereços)
    autocomplete.setTypes(['address']);
}
