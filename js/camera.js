// function handleFileSelect(evt) {
//     const file = evt.target.files[0]; 
//     const reader = new FileReader();

//     reader.onload = function (e) {

//       const imgElement = document.getElementById('photo');
//       imgElement.src = e.target.result; 
//       imgElement.style.display = 'block'; 
//     };

//        reader.readAsDataURL(file);
//   }


//   document.getElementById('captureButton').addEventListener('click', function () {

//     const fileInput = document.createElement('input');
//     fileInput.type = 'file';
//     fileInput.accept = 'image/*'; 

//     fileInput.addEventListener('change', handleFileSelect);

//     fileInput.click();
//   });



// ----------------------------SEGUNDO CÓDIGO

let btnAvancar = document.querySelector("#btnAvancar");
let confir = document.querySelector(".confirm");
let imageContainer = document.getElementById("imageContainer");
let confirmLabel = document.querySelector(".confirm-label");


let images = [];

document.getElementById('captureButton').addEventListener('click', function () {
  const fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.accept = 'image/*';
  fileInput.multiple = true;

  fileInput.addEventListener('change', handleFileSelect);

  fileInput.click();
});


confir.addEventListener("change", function () {
  if (confir.checked) {
    confirmLabel.style.color = "green";
  } else {
    confirmLabel.style.color = "red";
  }
});

function handleFileSelect(evt) {
  const files = evt.target.files;

  images = [];

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const reader = new FileReader();

    reader.onload = function (e) {
      const imgElement = document.createElement('img');
      imgElement.src = e.target.result;
      imgElement.alt = 'Imagem';
      images.push(imgElement);
      displayImages();
    };

    reader.readAsDataURL(file);
  }
}

function displayImages() {
  while (imageContainer.firstChild) {
    imageContainer.removeChild(imageContainer.firstChild);
  }

  for (let i = 0; i < images.length; i++) {
    imageContainer.appendChild(images[i]);
  }
  if (images.length > 0 && confir.checked) {
    btnAvancar.disabled = false;
  } else {
    btnAvancar.disabled = true;
  }
}

btnAvancar.addEventListener("click", (evento) => {
  evento.preventDefault();

  if (!confir.checked) {
    alert("Você deve confirmar antes de prosseguir.");
  } else if (images.length === 0) {
    alert("Você deve inserir pelo menos uma imagem para prosseguir.");
  } else {
    const nextPageHref = btnAvancar.getAttribute("href");
    window.location.href = nextPageHref;
  }
});

