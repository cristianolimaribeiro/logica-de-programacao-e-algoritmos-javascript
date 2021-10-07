function calculaPagamento() {
    var valorTempo = document.getElementById("valorTempo");
    var tempoCliente = document.getElementById("tempoCliente");

    var valor = Number(valorTempo.value);
    var tempo = Number(tempoCliente.value);
    var valorPagar = Math.ceil(tempo / 15) * valor;

    var mostraValor = document.getElementById("mostraValor");
    mostraValor.textContent = 'Valor a Pagar R$' + valorPagar.toFixed(2);
}

var exibeValor = document.getElementById("btnValorPagar");
exibeValor.addEventListener('click', calculaPagamento)