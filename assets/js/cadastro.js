var botao = document.getElementById("novidades");
var cadastro = document.getElementById("email")

botao.onclick = function() {
    if (cadastro.value == "") {
        alert("Preencha seu e-mail!");
    } else {
        alert("Cadastro efetuado com sucesso!");
        localStorage.email;
        return false;
    } 

    
}



