
import { app,db } from "./config-firebase.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-storage.js";
import { addDoc, collection} from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";

let btnAvancar = document.querySelector("#btnAvancar");
let confir = document.querySelector(".confirm");
let imageContainer = document.getElementById("imageContainer");

let loader = document.querySelector("#loader")
let btnCamera = document.querySelector("#btnCamera")
let nomeImagem = ""

loader.classList.replace("d-block","d-none")// para desabilitar o loader


let images = [];
let temporaryImageName = "";
let temporaryImageStorage = [];

let timestamp = new Date().getTime() // para poder ser utilizado como nome da imagem ao salvar no cloud storage.

//criando um objeto para armazenar os dados da imagem
let dadosImagem = {
  nome:"",
  url:""
}

dadosImagem.nome = timestamp// pegando o novo nome da imagem

const storage = getStorage(app);
const storageRef = ref(storage, `DPLimagem/${timestamp}`);// função ref() recebe a instância de armazenamento storage e uma string que representa o caminho para o local desejado, seria o nome do arquivo lá no storage. Estou salvando dentro de uma pasta chamado 'imagem/' e em seguida


btnCamera.addEventListener('change', handleFileSelect)

//Essa função irá veirificar em qual página o usuário está atualmente, e irá criar um nome único para poder utilizar no localStorage, para poder salvar os dados das imagens localmente e depois salvar no firestore
function verificaPagina(){
  
  if(btnCamera.classList.contains("desligar")){
      nomeImagem = "desligar"

  }else if(btnCamera.classList.contains("bloquear")){
    nomeImagem = "bloquear"
  }
    else if(btnCamera.classList.contains("sinalizar")){
     nomeImagem = "sinalizar"
    }
      else if(btnCamera.classList.contains("testar")){
        nomeImagem = "testar"
      }
        else if(btnCamera.classList.contains("aterrar")){
          nomeImagem = "aterrar"
        }
          else if(btnCamera.classList.contains("proteger")){
            nomeImagem = "proteger"
          }

}

// Esta função irá pegar a imagem e fazer com que ela seja exibida na página
function handleFileSelect(evt) {
  const files = evt.target.files;

  verificaPagina()

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


//Esta função irá simplesmente adicionar as imagens uma após a outra na página
function displayImages() {
  while (imageContainer.firstChild) {
    imageContainer.removeChild(imageContainer.firstChild);
  }

  for (let i = 0; i < images.length; i++) {
    imageContainer.appendChild(images[i].imgElement);
  }
  
}

// Validar os campos e inserir a imagem no Firebase Storage
btnAvancar.addEventListener("click", async (evento) => {
  evento.preventDefault();

  if (!confir.checked) {
    alert("VOCÊ DEVE CONFIRMAR ANTES DE PROSSEGUIR.");
  } else if (images.length === 0) {
    alert("VOCÊ DEVE INSERIR PELO MENOS UMA IMAGEM PARA PROSSEGUIR.");
  } else{
    // Armazenar temporariamente as imagens
    temporaryImageStorage.push({ temporaryImageName, images });
    
    store()// Armazenando no Firestore Storage

    

  }
});


function store(){
  loader.classList.replace("d-none","d-block")
    try {  
        // Fazendo o upload da imagem para o Storage
        uploadBytes(storageRef, btnCamera.files[0]).then((resultado) => {
            //console.log('Upload realizado', resultado);

            // Obtendo a URL de download da imagem
            getDownloadURL(resultado.ref)
            .then((url) => {

                dadosImagem.url = url// pegando a url da imagem

                loader.classList.replace("d-block","d-none")

                // alert("Imagem carregada com sucesso")
                localStorage.setItem(nomeImagem,JSON.stringify(dadosImagem))// salvando o link da imagem no localstorage

                // Verificar se é a sexta página (proteger6.html)
                if (window.location.href.includes("proteger6.html")) {
                  try {     

                    const confirmEnvio = confirm("DESEJA REALMENTE ENVIAR O REGISTRO?");
                    if (confirmEnvio) {
                      alert("ENVIO BEM-SUCEDIDO! REDIRECIONANDO PARA A PÁGINA INICIAL!");
                      // Redirecionar para a página inicial após o envio bem-sucedido
                      cadastrarDados()
                      // window.location.href = "../index.html";
                    }
                  } catch (error) {
                    console.error("Erro ao enviar imagem para o Firebase:", error);
                  }
                } else {
                  // Redirecionar para a próxima página após o envio bem-sucedido
                  const nextPageHref = btnAvancar.getAttribute("href");
                  window.location.href = nextPageHref;
                }

                // Limpar as imagens para a próxima página
                images = [];
                displayImages();
            })
            .catch((error) => {
                // Uma lista completa de códigos de erro está disponível em
                // https://firebase.google.com/docs/storage/web/handle-errors
                console.log("Erro ao gerar a URL da imagem: "+error)
                switch (error.code) {
                case 'storage/object-not-found':
                    // File doesn't exist
                    break;
                case 'storage/unauthorized':
                    // User doesn't have permission to access the object
                    break;
                case 'storage/canceled':
                    // User canceled the upload
                    break;
        
                // ...
        
                case 'storage/unknown':
                    // Unknown error occurred, inspect the server response
                    break;
                }

            });            
            
        });            
        
               
    } catch (error) {
        console.error("Erro ao fazer upload da imagem: ", error);
        alert("Não foi possível fazer o upload da imagem, insira uma imagem válida")
    }
}

// CADASTRANDO TODOS OS DADOS NO FIRESTORE
async function cadastrarDados(){
  //Pegando os dados do localStorage para armazenar no banco
  let resultado = JSON.parse(localStorage.getItem("dadosEquipe"))

  resultado.imgDesligar = JSON.parse(localStorage.getItem("desligar"))
  resultado.imgBloquear = JSON.parse(localStorage.getItem("bloquear"))
  resultado.imgSinalizar = JSON.parse(localStorage.getItem("sinalizar"))
  resultado.imgAterrar = JSON.parse(localStorage.getItem("aterrar"))
  resultado.imgTestar = JSON.parse(localStorage.getItem("testar"))
  resultado.imgProteger = JSON.parse(localStorage.getItem("proteger"))
  try {
    console.log(resultado)
      await addDoc(collection(db, "registrar"), resultado);
      //console.log("Document criado com ID: ", docRef.id);
      alert("Dados cadastrados com sucesso");
      
      localStorage.removeItem("dadosEquipe")
      localStorage.removeItem("desligar")
      localStorage.removeItem("bloquear")
      localStorage.removeItem("sinalizar")
      localStorage.removeItem("aterrar")
      localStorage.removeItem("testar")
      localStorage.removeItem("proteger")


  } catch (e) {
      console.error("Erro ao criar o documento: ", e);
  }
  
  //getDados() // chamando função para atualizar lista de dados ao criar novo contato
}
