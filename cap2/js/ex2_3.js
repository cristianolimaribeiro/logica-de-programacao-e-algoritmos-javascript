function gerarPromocao() {
    var veiculo = document.getElementById("inVeiculo");
    var preco = document.getElementById("inPreco");
    var promocao = document.getElementById("pPromocao");
    var entrada = document.getElementById("pEntrada");
    var parcelas = document.getElementById("pParcelas");

    var marcaVeiculo = veiculo.value;
    var precoVeiculo = Number(preco.value);
    var precoDesconto = ((precoVeiculo * 50) / 100);
    var valorVezes = precoDesconto / 12;

    promocao.textContent = 'Promoção: ' + marcaVeiculo;
    entrada.textContent = 'Entrada de R$ ' + precoDesconto;
    parcelas.textContent = '+ 12x de R$ ' + valorVezes.toFixed(2);

    document.getElementById("inVeiculo").value = "";
    document.getElementById("inPreco").value = "";
}
var promo = document.getElementById("btnPromo");
promo.addEventListener('click', gerarPromocao);

function limpar(){
    document.getElementById("pPromocao").textContent = "";
    document.getElementById("pEntrada").textContent = "";
    document.getElementById("pParcelas").textContent = "";
}
var limpa = document.getElementById("limpar");
limpa.addEventListener('click',limpar);