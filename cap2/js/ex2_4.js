function calculaPrecoQuilo() {
    var preco = document.getElementById("precoQuilo");
    var quilo = document.getElementById("pesoQuilo");

    
    if (preco.value == "" && quilo.value == "") {
        document.getElementById("valorPagar").textContent = "Preencha os Campos em Branco";
    }else if (preco.value == "") {
        document.getElementById("valorPagar").textContent = "Digite os Valor do Kg do Buffet";
    }else if(quilo.value == ""){
        document.getElementById("valorPagar").textContent = "Digite a Quantidade de Comida";
    }else {
        var valorBuffet = preco.value;
        var precoComida = quilo.value / 1000;
        var valorPagar = valorBuffet * precoComida;

        var valorComida = document.getElementById("valorPagar");

        valorComida.textContent = 'Valor a Pagar R$ ' + valorPagar.toFixed(2);

        document.getElementById("precoQuilo").value = "";
        document.getElementById("pesoQuilo").value = "";
    }

}


var calculaPreco = document.getElementById("calculoPreco");
calculaPreco.addEventListener('click', calculaPrecoQuilo);