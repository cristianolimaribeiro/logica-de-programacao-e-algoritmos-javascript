function exibeHora(){
    var inHoraBrasil = document.getElementById("inHoraBrasil");
    var outExibirHora = document.getElementById("outExibeHora");
    var outMensagem=document.getElementById("outMensagem")
    var horaBrasil = Number(inHoraBrasil.value);

    if(inHoraBrasil.value == "" ||isNaN(horaBrasil)){
        outMensagem.textContent = "Informe a hora corretamente";
        inHoraBrasil.focus();
        outMensagem.style.color = "red";
        return;
    }
    var horaFranca = horaBrasil + 5;

    if(horaFranca > 24){
        horaFranca = horaFranca - 24;
    }

    outExibirHora.textContent = 'A hora na França é '+ horaFranca.toFixed(2) + ' hr'
}

var btnHoraFranca =document.getElementById("btnHoraFranca");

btnHoraFranca.addEventListener('click',exibeHora)

function Limpar(){
    document.getElementById("outMensagem").textContent = "";
    document.getElementById("outExibeHora").textContent = "";
    document.getElementById("inHoraBrasil").value = "";
}
var btnLimpar = document.getElementById("btnLimpar");

btnLimpar.addEventListener('click', Limpar)

