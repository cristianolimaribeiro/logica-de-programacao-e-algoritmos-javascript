function radar() {
    var inVelocidadePermitida = document.getElementById("inVelocidadePermitida")
    var outVelocidadeObtida = document.getElementById("outVelocidadeObtida");
    var outMensagem = document.getElementById("outMensagem");
    var outSituacao = document.getElementById("outSituacao");

    var velocidadePermitida = Number(inVelocidadePermitida.value);

    if (inVelocidadePermitida.value == '' || isNaN(velocidadePermitida)) {
        outMensagem.textContent = 'Calibre com a Velocidade'
        outMensagem.style.color = 'red';
        outSituacao.textContent = '';
        outVelocidadeObtida.textContent = ''
        inVelocidadePermitida.focus()
    } else {

        var velocidade = Math.floor(Math.random() * 100) + 50;

        var velocidadeMenor = ((velocidadePermitida) / 100) + velocidadePermitida;
        var velocidadeMaior = ((velocidadePermitida * 20) / 100) + velocidadePermitida;

        outVelocidadeObtida.textContent = 'Velocidade: ' + velocidade + ' KM/h '


        if (inVelocidadePermitida.value != '') {
            outMensagem.textContent = '';
        }
        if (velocidade > velocidadeMenor && velocidade < velocidadeMaior) {
            outSituacao.textContent = 'Situação: Multa Leve'
        }
        else if (velocidade > velocidadeMaior) {
            outSituacao.textContent = 'Situação: Multa Grave'
        } else if (velocidade < velocidadePermitida) {
            outSituacao.textContent = 'Carro não Multado'
        }
    }


}

var btnCapturarRadar = document.getElementById("btnCapturarRadar");
btnCapturarRadar.addEventListener('click', radar)