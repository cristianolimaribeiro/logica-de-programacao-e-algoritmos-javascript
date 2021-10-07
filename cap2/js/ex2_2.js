function converteDuracao() {
    var nomefilme = document.getElementById("nomefilme");
    var duracao = document.getElementById("duracao");
    var respostafilme = document.getElementById("respostafilme");
    var respostaduracao = document.getElementById("respostaduracao");

    var titulo = nomefilme.value;
    var duracaofilme = Number(duracao.value);

    var horas = Math.floor(duracaofilme /60);
    var minutos = duracaofilme % 60;
    respostafilme.textContent = titulo;
    respostaduracao.textContent = horas + "hora(s) e " + minutos + "minuto(s)";

    document.getElementById("nomefilme").value = "";
    document.getElementById("duracao").value = ""
}
function limpar() {
    document.getElementById("respostafilme").textContent = "";
    document.getElementById("respostaduracao").textContent = ""
}
var converte = document.getElementById("converte");
converte.addEventListener('click',converteDuracao);

var limpa = document.getElementById("limpar");
limpa.addEventListener('click', limpar)

