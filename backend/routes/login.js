const express = require("express");
const Usuario = require('../controllers/controladorUsuario');
const router = express.Router();

// Rota de login
router.post("/login", async (req, res) => { 
    try {
        const { telefone, senha } = req.body;
        result = await Usuario.login(telefone, senha);
        
        if (!result.sucesso) 
            return res.status(401).json(result)
        return res.status(200).json(result)
    } catch (erro) {
        res.status(500).json({sucesso: false, menssagem: "Erro no servidor"});
    }
});

// Rota de registro
router.post("/registrar", async (req, res) => {
    
});

module.exports = router;
