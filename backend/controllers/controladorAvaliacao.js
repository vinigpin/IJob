
const Avaliacao = require('../models/avaliacao')

function getAvaliacoesPorPrestador(idPrestador) {
    try{
        const avaliacao = Avaliacao.findById(idPrestador);
        return avaliacao;
    }
    catch(erro){
        console.log("Erro no getAvaliacao", erro.message);
        throw erro;
    }
}

function criarAvaliacao(avaliacao) {
    try{
        Avaliacao.create(avaliacao);
        return true;
    }
    catch(erro){
        console.log("Erro no criarAvaliação", erro.message);
        throw erro;
    }
}

module.exports = {
    getAvaliacoesPorServico,
    criarAvaliacao
};
