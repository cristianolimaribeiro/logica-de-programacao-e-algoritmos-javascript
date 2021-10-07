function calcularPeso() {
    var inNome = document.getElementById("inNome");
    var rbMasculino = document.getElementById("rbMasculino");
    var rbFeminino = document.getElementById("rbFeminino");
    var inAltura = document.getElementById("inAltura");
    var outResposta = document.getElementById("outResposta");
    var outValidacao = document.getElementById("outValidacao");

    var nome = inNome.value;
    var masculino = rbMasculino.checked;
    var feminino = rbFeminino.checked;
    var altura = Number(inAltura.value);

    if (nome = "" || (masculino === false && feminino === false)) {
        outValidacao.textContent = 'Por Favor Insira o nome e Selecione o Sexo';
        outValidacao.style.color = "red";
        inNome.focus();
        return;
    }
    if (altura == 0 || isNaN(altura)) {
        outValidacao.textContent = 'Por Favor Insira a altura corretamente';
        outValidacao.style.color = "red";
        inAltura.focus();
    }
    /*   if (masculino) {
        var peso = 22 * (altura * altura);
    } else {
        var peso = 21 * (altura * altura);
    } */

    // Refatoração usando Math.pow()

    if (masculino) {
        var peso = 22 * Math.pow(altura , 2)
    } else {
        var peso = 21 * Math.pow(altura , 2)
    }
    outResposta.textContent = nome + " seu peso ideal é " + peso.toFixed(3) + " Kg ";
    outValidacao.textContent = "";
}

var btnCalcularPeso = document.getElementById("btnCalcularPeso");

btnCalcularPeso.addEventListener('click', calcularPeso);

 function limparCampos(){
     document.getElementById("inNome").value = "";
     document.getElementById("rbMasculino").checked = false;
     document.getElementById("rbFeminino").checked = false;
     document.getElementById("inAltura").value = "";
     document.getElementById("outResposta").textContent = "";
     inNome.focus();
 }
 var btnLimpar = document.getElementById("btnLimpar");
 btnLimpar.addEventListener("click", limparCampos);