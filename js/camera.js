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


























// // Importar as funções necessárias do Firebase
// import { app } from "./config-firebase.js";
// import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-storage.js";
// import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";

// let btnAvancar = document.querySelector("#btnAvancar");
// let confir = document.querySelector(".confirm");
// let imageContainer = document.getElementById("imageContainer");
// let confirmLabel = document.querySelector(".confirm-label");

// let images = [];

// document.getElementById('captureButton').addEventListener('click', function () {
//   const fileInput = document.createElement('input');
//   fileInput.type = 'file';
//   fileInput.accept = 'image/*';
//   fileInput.multiple = true;

//   fileInput.addEventListener('change', handleFileSelect);

//   fileInput.click();
// });

// confir.addEventListener("change", function () {
//   if (confir.checked) {
//     confirmLabel.style.color = "green";
//   } else {
//     confirmLabel.style.color = "red";
//   }
// });

// function handleFileSelect(evt) {
//   const files = evt.target.files;

//   images = [];

//   for (let i = 0; i < files.length; i++) {
//     const file = files[i];
//     const reader = new FileReader();

//     reader.onload = function (e) {
//       const imgElement = document.createElement('img');
//       imgElement.src = e.target.result;
//       imgElement.alt = 'Imagem';
//       images.push({ file, imgElement });
//       displayImages();
//     };

//     reader.readAsDataURL(file);
//   }
// }

// function displayImages() {
//   while (imageContainer.firstChild) {
//     imageContainer.removeChild(imageContainer.firstChild);
//   }

//   for (let i = 0; i < images.length; i++) {
//     imageContainer.appendChild(images[i].imgElement);
//   }
//   if (images.length > 0 && confir.checked) {
//     btnAvancar.disabled = false;
//   } else {
//     btnAvancar.disabled = true;
//   }
// }

// btnAvancar.addEventListener("click", async (evento) => {
//   evento.preventDefault();

//   if (!confir.checked) {
//     alert("Você deve confirmar antes de prosseguir.");
//   } else if (images.length === 0) {
//     alert("Você deve inserir pelo menos uma imagem para prosseguir.");
//   } else {
//     try {
//       const storage = getStorage(app);
//       const storageRef = ref(storage, 'gs://dplconstrucao-cfd1a.appspot.com'); // Substitua 'seu-caminho-no-storage' pelo caminho desejado no seu storage

//       for (let i = 0; i < images.length; i++) {
//         const { file } = images[i];
//         const fileRef = ref(storageRef, file.name);
//         await uploadBytes(fileRef, file);
//         const downloadURL = await getDownloadURL(fileRef);

//         // Agora você pode salvar o downloadURL no Firestore se necessário
//         // Exemplo:
//         // const docRef = await addDoc(collection(db, "imagens"), { downloadURL });
//         // console.log("Imagem enviada para o Firebase:", downloadURL);
//       }

//       // Redirecionar para a próxima página após o envio bem-sucedido
//       const nextPageHref = btnAvancar.getAttribute("href");
//       window.location.href = nextPageHref;
//     } catch (error) {
//       console.error("Erro ao enviar imagem para o Firebase:", error);
//     }
//   }
// });








































// // Importar as funções necessárias do Firebase
// import { app } from "./config-firebase.js";
// import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-storage.js";
// import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";

// let btnAvancar = document.querySelector("#btnAvancar");
// let confir = document.querySelector(".confirm");
// let imageContainer = document.getElementById("imageContainer");
// let confirmLabel = document.querySelector(".confirm-label");

// let images = [];

// document.getElementById('captureButton').addEventListener('click', function () {
//   const fileInput = document.createElement('input');
//   fileInput.type = 'file';
//   fileInput.accept = 'image/*';
//   fileInput.multiple = true;

//   fileInput.addEventListener('change', handleFileSelect);

//   fileInput.click();
// });

// confir.addEventListener("change", function () {
//   if (confir.checked) {
//     confirmLabel.style.color = "green";
//   } else {
//     confirmLabel.style.color = "red";
//   }
// });

// function handleFileSelect(evt) {
//   const files = evt.target.files;

//   images = [];

//   for (let i = 0; i < files.length; i++) {
//     const file = files[i];
//     const reader = new FileReader();

//     reader.onload = function (e) {
//       const imgElement = document.createElement('img');
//       imgElement.src = e.target.result;
//       imgElement.alt = 'Imagem';
//       images.push({ file, imgElement });
//       displayImages();
//     };

//     reader.readAsDataURL(file);
//   }
// }

// function displayImages() {
//   while (imageContainer.firstChild) {
//     imageContainer.removeChild(imageContainer.firstChild);
//   }

//   for (let i = 0; i < images.length; i++) {
//     imageContainer.appendChild(images[i].imgElement);
//   }
//   if (images.length > 0 && confir.checked) {
//     btnAvancar.disabled = false;
//   } else {
//     btnAvancar.disabled = true;
//   }
// }

// btnAvancar.addEventListener("click", async (evento) => {
//   evento.preventDefault();

//   if (!confir.checked) {
//     alert("Você deve confirmar antes de prosseguir.");
//   } else if (images.length === 0) {
//     alert("Você deve inserir pelo menos uma imagem para prosseguir.");
//   } else {
//     try {
//       const storage = getStorage(app);
//       const storageRef = ref(storage, 'gs://dplconstrucao-cfd1a.appspot.com'); // Substitua 'seu-caminho-no-storage' pelo caminho desejado no seu storage

//       for (let i = 0; i < images.length; i++) {
//         const { file } = images[i];
//         const fileRef = ref(storageRef, file.name);
//         await uploadBytes(fileRef, file);
//         const downloadURL = await getDownloadURL(fileRef);

//         // Agora você pode salvar o downloadURL no Firestore se necessário
//         // Exemplo:
//         // const docRef = await addDoc(collection(db, "imagens"), { downloadURL });
//         // console.log("Imagem enviada para o Firebase:", downloadURL);
//       }

//       // Verificar se é a sexta página (proteger6.html)
//       if (window.location.href.includes("proteger6.html")) {
//         const confirmEnvio = confirm("Deseja realmente enviar as imagens para o Firebase?");
//         if (confirmEnvio) {
//           alert("Envio bem-sucedido! Redirecionando para a página inicial.");
//           // Redirecionar para a página inicial após o envio bem-sucedido
//           window.location.href = "../index.html";
//         }
//       } else {
//         // Redirecionar para a próxima página após o envio bem-sucedido
//         const nextPageHref = btnAvancar.getAttribute("href");
//         window.location.href = nextPageHref;
//       }
//     } catch (error) {
//       console.error("Erro ao enviar imagem para o Firebase:", error);
//     }
//   }
// });































//=======================================================================================





// Importar as funções necessárias do Firebase
import { app } from "./config-firebase.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-storage.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";

let btnAvancar = document.querySelector("#btnAvancar");
let confir = document.querySelector(".confirm");
let imageContainer = document.getElementById("imageContainer");
let confirmLabel = document.querySelector(".confirm-label");

let images = [];
let temporaryImageName = "";
let temporaryImageStorage = [];

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
      images.push({ file, imgElement });
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
    imageContainer.appendChild(images[i].imgElement);
  }
  if (images.length > 0 && confir.checked) {
    btnAvancar.disabled = false;
  } else {
    btnAvancar.disabled = true;
  }
}

btnAvancar.addEventListener("click", async (evento) => {
  evento.preventDefault();

  if (!confir.checked) {
    alert("Você deve confirmar antes de prosseguir.");
  } else if (images.length === 0) {
    alert("Você deve inserir pelo menos uma imagem para prosseguir.");
  } else {
    // Armazenar temporariamente as imagens
    temporaryImageStorage.push({ temporaryImageName, images });

    // Limpar as imagens para a próxima página
    images = [];
    displayImages();

    // Verificar se é a sexta página (proteger6.html)
    if (window.location.href.includes("proteger6.html")) {
      try {
        const storage = getStorage(app);
        const storageRef = ref(storage, 'gs://dplconstrucao-cfd1a.appspot.com'); // Referência ao storage principal

        for (let i = 0; i < temporaryImageStorage.length; i++) {
          const { temporaryImageName, images } = temporaryImageStorage[i];
          const folderRef = ref(storageRef, `${temporaryImageName}`); // Referência à pasta com nome da página

          for (let j = 0; j < images.length; j++) {
            const { file } = images[j];
            const fileRef = ref(folderRef, `${temporaryImageName}_${j}_${file.name}`);
            await uploadBytes(fileRef, file);
            const downloadURL = await getDownloadURL(fileRef);

            // Agora você pode salvar o downloadURL no Firestore se necessário
            // Exemplo:
            // const docRef = await addDoc(collection(db, "imagens"), { downloadURL });
            // console.log("Imagem enviada para o Firebase:", downloadURL);
          }
        }

        const confirmEnvio = confirm("DESEJA REALMENTE ENVIAR O REGISTRO?");
        if (confirmEnvio) {
          alert("ENVIO BEM-SUCEDIDO! REDIRECIONANDO PARA A PÁGINA INICIAL!");
          // Redirecionar para a página inicial após o envio bem-sucedido
          window.location.href = "../index.html";
        }
      } catch (error) {
        console.error("Erro ao enviar imagem para o Firebase:", error);
      }
    } else {
      // Redirecionar para a próxima página após o envio bem-sucedido
      const nextPageHref = btnAvancar.getAttribute("href");
      window.location.href = nextPageHref;
    }
  }
});

// Este código deve ser colocado em cada página para obter o nome da imagem temporária da tag h4
const h4Element = document.querySelector("h4");
if (h4Element) {
  temporaryImageName = h4Element.innerText;
}
