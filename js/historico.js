import { db } from "./config-firebase.js";
import { orderBy, getDocs, collection, query } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";



document.addEventListener("DOMContentLoaded", async () => {
    try {
        // Obtenha os documentos da coleção "registrar"
        const querySnapshot = await getDocs(collection(db, "registrar"), orderBy("timestamp", "desc"));

        // Exiba as informações na página
        const informacoesDiv = document.getElementById("informacoes");
        informacoesDiv.innerHTML = ""; // Limpe o conteúdo anterior

        querySnapshot.forEach((doc) => {
            const data = doc.data();
            const infoCardHTML = criarCardInformacaoHTML(data, data.ordemServico, data.timestamp);
            informacoesDiv.innerHTML += infoCardHTML;
        });
    } catch (error) {
        console.error("Erro ao obter informações:", error);
    }
});

function criarCardInformacaoHTML(data, ordemServico, timestamp) {

    let imagensHTML = "";

    // Verifica se o documento possui URLs das seis imagens
    const nomesImagens = ["APR", "ATERRAR", "BLOQUEAR", "DESLIGAR", "PROTEGER", "SINALIZAR", "TESTAR"];

    // Verifica se o documento possui URLs das sete imagens
    if (data.imgApr && data.imgAterrar && data.imgBloquear && data.imgDesligar && data.imgProteger && data.imgSinalizar && data.imgTestar ) {
        const imagens = [data.imgApr, data.imgAterrar, data.imgBloquear, data.imgDesligar, data.imgProteger, data.imgSinalizar, data.imgTestar];

        // Itera sobre as imagens e adiciona ao HTML
        imagens.forEach((imagem, index) => {
            imagensHTML += `
                <div>
                    <p class="fw-bolder fonte">${nomesImagens[index]}:</p>
                    <img src="${imagem.url}" alt="${imagem.nome}" style="max-width: 200px; max-height: 200px; margin-bottom: 10px;">
                </div>
            `;
        });
    }


    return `
        <div class="col-12 py-3 mt-4 shadow rounded-4 d-flex justify-content-center align-content-center mb-5">
            <div class="px-3">
                <table class="table px-4">
                    <tbody>
                        <tr>
                            <th scope="row" class="bg-success rounded-start text-white" colspan="5">Ordem de Serviço:</th>
                            <td class="text-end bg-success rounded-end text-white fw-bolder" colspan="5">${ordemServico}</td>
                        </tr>
                        <tr>
                            <th scope="row">Líder:</th>
                            <td class="text-end bg-body-tertiary" colspan="5">${data.lider}</td>
                        </tr>
                        <tr>
                            <th scope="row" colspan="5">Matrícula Líder:</th>
                            <td class="text-end bg-body-tertiary" colspan="5">${data.matriculaLider}</td>
                        </tr>
                        <tr>
                            <th scope="row" colspan="4">Matrículas Equipe:</th>
                            <td class="text-end bg-body-tertiary" colspan="5">
                                <ul style="list-style: none; padding: 0; margin: 0;">
                                    ${data.matriculas.map((matricula, index) => `<li>M${index + 1}: ${matricula}</li>`).join("")}
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Equipe:</th>
                            <td class="text-end bg-body-tertiary" colspan="5">${data.equipe}</td>
                        </tr>
                        <tr>
                            <th scope="row">Placa:</th>
                            <td class="text-end bg-body-tertiary" colspan="5">${data.placa}</td>
                        </tr>
                        <tr>
                            <th scope="row">Endereço:</th>
                            <td class="text-end bg-body-tertiary" colspan="5">${data.localizacao}</td>
                        </tr>
                        <tr>
                            <th scope="row" colspan="4">Data e Hora:</th>
                            <td colspan="5" class="bg-body-tertiary text-end">${formatarDataHora(timestamp)}</td>
                        </tr>
                    </tbody>
                </table>
                
                <div class="row">
                    <div class="col">
                        <h5 class="text-center">Imagens da equipe:</h5>
                        <div class="d-flex justify-content-center">
                            <div class="text-center flex-row img-thumbnail">
                                ${imagensHTML}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
    `;
}

function formatarDataHora(timestamp) {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false };
    return new Date(timestamp).toLocaleString('pt-BR', options);
}


document.addEventListener("DOMContentLoaded", async () => {
    try {
        const querySnapshot = await getDocs(
            query(
                collection(db, "registrar"),
                orderBy("timestamp", "desc") // Ordenando pelo timestamp em ordem descendente
            )
        );

        const informacoesDiv = document.getElementById("informacoes");
        informacoesDiv.innerHTML = "";

        querySnapshot.forEach((doc, index) => {
            const data = doc.data();
            const infoCardHTML = criarCardInformacaoHTML(data, data.ordemServico, data.timestamp);
            informacoesDiv.innerHTML += infoCardHTML;
        });
    } catch (error) {
        console.error("Erro ao obter informações:", error);
    }
});


//========================== PESQUISA


document.addEventListener("DOMContentLoaded", async () => {
    // ... (seu código existente)
  
    // Referências aos elementos HTML
    const searchForm = document.getElementById("searchForm");
    const searchInput = document.getElementById("searchInput");
    const informacoesDiv = document.getElementById("informacoes");
  
    // Função para realizar a pesquisa
    const realizarPesquisa = async (termo) => {
      informacoesDiv.innerHTML = ""; // Limpar resultados anteriores
  
      try {
        const querySnapshot = await getDocs(
          query(
            collection(db, "registrar"),
            orderBy("timestamp", "desc")
          )
        );
  
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          const ordemServico = data.ordemServico.toLowerCase(); // Convertendo para minúsculas para pesquisa case-insensitive
  
          if (ordemServico.includes(termo.toLowerCase())) {
            const infoCardHTML = criarCardInformacaoHTML(data, data.ordemServico, data.timestamp);
            informacoesDiv.innerHTML += infoCardHTML;
          }
        });
  
        if (informacoesDiv.innerHTML === "") {
          informacoesDiv.innerHTML = "<p>Nenhum resultado encontrado.</p>";
        }
      } catch (error) {
        console.error("Erro ao obter informações:", error);
      }
    };
  
    // Manipulador de evento para o formulário de pesquisa
    searchForm.addEventListener("submit", async (event) => {
      event.preventDefault(); // Evitar o comportamento padrão de submit
  
      const termoPesquisa = searchInput.value.trim(); // Obter o valor do campo de pesquisa
  
      if (termoPesquisa !== "") {
        realizarPesquisa(termoPesquisa); // Executar a função de pesquisa
      } else {
        informacoesDiv.innerHTML = ""; // Limpar resultados anteriores
        // Se o campo de pesquisa estiver vazio, exibir todos os resultados novamente
  
        // Chame sua função existente para carregar todos os resultados novamente
        // Seu código original para exibir todos os resultados após o carregamento do DOM
        const querySnapshot = await getDocs(
          query(
            collection(db, "registrar"),
            orderBy("timestamp", "desc")
          )
        );
  
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          const infoCardHTML = criarCardInformacaoHTML(data, data.ordemServico, data.timestamp);
          informacoesDiv.innerHTML += infoCardHTML;
        });
      }
    });
  
    // Manipulador de evento para o campo de entrada de pesquisa (detecta a exclusão de conteúdo)
    searchInput.addEventListener("input", async () => {
      const termoPesquisa = searchInput.value.trim(); // Obter o valor do campo de pesquisa
  
      if (termoPesquisa === "") {
        informacoesDiv.innerHTML = ""; // Limpar resultados anteriores
  
        // Chame sua função existente para carregar todos os resultados novamente
        // Seu código original para exibir todos os resultados após o carregamento do DOM
        const querySnapshot = await getDocs(
          query(
            collection(db, "registrar"),
            orderBy("timestamp", "desc")
          )
        );
  
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          const infoCardHTML = criarCardInformacaoHTML(data, data.ordemServico, data.timestamp);
          informacoesDiv.innerHTML += infoCardHTML;
        });
      }
    });
  });
  


//   ---------------------   VOLTA AO TOPO


document.addEventListener("DOMContentLoaded", function() {
    const btnVoltarAoTopo = document.getElementById("voltarAoTopoBtn");
  
    // Exibir o botão quando a página for rolada para baixo
    window.addEventListener("scroll", function() {
      if (window.pageYOffset > 1800) {
        btnVoltarAoTopo.classList.add("show");
      } else {
        btnVoltarAoTopo.classList.remove("show");
      }
    });
  
    // Função para rolar suavemente até o topo da página ao clicar no botão
    btnVoltarAoTopo.addEventListener("click", function() {
      window.scrollTo({
        top: 0,
        behavior: "auto"
      });
    });
  });