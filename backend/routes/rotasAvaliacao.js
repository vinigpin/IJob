const express = require('express');
const router = express.Router();
const Avaliacao = require('../controllers/controladorAvaliacao');

router.get("/avaliacoes/:idPrestador", async (req, res) =>{
    try{
        const {idPrestador} = req.params;
        const avaliacoes = await Avaliacao.getAvaliacoesPorPrestador(idPrestador);
        if (avaliacoes == null)
            return res.status(404).json({mensagem: "Nenhuma avaliação desse prestador de serviço"});
        return res.status(200).json(avaliacoes);
    } catch(erro){
        res.status(500).json({mensagem: "Erro no servidor"});
    }
});

router.post("/avaliacoes", async (req, res) =>{
    try{
        const avaliacao = req.body;
        if (Avaliacao.criarAvaliacao(avaliacao))
            return res.status(201).json({mensagem: "Avaliação criada com sucesso!"});
        return res.status(400).json({mensagem: "Erro ao criar avaliação"});
    } catch(erro){
        res.status(500).json({mensagem: "Erro no servidor"});
    }
});


module.exports = router;