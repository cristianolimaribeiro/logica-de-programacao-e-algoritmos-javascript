function calcularPromocao() {
    var medicamento = document.getElementById("inMedicamento");
    var preco = document.getElementById("inPreco");

    nomeMedicamento = medicamento.value;
    valorPreco = Number(preco.value);
    valorPromo = valorPreco * 2;

    document.getElementById("pPromocao").textContent = 'Promoção de ' + nomeMedicamento;

    document.getElementById("pValorPromocao").textContent = 'Leve 2 por Apenas R$ ' + Math.floor(valorPromo);
}

var exibePromocao = document.getElementById("btnMostrarPromocao");
exibePromocao.addEventListener('click', calcularPromocao)