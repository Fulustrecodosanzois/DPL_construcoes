let senha = document.querySelector("#password")
let btn_olho = document.querySelector(".fa-eye")

btn_olho.addEventListener("click", ()=>{
    if(btn_olho.classList.contains("fa-eye")){
        btn_olho.classList.remove("fa-eye")
        btn_olho.classList.add("fa-eye-slash")
        senha.setAttribute("type", "text")
    }else{
        btn_olho.classList.remove("fa-eye-slash")
        btn_olho.classList.add("fa-eye")
        senha.setAttribute("type", "password")
        
    }
})

function togglePasswordVisibility(...inputIds) {
    inputIds.forEach(inputId => {
        let senhaInput = document.querySelector(`#${inputId}`);
        let eyeIcon = document.querySelector(`#${inputId} + i.btn-eye`);

        if (senhaInput.type === "password") {
            senhaInput.type = "text";
            eyeIcon.classList.remove("fa-eye");
            eyeIcon.classList.add("fa-eye-slash");
        } else {
            senhaInput.type = "password";
            eyeIcon.classList.remove("fa-eye-slash");
            eyeIcon.classList.add("fa-eye");
        }
    });
}


