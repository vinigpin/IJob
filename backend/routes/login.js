const express = require("express");
const router = express.Router();

// Rota de login
router.post("/login", (req, res) => { const { nome, senha } = req.body;

  const usuarios = [
    { nome: "joao", senha: "senha123" },
    { nome: "maria", senha: "senha123" }
  ];

  const user = usuarios.find(u => u.nome === nome && u.senha === senha);

  if (user) {
    res.json({ sucesso: true, mensagem: "Login realizado com sucesso!" });
  } else {
    res.status(401).json({ sucesso: false, mensagem: "Credenciais inválidas" });
  }
});

module.exports = router;
