const Avaliacao = require('../modelos/avaliacao')

function getAvaliacoesPorServico(idServico) {
    try{
        const avaliacao = Avaliacao.findById(idServico)
        return avaliacao
    }
    catch(erro){
        console.log("Erro no getAvaliacao", erro.message);
        return null
    }
}

function criarAvaliacao(avaliacao) {
    try{
        const texto = Avaliacao.create(avaliacao)
        return true
    }
    catch(erro){
        console.log("Erro no criarAvaliação", erro.message);
        return false
    }
}

module.exports = {
    getAvaliacoesPorServico,
    criarAvaliacao
}
