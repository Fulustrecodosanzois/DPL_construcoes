// let historicoContainer = document.querySelector("#historico-container")
// function salvarRegistro() {
//  //vazio
// }

// function atualizarData() {
//   let dataAtual= new Date();
//   let dataFormatada = dataAtual.toLocaleDateString();
//   elementoData.textContent = dataFormatada;

//   atualizarData();
//   setInterval(atualizarData,1000);

//   let tabelaVetor = JSON.parse(localStorage.getItem("relatorio"))

//   if(tabelaVetor != null) {
//     let corpo = document.getElementById("")
//   }
// }

// function exibirRegistros() {
//   const registros = JSON.parse(localStorage.getItem('relatorio')) || [];
//   if (registros != null) {
//     relatorio = registros
//   }
//   else {
//     // relatorio = []
//   }
//   // const dataHora = {
//   //   data: new Date().toLocaleDateString(),
//   //   hora: new Date().toLocaleTimeString(),
//   // };

//   relatorio.forEach((registro, index) => {
//     console.log(registro)
//     let div = document.createElement("div")
//     div.classList.add("d-flex", "align-content-center", "justify-content-center",)
//     div.innerHTML = ` 
//     <div class="col-10 col-lg-6 py-3 mt-4 shadow rounded-4 d-flex justify-content-center align-content-center">
//       <div class="px-3">
//         <table class="table px-4 ">
//           <tbody>
//             <tr class="">
//               <th scope="row" class="bg-body-secondary rounded-start">Registro N°:</th>
//               <td class="text-end bg-body-secondary rounded-end" colspan="2">${index < 9 ? '00' : ''}${index > 10 ? '0' : ''}${index > 99 ? '' : ''}${index + 1}</td>
//             </tr>

//             <tr class="">
//               <th scope="row">Líder:</th>
//               <td class="text-end" colspan="2">${registro.lider}</td>
//             </tr>

//             <tr class="">
//               <th scope="row">Matrícula Líder:</th>
//               <td class="text-end" colspan="2">${registro.matriculaLider}</td>
//             </tr>
//             <tr class="">
//               <th scope="row">Matrículas Equipe:</th>
//               <td class="text-end" colspan="2">${registro.matriculas}</td>
//             </tr>

//             <tr>
//               <th scope="row">Equipe:</th>
//               <td class="text-end" colspan="2">${registro.equipe}</td>
//             </tr>

//             <tr>
//               <th scope="row" colspan="1">Placa:</th>
//               <td colspan=23" class="text-end">${registro.placa}</td>
//             </tr>

//             <tr>
//               <th scope="row">Endereço:</th>
//               <td colspan="2" class="text-end">${registro.local}</td>
//             </tr>

//             <tr class="">
//               <td colspan="2" class="bg-body-tertiary">${registro.data}</td>
//               <td colspan="2" class="bg-body-tertiary text-end">${registro.hora}</td>
//             </tr>

//           </tbody>
//         </table>
//       </div>
//     </div>
//   `
//     historicoContainer.appendChild(div)
//   });


// const btnEnviar = document.getElementById('btnEnviar');
// if (btnEnviar) {
//   btnEnviar.addEventListener('click', () => {
//     salvarRegistro();
//     window.location.href = 'desligar1.html';
//   });
// }

// if (window.location.pathname.includes('historico.html')) {
//   exibirRegistros();
// }
// exibirRegistros()




















// import { db } from "./config-firebase.js";
// import { getDocs, collection } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js"; // Adicione esta linha

// document.addEventListener("DOMContentLoaded", async () => {
//     try {
//         // Obtenha os documentos da coleção "registrar"
//         const querySnapshot = await getDocs(collection(db, "registrar"));

//         // Exiba as informações na página
//         const informacoesDiv = document.getElementById("informacoes");
//         informacoesDiv.innerHTML = ""; // Limpe o conteúdo anterior

//         querySnapshot.forEach((doc) => {
//             const data = doc.data();
//             const infoCard = criarCardInformacao(data);
//             informacoesDiv.appendChild(infoCard);
//         });                     
//     } catch (error) {
//         console.error("Erro ao obter informações:", error);
//     }
// });

// function criarCardInformacao(data) {
//     const card = document.createElement("div");
//     card.classList.add("card", "mb-3");

//     const cardBody = document.createElement("div");
//     cardBody.classList.add("card-body");

//     const cardTitle = document.createElement("h5");
//     cardTitle.classList.add("card-title");
//     cardTitle.textContent = "Informações do Formulário";

//     const cardContent = document.createElement("div");
//     cardContent.innerHTML = `
//         <p><strong>Líder:</strong> ${data.lider}</p>
//         <p><strong>Matrícula do Líder:</strong> ${data.matriculaLider}</p>
//         <p><strong>Placa:</strong> ${data.placa}</p>
//         <p><strong>Equipe:</strong> ${data.equipe}</p>
//         <p><strong>Matrículas:</strong> ${data.matriculas.join(", ")}</p>
//         <p><strong>Ordem de Serviço:</strong> ${data.ordemServico}</p>
//         <p><strong>Localização:</strong> ${data.localizacao}</p>
//         <p><strong>Timestamp:</strong> ${data.timestamp}</p>
//     `;

//     cardBody.appendChild(cardTitle);
//     cardBody.appendChild(cardContent);
//     card.appendChild(cardBody);

//     return card;
// }





















import { db } from "./config-firebase.js";
import { getDocs, collection } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", async () => {
    try {
        // Obtenha os documentos da coleção "registrar"
        const querySnapshot = await getDocs(collection(db, "registrar"));

        // Exiba as informações na página
        const informacoesDiv = document.getElementById("informacoes");
        informacoesDiv.innerHTML = ""; // Limpe o conteúdo anterior

        querySnapshot.forEach((doc, index) => {
            const data = doc.data();
            const infoCardHTML = criarCardInformacaoHTML(data, data.ordemServico, data.timestamp);
            informacoesDiv.innerHTML += infoCardHTML;
        });
    } catch (error) {
        console.error("Erro ao obter informações:", error);
    }
});

function criarCardInformacaoHTML(data, ordemServico, timestamp) {
    return `
        <div class="col-12 py-3 mt-4 shadow rounded-4 d-flex justify-content-center align-content-center">
            <div class="px-3">
                <table class="table px-4">
                    <tbody>
                        <tr>
                            <th scope="row" class="bg-body-secondary rounded-start" colspan="3">Ordem de Serviço:</th>
                            <td class="text-end bg-body-secondary rounded-end" colspan="5">${ordemServico}</td>
                        </tr>
                        <tr>
                            <th scope="row">Líder:</th>
                            <td class="text-end" colspan="5">${data.lider}</td>
                        </tr>
                        <tr>
                            <th scope="row" colspan="5">Matrícula Líder:</th>
                            <td class="text-end" colspan="5">${data.matriculaLider}</td>
                        </tr>
                        <tr>
                            <th scope="row" colspan="4">Matrículas Equipe:</th>
                            <td class="text-end" colspan="4">
                                <ul style="list-style: none; padding: 0; margin: 0;">
                                    ${data.matriculas.map((matricula, index) => `<li>M${index + 1}: ${matricula}</li>`).join("")}
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Equipe:</th>
                            <td class="text-end" colspan="5">${data.equipe}</td>
                        </tr>
                        <tr>
                            <th scope="row">Placa:</th>
                            <td class="text-end" colspan="5">${data.placa}</td>
                        </tr>
                        <tr>
                            <th scope="row">Endereço:</th>
                            <td class="text-end" colspan="5">${data.localizacao}</td>
                        </tr>
                        <tr>
                            <th scope="row" colspan="4">Data e Hora:</th>
                            <td colspan="5" class="bg-body-tertiary text-end">${formatarDataHora(timestamp)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

function formatarDataHora(timestamp) {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false };
    return new Date(timestamp).toLocaleString('pt-BR', options);
}
