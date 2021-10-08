function parOuImpar() {
    var inNumero = document.getElementById("inNumero");
    var outResposta = document.getElementById("outResposta");

    var numero = Number(inNumero.value);

    if(inNumero.value == '' || isNaN(numero)){
        alert('Por favor insira o número que escolheu');
        inNumero.focus()
        return;
    }
    var parImpar = numero % 2 ;

    if(parImpar == 0){
        outResposta.textContent = 'Resposta: '+ numero + ' é par';
    } else {
        outResposta.textContent = 'Resposta: '+ numero + ' é impar';
    }
}

var btnVerificaNumero = document.getElementById("btnVerificaNumero");

btnVerificaNumero.addEventListener('click', parOuImpar);

function limpar(){
    inNumero.value = '';
    outResposta.textContent = '';
}

var btnLimpar = document.getElementById("btnLimpar");
btnLimpar.addEventListener('click', limpar)