var numeroAleatorio = Math.floor(Math.random() * 100) + 1;

let palpites = [];
var palpitesText = document.querySelector('.palpites');
palpitesText.textContent = 'Palpites anteriores: ';
palpitesText.style.color = 'white'
var ultimoResultado = document.querySelector('.ultimoResultado');
var baixoOuAlto = document.querySelector('.baixoOuAlto');

var envioPalpite = document.querySelector('.envioPalpite');
var campoPalpite = document.querySelector('.campoPalpite');

var contagemPalpites = 0;
var botaoReinicio;
campoPalpite.focus();
  

function conferirPalpite() {
    var palpiteUsuario = Number(campoPalpite.value);
    palpitesText.style.color = 'black';
    if (palpites.includes(palpiteUsuario)) {
        alert('Este valor ja foi digitado!')
    } else {
        palpites.push(palpiteUsuario);
        palpitesText.textContent += palpites[palpites.length - 1] + ' ';
        contagemPalpites++;
    
    if (palpiteUsuario === numeroAleatorio) {
        ultimoResultado.textContent = 'Parabéns! Você acertou!';
        ultimoResultado.style.backgroundColor = 'green';
        ultimoResultado.style.maxWidth = '200px'
        ultimoResultado.style.color = 'white';
        baixoOuAlto.textContent = '';
        configFimDeJogo();
    } else if (contagemPalpites === 10) {
        ultimoResultado.textContent = "!!!FIM DE JOGO!!! VOCÊ PERDEU!!!";
        baixoOuAlto.textContent = '';
        configFimDeJogo();
    } else {
        ultimoResultado.textContent = 'Errado!';
        ultimoResultado.style.backgrounColor = 'red';

        if (palpiteUsuario < numeroAleatorio) {
            baixoOuAlto.textContent = 'Seu palpite está muito baixo!';
        } else if (palpiteUsuario > numeroAleatorio) {
            baixoOuAlto.textContent = 'Seu palpite está muito alto!';
        }
    }
    campoPalpite.value = '';
    campoPalpite.focus();
}

}
envioPalpite.addEventListener('click', conferirPalpite);

function configFimDeJogo() {
    campoPalpite.disabled = true;
    envioPalpite.disabled = true;
    botaoReinicio = document.createElement('button');
    botaoReinicio.textContent = 'Iniciar novo jogo';
    document.body.appendChild(botaoReinicio);
    botaoReinicio.addEventListener('click', reiniciarJogo);
}

function reiniciarJogo() {
    contagemPalpites = 1;
    
    var reiniciarParas = document.querySelectorAll('.resultadoParas p');
    for (var i = 0; i < reiniciarParas.length; i++) {
        reiniciarParas[i].textContent = '';
    }

    botaoReinicio.parentNode.removeChild(botaoReinicio);

    campoPalpite.disabled = false;
    envioPalpite.disabled = false;
    campoPalpite.value = '';
    campoPalpite.focus();

    ultimoResultado.style.backgrounColor = 'white';

    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
}