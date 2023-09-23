let btnAvancar = document.querySelector("#btnAvancar")
let confir = document.querySelector(".confirm")

let relatorio = []
btnAvancar.addEventListener("click", (evento)=>{
    evento.preventDefault()
    console.log(confir.id)

    if(confir.checked){
        if(confir.id == "desligar1"){
            window.location.href="bloquear2.html"
        }
        else if(confir.id == "bloquear2"){
            window.location.href="sinalizar3.html"
        }
    }
    if(confir.checked){
        if(confir.id == "bloquear2"){
            window.location.href="sinalizar3.html"
        }
        else if(confir.id == "sinalizar3"){
            window.location.href="testar4.html"
        }
    }
    if(confir.checked){
        if(confir.id == "testar4"){
            window.location.href="aterrar5.html"
        }
        else if(confir.id == "aterrar5"){
            window.location.href="proteger6.html"
        }
    }
    if(confir.checked){
        if(confir.id == "proteger6"){  
            let resultado = JSON.parse(localStorage.getItem("relatorio"))
            let dadosTemp = JSON.parse(localStorage.getItem("dadosTemp"))
            if(resultado == null){
                relatorio.push(dadosTemp)
            }
            else{
                relatorio = resultado
                relatorio.push(dadosTemp)
            }
            localStorage.setItem("relatorio", JSON.stringify(relatorio))
            localStorage.removeItem("dadosTemp")
            alert("Registro Enviado com Sucesso.")
            window.location.href="../index.html"
        }
    }
    else{
        alert("Confirme Para Prosseguir.")
    }
});

