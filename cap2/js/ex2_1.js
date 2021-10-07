function mostrarOla() {
    var nome = document.getElementById("nome").value;
    document.getElementById("resposta").textContent = "Olá " + nome;
    document.getElementById("nome").value = ""
}

function limpar() {
    document.getElementById("resposta").textContent = ""
}

/*var mostrar = document.getElementById("mostrar");
mostrar.onclick = mostrarOla;

var limpa = document.getElementById("limpar");
limpa.onclick = limpar;*/

var mostrar = document.getElementById("mostrar");
mostrar.addEventListener('click', mostrarOla);

var limpa = document.getElementById("limpar");
limpa.addEventListener('click', limpar);