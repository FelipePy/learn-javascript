function alterh1(h1) {
    text = prompt('Digite um texto')
    h1.textContent = text
}

function alterImage() {
    let src = imagem.getAttribute('src')
    if (src === '../images/firefox-icon.png') {
        imagem.setAttribute('src', '../images/firefox2.png')
    } else {
        imagem.setAttribute('src', '../images/firefox-icon.png')
    }
}

function addUser() {
    let name = prompt('Por favor, digite seu nome.')
    if (!name || name === null) {
        addUser()
    } else {
        localStorage.setItem('name', name)
        meuCabecalho.textContent = "Mozilla é legal, " + name
    }
}

const meuCabecalho = document.querySelector('h1');
let meuBotao = document.querySelector('#alter_user')
let h1 = document.querySelector('#title')
let button = document.querySelector('#button_a')
let imagem = document.querySelector('img')


button.addEventListener("click", function () 
{
    alterh1(h1)
})


if (!localStorage.getItem('name')) {
    addUser()    
} else {
    let nameStorage = localStorage.getItem('name')
    meuCabecalho.textContent = 'Mozilla é legal, ' + nameStorage
}

meuBotao.addEventListener('click', addUser)

imagem.addEventListener('click', alterImage)