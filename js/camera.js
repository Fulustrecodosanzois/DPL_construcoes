document.addEventListener("DOMContentLoaded", function () {
    // Selecione o botão de captura e o input de arquivo
    const captureButton = document.getElementById("captureButton");
    const cameraInput = document.getElementById("cameraInput");
  
    // Adicione um ouvinte de evento de clique ao botão de captura
    captureButton.addEventListener("click", function () {
      // Verifique se o navegador suporta a API getUserMedia
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        // Solicite permissão para acessar a câmera
        navigator.mediaDevices
          .getUserMedia({ video: true }) // Aqui você pode especificar as opções da câmera (por exemplo, front ou back)
          .then(function (stream) {
            // A câmera está disponível, exiba o stream de vídeo em uma imagem
            const photo = document.getElementById("photo");
            photo.style.display = "block";
            photo.srcObject = stream;
  
            // Oculte o botão de captura e o input de arquivo
            captureButton.style.display = "none";
            cameraInput.style.display = "none";
          })
          .catch(function (error) {
            console.error("Erro ao acessar a câmera: " + error);
          });
      } else {
        console.error("Seu navegador não suporta a API getUserMedia.");
      }
    });
  });
  