// login.js
import { app, db } from "./firebaseConfig.js";
import { query, where, getDocs, collection } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", function () {
    
    checkAuthentication();

    document.getElementById("entrar").addEventListener("click", async () => {
        try {
            let matricula = document.querySelector("#matricula-login");
            let senha = document.querySelector("#password");

            const userExists = await checkUserCredentials(matricula.value, senha.value);

            if (userExists) {
                saveUserCredentials(matricula.value, senha.value);

                window.location.href = "./pages/menu.html";
            } else {
                alert("Usuário ou senha incorretos.");
            }
        } catch (error) {
            console.error("Ocorreu o seguinte erro: " + error);
        }
    });
});

async function checkUserCredentials(matricula, senha) {
    const q = query(collection(db, "usuarios"), where("matricula", "==", matricula), where("senha", "==", senha));
    const querySnapshot = await getDocs(q);
    return !querySnapshot.empty;
}

function saveUserCredentials(matricula, senha) {
    localStorage.setItem("userMatricula", matricula);
    localStorage.setItem("userSenha", senha);
}

function checkAuthentication() {
    const storedMatricula = localStorage.getItem("userMatricula");
    const storedSenha = localStorage.getItem("userSenha");

    if (storedMatricula && storedSenha && !window.location.href.includes("menu.html")) {
        window.location.replace("./pages/menu.html");
    }
}

// SAIR
document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("sair").addEventListener("click", () => {

        removeUserCredentials();

        window.location.href = "../..";
    });
});

function removeUserCredentials() {
    localStorage.removeItem("userMatricula");
    localStorage.removeItem("userSenha");
}

console.log("o caminho está correto");

// import { app, db } from "./firebaseConfig.js";
// import { query, where, getDocs, collection } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";

// document.addEventListener("DOMContentLoaded", function () {
//     document.getElementById("entrar").addEventListener("click", async () => {
//         try {
//             let matricula = document.querySelector("#matricula-login");
//             let senha = document.querySelector("#password");

//             const userExists = await checkUserCredentials(matricula.value, senha.value);

//             if (userExists) {
//                 window.location.href = "../../inicio.html";
//             } else {
//                 alert("Usuário ou senha incorretos.");
//             }
//         } catch (error) {
//             console.error("Ocorreu o seguinte erro: " + error);
//         }
//     });
// });

// async function checkUserCredentials(matricula, senha) {
//     const q = query(collection(db, "usuarios"), where("matricula", "==", matricula), where("senha", "==", senha));
//     const querySnapshot = await getDocs(q);
//     return !querySnapshot.empty;
// }

// console.log("o caminho está correto");
