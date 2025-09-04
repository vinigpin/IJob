const express = require("express");
const Categoria = require('../controllers/controladorCategoria');
const router = express.Router();

router.get("/categorias", async (req, res) =>{
    try{
        const categorias = await Categoria.getCategorias();
        return res.status(200).json(categorias);
    } catch(erro){
        res.status(500).json({sucesso: false, menssagem: "Erro no servidor"});
    }
})


module.exports = router;