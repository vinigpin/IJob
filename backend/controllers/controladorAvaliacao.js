
const Avaliacao = require('../models/avaliacao')

function getAvaliacoesPorServico(idServico) {
    try{
        const avaliacao = Avaliacao.findById(idServico)
        return avaliacao
    }
    catch(erro){
        console.log("Erro no getAvaliacao", erro.message);
        throw erro;
    }
}

function criarAvaliacao(avaliacao) {
    try{
        const texto = Avaliacao.create(avaliacao)
        return true
    }
    catch(erro){
        console.log("Erro no criarAvaliação", erro.message);
        throw erro;
    }
}

module.exports = {
    getAvaliacoesPorServico,
    criarAvaliacao
}
