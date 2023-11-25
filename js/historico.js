// import { db } from "./config-firebase.js";
// import { orderBy, getDocs, collection, query } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";



// document.addEventListener("DOMContentLoaded", async () => {
//     try {
//         // Obtenha os documentos da coleção "registrar"
//         const querySnapshot = await getDocs(collection(db, "registrar"), orderBy("timestamp", "desc"));

//         // Exiba as informações na página
//         const informacoesDiv = document.getElementById("informacoes");
//         informacoesDiv.innerHTML = ""; // Limpe o conteúdo anterior

//         querySnapshot.forEach((doc) => {
//             const data = doc.data();
//             const infoCardHTML = criarCardInformacaoHTML(data, data.ordemServico, data.timestamp);
//             informacoesDiv.innerHTML += infoCardHTML;
//         });
//     } catch (error) {
//         console.error("Erro ao obter informações:", error);
//     }
// });

// function criarCardInformacaoHTML(data, ordemServico, timestamp) {

//     let imagensHTML = "";

//     // Verifica se o documento possui URLs das seis imagens
//     const nomesImagens = ["APR", "ATERRAR", "BLOQUEAR", "DESLIGAR", "PROTEGER", "SINALIZAR", "TESTAR"];

//     // Verifica se o documento possui URLs das sete imagens
//     if (data.imgApr && data.imgAterrar && data.imgBloquear && data.imgDesligar && data.imgProteger && data.imgSinalizar && data.imgTestar ) {
//         const imagens = [data.imgApr, data.imgAterrar, data.imgBloquear, data.imgDesligar, data.imgProteger, data.imgSinalizar, data.imgTestar];

//         // Itera sobre as imagens e adiciona ao HTML
//         imagens.forEach((imagem, index) => {
//             imagensHTML += `
//                 <div>
//                     <p class="fw-bolder fonte">${nomesImagens[index]}:</p>
//                     <img src="${imagem.url}" alt="${imagem.nome}" style="max-width: 200px; max-height: 200px; margin-bottom: 10px;">
//                 </div>
//             `;
//         });
//     }


//     return `
//         <div class="col-12 py-3 mt-4 shadow rounded-4 d-flex justify-content-center align-content-center mb-5">
//             <div class="px-3">
//                 <table class="table px-4">
//                     <tbody>
//                         <tr>
//                             <th scope="row" class="bg-success rounded-start text-white" colspan="5">Ordem de Serviço:</th>
//                             <td class="text-end bg-success rounded-end text-white fw-bolder" colspan="5">${ordemServico}</td>
//                         </tr>
//                         <tr>
//                             <th scope="row">Líder:</th>
//                             <td class="text-end bg-body-tertiary" colspan="5">${data.lider}</td>
//                         </tr>
//                         <tr>
//                             <th scope="row" colspan="5">Matrícula Líder:</th>
//                             <td class="text-end bg-body-tertiary" colspan="5">${data.matriculaLider}</td>
//                         </tr>
//                         <tr>
//                             <th scope="row" colspan="4">Matrículas Equipe:</th>
//                             <td class="text-end bg-body-tertiary" colspan="5">
//                                 <ul style="list-style: none; padding: 0; margin: 0;">
//                                     ${data.matriculas.map((matricula, index) => `<li>M${index + 1}: ${matricula}</li>`).join("")}
//                                 </ul>
//                             </td>
//                         </tr>
//                         <tr>
//                             <th scope="row">Equipe:</th>
//                             <td class="text-end bg-body-tertiary" colspan="5">${data.equipe}</td>
//                         </tr>
//                         <tr>
//                             <th scope="row">Placa:</th>
//                             <td class="text-end bg-body-tertiary" colspan="5">${data.placa}</td>
//                         </tr>
//                         <tr>
//                             <th scope="row">Endereço:</th>
//                             <td class="text-end bg-body-tertiary" colspan="5">${data.localizacao}</td>
//                         </tr>
//                         <tr>
//                             <th scope="row" colspan="4">Data e Hora:</th>
//                             <td colspan="5" class="bg-body-tertiary text-end">${formatarDataHora(timestamp)}</td>
//                         </tr>
//                     </tbody>
//                 </table>
                
//                 <div class="row">
//                     <div class="col">
//                         <h5 class="text-center">Imagens da equipe:</h5>
//                         <div class="d-flex justify-content-center">
//                             <div class="text-center flex-row img-thumbnail">
//                                 ${imagensHTML}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
        
//         </div>
//     `;
// }

// function formatarDataHora(timestamp) {
//     const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false };
//     return new Date(timestamp).toLocaleString('pt-BR', options);
// }


// document.addEventListener("DOMContentLoaded", async () => {
//     try {
//         const querySnapshot = await getDocs(
//             query(
//                 collection(db, "registrar"),
//                 orderBy("timestamp", "desc") // Ordenando pelo timestamp em ordem descendente
//             )
//         );

//         const informacoesDiv = document.getElementById("informacoes");
//         informacoesDiv.innerHTML = "";

//         querySnapshot.forEach((doc, index) => {
//             const data = doc.data();
//             const infoCardHTML = criarCardInformacaoHTML(data, data.ordemServico, data.timestamp);
//             informacoesDiv.innerHTML += infoCardHTML;
//         });
//     } catch (error) {
//         console.error("Erro ao obter informações:", error);
//     }
// });


// //========================== PESQUISA


// document.addEventListener("DOMContentLoaded", async () => {
//     // ... (seu código existente)
  
//     // Referências aos elementos HTML
//     const searchForm = document.getElementById("searchForm");
//     const searchInput = document.getElementById("searchInput");
//     const informacoesDiv = document.getElementById("informacoes");
  
//     // Função para realizar a pesquisa
//     const realizarPesquisa = async (termo) => {
//       informacoesDiv.innerHTML = ""; // Limpar resultados anteriores
  
//       try {
//         const querySnapshot = await getDocs(
//           query(
//             collection(db, "registrar"),
//             orderBy("timestamp", "desc")
//           )
//         );
  
//         querySnapshot.forEach((doc) => {
//           const data = doc.data();
//           const ordemServico = data.ordemServico.toLowerCase(); // Convertendo para minúsculas para pesquisa case-insensitive
  
//           if (ordemServico.includes(termo.toLowerCase())) {
//             const infoCardHTML = criarCardInformacaoHTML(data, data.ordemServico, data.timestamp);
//             informacoesDiv.innerHTML += infoCardHTML;
//           }
//         });
  
//         if (informacoesDiv.innerHTML === "") {
//           informacoesDiv.innerHTML = "<p>Nenhum resultado encontrado.</p>";
//         }
//       } catch (error) {
//         console.error("Erro ao obter informações:", error);
//       }
//     };
  
//     // Manipulador de evento para o formulário de pesquisa
//     searchForm.addEventListener("submit", async (event) => {
//       event.preventDefault(); // Evitar o comportamento padrão de submit
  
//       const termoPesquisa = searchInput.value.trim(); // Obter o valor do campo de pesquisa
  
//       if (termoPesquisa !== "") {
//         realizarPesquisa(termoPesquisa); // Executar a função de pesquisa
//       } else {
//         informacoesDiv.innerHTML = ""; // Limpar resultados anteriores
//         // Se o campo de pesquisa estiver vazio, exibir todos os resultados novamente
  
//         // Chame sua função existente para carregar todos os resultados novamente
//         // Seu código original para exibir todos os resultados após o carregamento do DOM
//         const querySnapshot = await getDocs(
//           query(
//             collection(db, "registrar"),
//             orderBy("timestamp", "desc")
//           )
//         );
  
//         querySnapshot.forEach((doc) => {
//           const data = doc.data();
//           const infoCardHTML = criarCardInformacaoHTML(data, data.ordemServico, data.timestamp);
//           informacoesDiv.innerHTML += infoCardHTML;
//         });
//       }
//     });
  
//     // Manipulador de evento para o campo de entrada de pesquisa (detecta a exclusão de conteúdo)
//     searchInput.addEventListener("input", async () => {
//       const termoPesquisa = searchInput.value.trim(); // Obter o valor do campo de pesquisa
  
//       if (termoPesquisa === "") {
//         informacoesDiv.innerHTML = ""; // Limpar resultados anteriores
  
//         // Chame sua função existente para carregar todos os resultados novamente
//         // Seu código original para exibir todos os resultados após o carregamento do DOM
//         const querySnapshot = await getDocs(
//           query(
//             collection(db, "registrar"),
//             orderBy("timestamp", "desc")
//           )
//         );
  
//         querySnapshot.forEach((doc) => {
//           const data = doc.data();
//           const infoCardHTML = criarCardInformacaoHTML(data, data.ordemServico, data.timestamp);
//           informacoesDiv.innerHTML += infoCardHTML;
//         });
//       }
//     });
//   });
  


// //   ---------------------   VOLTA AO TOPO


// document.addEventListener("DOMContentLoaded", function() {
//     const btnVoltarAoTopo = document.getElementById("voltarAoTopoBtn");
  
//     // Exibir o botão quando a página for rolada para baixo
//     window.addEventListener("scroll", function() {
//       if (window.pageYOffset > 1800) {
//         btnVoltarAoTopo.classList.add("show");
//       } else {
//         btnVoltarAoTopo.classList.remove("show");
//       }
//     });
  
//     // Função para rolar suavemente até o topo da página ao clicar no botão
//     btnVoltarAoTopo.addEventListener("click", function() {
//       window.scrollTo({
//         top: 0,
//         behavior: "auto"
//       });
//     });
//   });









//======================    EXIBINDO TODAS AS IMAGENS







import { app, db } from "./config-firebase.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-storage.js";
import { addDoc, collection } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";

let btnAvancar = document.querySelector("#btnAvancar");
let confir = document.querySelector(".confirm");
let imageContainer = document.getElementById("imageContainer");

let loader = document.querySelector("#loader")
let btnCamera = document.querySelector("#btnCamera")


loader.classList.replace("d-block", "d-none")// para desabilitar o loader

let nomeImagem = "";
let images = [];
let temporaryImageName = "";
let temporaryImageStorage = [];

let timestamp = new Date().getTime() // para poder ser utilizado como nome da imagem ao salvar no cloud storage.

//criando um objeto para armazenar os dados da imagem
let dadosImagem = {
  nome: "",
  url: ""
}

dadosImagem.nome = timestamp// pegando o novo nome da imagem

const storage = getStorage(app);
const storageRef = ref(storage, `DPLimagem/${timestamp}`);// função ref() recebe a instância de armazenamento storage e uma string que representa o caminho para o local desejado, seria o nome do arquivo lá no storage. Estou salvando dentro de uma pasta chamado 'imagem/' e em seguida


btnCamera.addEventListener('change', handleFileSelect)

let selectedImages = []; // Alteração: alterando o nome da variável para evitar conflito com a variável 'images'


//Essa função irá veirificar em qual página o usuário está atualmente, e irá criar um nome único para poder utilizar no localStorage, para poder salvar os dados das imagens localmente e depois salvar no firestore
function verificaPagina() {

  if (btnCamera.classList.contains("apr")) {
    nomeImagem = "apr"

  } else if (btnCamera.classList.contains("desligar")) {
    nomeImagem = "desligar"

  } else if (btnCamera.classList.contains("bloquear")) {
    nomeImagem = "bloquear"

  } else if (btnCamera.classList.contains("sinalizar")) {
    nomeImagem = "sinalizar"

  } else if (btnCamera.classList.contains("testar")) {
    nomeImagem = "testar"

  } else if (btnCamera.classList.contains("aterrar")) {
    nomeImagem = "aterrar"

  } else if (btnCamera.classList.contains("proteger")) {
    nomeImagem = "proteger"

  }

}

// Esta função irá pegar a imagem e fazer com que ela seja exibida na página
function handleFileSelect(evt) {
  const files = evt.target.files;

  verificaPagina();

  selectedImages = []; // Alteração: limpando o array de imagens selecionadas

  for (let i = 0; i < Math.min(files.length, 3); i++) {
    const file = files[i];
    const reader = new FileReader();

    reader.onload = function (e) {
      const imgElement = document.createElement('img');
      imgElement.src = e.target.result;
      imgElement.alt = 'Imagem';
      selectedImages.push({ file, imgElement }); // Alteração: armazenando cada imagem selecionada
      displayImages(); // Alteração: chamando a função para exibir as imagens
    };

    reader.readAsDataURL(file);
  }
}



//Esta função irá simplesmente adicionar as imagens uma após a outra na página
function displayImages() {
  while (imageContainer.firstChild) {
    imageContainer.removeChild(imageContainer.firstChild);
  }

  for (let i = 0; i < selectedImages.length; i++) { // Alteração: percorrendo o array de imagens selecionadas
    imageContainer.appendChild(selectedImages[i].imgElement);
  }

}



btnAvancar.addEventListener("click", async (evento) => {
  evento.preventDefault();

  const isAprPage = window.location.href.includes("apr.html");

  if (isAprPage) {
    if (selectedImages.length === 0) {
      alert("VOCÊ DEVE INSERIR PELO MENOS UMA IMAGEM PARA PROSSEGUIR.");
    } else {
      temporaryImageStorage.push({ temporaryImageName, selectedImages });
      store(); // Armazenar no Firestore Storage
    }
  } else {
    if (!confir.checked) {
      alert("VOCÊ DEVE CONFIRMAR ANTES DE PROSSEGUIR.");
    } else if (selectedImages.length === 0) {
      alert("VOCÊ DEVE INSERIR PELO MENOS UMA IMAGEM PARA PROSSEGUIR.");
    } else {
      temporaryImageStorage.push({ temporaryImageName, selectedImages });
      store(); // Armazenar no Firestore Storage
    }
  }
});

function store() {
  loader.classList.replace("d-none", "d-block");

  try {
    const promises = [];
    let uploadedCount = 0; // Contador para acompanhar o número de uploads concluídos

    // Criar um objeto para armazenar as URLs das imagens por categoria (apr, desligar, bloquear, etc.)
    const dadosEquipe = JSON.parse(localStorage.getItem("dadosEquipe")) || {};

    verificaPagina(); // Identifica a página atual para determinar a categoria

    for (let i = 0; i < selectedImages.length; i++) {
      const file = selectedImages[i].file;
      const imgDados = { ...dadosImagem }; // Copiando os dados da imagem

      const timestamp = new Date().getTime(); // Novo timestamp para cada imagem
      imgDados.nome = timestamp; // Atualizando o nome da imagem

      const storageRef = ref(storage, `DPLimagem/${timestamp}`); // Referência no Storage

      promises.push(
        uploadBytes(storageRef, file).then((resultado) => {
          return getDownloadURL(resultado.ref).then((url) => {
            imgDados.url = url;

            // Armazenar a URL no objeto sob a chave correspondente à categoria da página
            const categoria = nomeImagem;
            if (!dadosEquipe[categoria]) {
              dadosEquipe[categoria] = [];
            }
            dadosEquipe[categoria].push({ timestamp, url });

            localStorage.setItem("dadosEquipe", JSON.stringify(dadosEquipe));

            uploadedCount++;

             if (uploadedCount === selectedImages.length || uploadedCount === 3) {
              loader.classList.replace("d-block", "d-none");

              if (window.location.href.includes("proteger6")) {
                try {
                  const confirmEnvio = confirm("DESEJA REALMENTE ENVIAR O REGISTRO?");
                  if (confirmEnvio) {
                    cadastrarDados();
                    alert("ENVIO BEM-SUCEDIDO! REDIRECIONANDO PARA A PÁGINA INICIAL!");
                    setTimeout(() => {
                      window.location.href = "../index.html";
                    }, 2000);
                  }
                } catch (error) {
                  console.error("Erro ao enviar imagem para o Firebase:", error);
                }
              } else {
                const nextPageHref = btnAvancar.getAttribute("href");
                window.location.href = nextPageHref;
              }

              selectedImages = [];
              displayImages();
            }
          });
        }).catch((error) => {
          console.log("Erro ao fazer upload da imagem: " + error);
        })
      );
    }

    Promise.all(promises).catch((error) => {
      console.log("Erro ao armazenar imagens no Firebase: " + error);
    });

  } catch (error) {
    console.error("Erro ao fazer upload da imagem: ", error);
    alert("Não foi possível fazer o upload da imagem, insira uma imagem válida");
  }
}




// CADASTRANDO TODOS OS DADOS NO FIRESTORE
async function cadastrarDados() {
  //Pegando os dados do localStorage para armazenar no banco
  let resultado = JSON.parse(localStorage.getItem("dadosEquipe"))

  resultado.imgApr = JSON.parse(localStorage.getItem("apr"))
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
    localStorage.removeItem("apr")
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


