
const Avaliacao = require('../models/avaliacao')
const sanitize = require('../middleware/sanitize')

function getAvaliacoesPorPrestador(idPrestador) {
    idPrestador = sanitize(idPrestador);

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
    avaliacao = sanitize(avaliacao);

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
    getAvaliacoesPorPrestador,
    criarAvaliacao
};
