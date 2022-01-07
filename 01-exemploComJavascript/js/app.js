function enviarDados() {

    if (document.dados.tx_nome.value == '' ||
        document.dados.tx_nome.value.length < 8) {

        alert('Por favor, preencha o campo nome corretamente!')
        document.dados.tx_nome.focus()

        return false
    }

    if (document.dados.tx_email.value == '' ||
        document.dados.tx_email.value.indexOf('@') == -1 ||
        document.dados.tx_email.value.indexOf('.') == -1) {
        alert('Por favor, preencha o campo e-mail corretamente!')
        document.dados.tx_email.focus()

        return false
    }

    if (document.dados.tx_mensagem.value.length < 50) {
        alert('Por favor, é necessário preencher o campo mensagem com' +
            'mais de 50 caracteres!')
        document.dados.tx_mensagem.focus()

        return false;
    }

    return true
}