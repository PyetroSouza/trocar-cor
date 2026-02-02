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
}
botaoTrocarCor.addEventListener('click', trocarCor)
