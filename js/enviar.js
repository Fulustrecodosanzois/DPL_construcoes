document.getElementById('btnAvancar2').addEventListener("click", (evento) => {
  evento.preventDefault();

  if (!confir.checked) {
    alert("Você deve confirmar antes de prosseguir.");
  } else if (images.length === 0) {
    alert("Você deve inserir pelo menos uma imagem para prosseguir.");
  } else {
    const confirmacaoEnvio = confirm("Tem certeza de que deseja enviar o relatório?");

    if (confirmacaoEnvio) {
      alert("Envio bem-sucedido!");
      window.location.href = '../index.html';
    }
  }


  
});
