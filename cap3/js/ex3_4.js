function raizQuadrada(){
    var inNumero = document.getElementById("inNumero");
    var outValidacao = document.getElementById("outValidacao");
    var outResposta = document.getElementById("outResposta");

    var numero = Number(inNumero.value);

    if (numero == 0 || isNaN(numero)) {
        outValidacao.textContent = "Informe um número válido"
        outValidacao.style.color = 'red'
        inNumero.focus();
        return
    }

    var raiz = Math.sqrt(numero);

    if (raiz == Math.floor(raiz)) {
        outResposta.textContent = 'A Raiz do ' + numero + ' é ' + raiz
    } else {
        outResposta.textContent = 'Não existe Raiz exata para ' + numero
    }
}


var bntExibirRaiz = document.getElementById("bntExibirRaiz");

bntExibirRaiz.addEventListener('click', raizQuadrada)

function limparCampos(){
    document.getElementById("inNumero").value = '';
    document.getElementById("outValidacao").textContent = '';
    var outResposta = document.getElementById("outResposta").textContent = '';
}

var btnLimpar = document.getElementById("btnLimpar"); 
btnLimpar.addEventListener('click', limparCampos);