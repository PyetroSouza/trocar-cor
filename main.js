'use strict'

const botaoTrocarCor = document.getElementById('botao-trocar-cor')

function trocarCor() {
    const corUsuario = document.getElementById('cor-usuario').value
    if (!corUsuario) {
        alert('[ERRO] Escolha uma cor')
        return
    } else {
        document.documentElement.style.setProperty('--color--bg', corUsuario)
    }
    if (corUsuario == 'azul'){
        document.documentElement.style.setProperty('--color--bg', 'blue')
    } else if (corUsuario == 'rosa'){
        document.documentElement.style.setProperty('--color--bg', 'pink')
    } else if (corUsuario == 'ouro')
        document.documentElement.style.setProperty('--color--bg', 'gold')
    else{
        document.documentElement.style.setProperty('--color--bg', 'silver')
    }
}
botaoTrocarCor.addEventListener('click', trocarCor)
