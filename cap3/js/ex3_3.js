var bairro = prompt("Qual o Bairro da Entrega? ")
var taxaDeEntrega;

switch (bairro) {
    case "Centro" :
        taxaDeEntrega = 5.00;
    break;

    case "Alto da Serra":
    case "Castelanea":
        taxaDeEntrega = 10.00;
    break;

    case "Quitandinha":
        taxaDeEntrega = 15.00;
    break;

    default:
        if ( bairro != "Centro" || bairro != "Alto da Serra" || bairro != "Castelanea" || bairro != "Quitandinha"){
            alert("Não Cobrimos o bairro "+ bairro);
            location.reload()
        }
}
if  ( bairro == "Centro" || bairro == "Alto da Serra" || bairro == "Castelanea" || bairro == "Quitandinha"){
    alert('Para ' + bairro + ' a taxa de é R$ '+ taxaDeEntrega );
    location.reload()
}
