function calculaPromocao(){
    var produto = document.getElementById("inProduto");
    var preco = document.getElementById("inPreco");
    var promocao = document.getElementById("pPromocao");
    var terceiroProduto = document.getElementById("pTerceiroProduto");

    var p = produto.value;
    var valor = Number(preco.value);

    var precoDesconto = (valor * 50) / 100;
    var valorTotal = (valor * 2) + precoDesconto;

    promocao.textContent = p + ' - Promoção: Leve 3 por R$ '+ valorTotal.toFixed(2);
    terceiroProduto.textContent = 'O 3º Produto saiu por apenas R$ ' + precoDesconto;
}
var verPromocao = document.getElementById("btnVerPromocao");
verPromocao.addEventListener('click', calculaPromocao)