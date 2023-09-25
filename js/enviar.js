let relatorio =[]
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
      if(confir.id == "proteger6"){  
        let resultado = JSON.parse(localStorage.getItem("relatorio"))
        let dadosTemp = JSON.parse(localStorage.getItem("dadosTemp"))
        if(resultado == null){
            relatorio.push(dadosTemp)
        }
        else{
            relatorio = resultado
            relatorio.push(dadosTemp)
        }
        localStorage.setItem("relatorio", JSON.stringify(relatorio))
        localStorage.removeItem("dadosTemp")
        alert("Registro Enviado com Sucesso.")
        window.location.href="../index.html"
    }
      window.location.href = '../index.html';
    }
  }


  
});

