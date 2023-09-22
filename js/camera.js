function handleFileSelect(evt) {
    const file = evt.target.files[0]; 
    const reader = new FileReader();
  
    reader.onload = function (e) {
      
      const imgElement = document.getElementById('photo');
      imgElement.src = e.target.result; 
      imgElement.style.display = 'block'; 
    };
  
       reader.readAsDataURL(file);
  }
  

  document.getElementById('captureButton').addEventListener('click', function () {
  
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*'; 
  
    fileInput.addEventListener('change', handleFileSelect);

    fileInput.click();
  });
  


// ------------------ BOTÂO DE CONFIRMAÇÂODAS REGRAS

const btnAvancar = document.getElementById('btnAvancar');

btnAvancar.addEventListener('click', function (event) {
  event.preventDefault(); 

  alert('O relatório foi enviado com sucesso!');

  window.location.href = '../index.html';
});
