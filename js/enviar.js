let relatorio = []
document.getElementById('btnAvancar2').addEventListener("click", (evento) => {
  evento.preventDefault();

  if (!confir.checked) {
    alert("VOCÊ DEVE CONFIRMAR ANTES DE PROSSEGUIR.");
  } else if (images.length === 0) {
    alert("VOCÊ DEVE INSERIR PELO MENOS UMA IMAGEM PARA PROSSEGUIR.");
  } else {
    const confirmacaoEnvio = confirm("TEM CERTEZA QUE DESEJA ENVIAR RELATÓRIO?");

    if (confirmacaoEnvio) {
      if (confir.id == "proteger6") {
        let resultado = JSON.parse(localStorage.getItem("relatorio"))
        let dadosTemp = JSON.parse(localStorage.getItem("dadosTemp"))
        if (resultado == null) {
          relatorio.push(dadosTemp)
        }
        else {
          relatorio = resultado
          relatorio.push(dadosTemp)
        }
        localStorage.setItem("relatorio", JSON.stringify(relatorio))
        localStorage.removeItem("dadosTemp")
        alert("REGISTRO ENVIADO COM SUCESSO!");
        window.location.href = "../index.html"

      }
      window.location.href = '../index.html';
    }
  }
});









