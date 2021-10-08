function saque() {
    var inValorSaque = document.getElementById("inValorSaque");
    var outNotasCem = document.getElementById("outNotasCem");
    var outNotasCinquenta = document.getElementById("outNotasCinquenta");
    var outNotasDez = document.getElementById("outNotasDez");

    var valorSaque = Number(inValorSaque.value);

    if (valorSaque == 0 || isNaN(valorSaque)){
        alert('Digite o valor que deseja sacar');
        inValorSaque.focus();
        return;
    }

    if(valorSaque % 10 != 0){
        alert('Valor inválido para notas disponíveis (R$ 100.00, R$ 50.00, R$ 10.00)');
        inValorSaque.focus();
        inValorSaque.value = ''
        return;
    }

    var notasCem = Math.floor(valorSaque / 100);
    var resto = valorSaque % 100;
    var notasCinquenta = Math.floor( resto / 50);
    resto = resto% 50;
    var notasDez = Math.floor(resto / 10);

    if (notasCem > 0){
        outNotasCem.textContent = 'Notas de R$ 100.00: '+ notasCem; 
    }
    if(notasCinquenta > 0){
        outNotasCinquenta.textContent = 'Notas de R$ 50.00: ' + notasCinquenta;
    }
    if (notasDez > 0){
        outNotasDez.textContent = 'Notas de R$ 10.00: '+ notasDez;
    }
}

var btnNotaSaque = document.getElementById("btnNotaSaque");

btnNotaSaque.addEventListener('click', saque);

function novoSaque(){
    inValorSaque.value = '';
    outNotasCem.textContent = '';
    outNotasCinquenta.textContent = '';
    outNotasDez.textContent = '';
}

var bntNovoSaque = document.getElementById("bntNovoSaque");
bntNovoSaque.addEventListener('click', novoSaque)