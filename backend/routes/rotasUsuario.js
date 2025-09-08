const express = require("express");
const router = express.Router();
const Usuario = require('../controllers/controladorUsuario');


// -------- POST --------

// Rota de login
router.post("/login", async (req, res) => { 
    try {
        const { telefone, senha } = req.body;
        resultado = await Usuario.login(telefone, senha);
        
        if (!resultado.sucesso) 
            return res.status(401).json(resultado)
        return res.status(200).json(resultado)
    } catch (erro) {
        res.status(500).json({mensagem: "Erro no servidor"});
    }
});

// Rota de registro
router.post("/registrar", async (req, res) => {
    try{
        const usuario = req.body;
        if (Usuario.cadastroUsuario(usuario))
            return res.status(201).json({mensagem: "Conta criada com sucesso!"});
        return res.status(400).json({mensagem: "Erro ao criar conta"});
    } catch(erro){
        res.status(500).json({mensagem: "Erro no servidor"});
    }
});


// -------- GET --------

// Rota de busca de usuário por ID
router.get("/usuario/:id", async(req, res) => {
    try{
        const {id} = req.params;
        const usuario = await Usuario.getUsuarioPorId(id);
        if (usuario == null)
            return res.status(404).json({mensagem: "Usuário não encontrado"});
        return res.status(200).json(usuario);
    } catch(erro){
        res.status(500).json({mensagem: "Erro no servidor"});
    }
});

// Rota de listagem de prestadores
router.get("/prestadores", async(req, res) => {
    try{
        const prestadores = await Usuario.getTodosOsPrestadores();
        if (prestadores == null)
            return res.status(404).json({mensagem: "Nenhum prestador encontrado"});
        return res.status(200).json(prestadores);
    } catch(erro){
        res.status(500).json({mensagem: "Erro no servidor"});
    }
});

// Rotas de busca de prestadores por categoria
router.get("/prestadores/categoria", async(req, res) =>{
    try{
        const {categorias} = req.body;
        const prestadores = await Usuario.getPrestadorPorCategoria(categorias);
        if (prestadores == null)
            return res.status(404).json({mensagem: "Nenhum prestador encontrado"});
        return res.status(200).json(prestadores);
    } catch(erro){
        res.status(500).json({mensagem: "Erro no servidor"});
    }
});


// -------- PUT --------

// Rota de edição de usuário
router.put("usuario/:id", async(req, res) =>{
    try{
        const {id} = req.params;
        const novosDados = req.body;
        const usuarioAtualizado = await Usuario.editarUsuario(id, novosDados);
        if (usuarioAtualizado == null)
            return res.status(404).json({mensagem: "Algo deu errado"});
        return res.status(200).json(usuarioAtualizado);
    } catch(erro){
        res.status(500).json({mensagem: "Erro no servidor"});
    }
});

module.exports = router;
