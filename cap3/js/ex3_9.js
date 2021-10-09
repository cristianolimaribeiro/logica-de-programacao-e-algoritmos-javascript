function confirmaDeposito(){
    var inValor = document.getElementById("inValor");
    var outTempo = document.getElementById("outTempo");
    var outTroco = document.getElementById("outTroco");
    var valor = Number(inValor.value);
    if(inValor == '' || isNaN(valor)){
        alert('Insira Moedas Válidas');
        inValor.focus();
        outTempo.textContent = '';
        outTroco.textContent = '';
        return;
    }

    if(valor < 1.00){
        alert('Valor Insuficiente para Estacionar');
        inValor.focus();
        outTempo.textContent = '';
        outTroco.textContent = '';
        return;
    }

    var tempo;
    var troco;

    if (valor >=3.00){
        tempo = 120;
        troco = valor - 3.00;
    }else if(valor >= 1.75){
        tempo = 60;
        troco = valor - 1.75;
    }else {
        tempo = 30;
        troco = valor - 1.00;
    }
    outTempo.textContent = "Tempo: "+ tempo;
    outTroco.textContent = "Troco: "+ troco;

    inValor.value = '';
}   
var btnDeposito = document.getElementById("btnDeposito");

btnDeposito.addEventListener("click", confirmaDeposito)