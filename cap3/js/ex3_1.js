function calculaMedia(){
    var nomeAluno = document.getElementById("inNomeAluno");
    var primeiraNota =document.getElementById("inPrimeiraNota");
    var segundaNota = document.getElementById("inSegundaNota");
    var media = document.getElementById("outMedia");
    var situacao = document.getElementById("outSituacao");

    var nome = nomeAluno.value;
    var pNota = Number(primeiraNota.value);
    var sNota = Number(segundaNota.value);
    var mediaNota = (pNota + sNota)/2;

    media.textContent = 'Média da Notas: ' + mediaNota.toFixed(1);

    if(mediaNota >=7){
        situacao.textContent = 'Parabéns ' + nome + ' ! Você está Aprovado(a)';
        situacao.style.color ='blue'; 
    }else {
        situacao.textContent = 'Que Pena ' + nome + '! Você está Reprovado(a)';

    } 
}
var exibeSituacao = document.getElementById("btnExibirSituacao");
exibeSituacao.addEventListener('click', calculaMedia)
