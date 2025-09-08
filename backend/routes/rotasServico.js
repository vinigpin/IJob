const express = require("express");
const router = express.Router();
const Servico = require("../controllers/controladorServico"); // o arquivo que você mostrou

// Criar um novo serviço
router.post("/servicos", async (req, res) => {
  try {
    const servico = req.body;
    const criado = await Servico.criarServico(servico);
    if (criado)
      return res.status(201).json({ mensagem: "Serviço criado com sucesso!" });
    return res.status(400).json({ mensagem: "Erro ao criar serviço" });
  } catch (erro) {
    res.status(500).json({ mensagem: "Erro no servidor" });
  }
});

// Alterar status de um serviço
router.put("/servicos/status/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    await Servico.alterarStatusDoServico(id, status);
    return res.status(200).json({ mensagem: "Status atualizado com sucesso!" });
  } catch (erro) {
    res.status(500).json({ mensagem: "Erro no servidor" });
  }
});

router.get("/servicos", async(req, res) =>{
  try{
    const servicos = await Servico.getTodosOsServicos();
    return res.status(200).json(servicos);
  } catch(erro){
    res.status(500).json({mensagem: "Erro no servidor"});
  }
});

// Serviços finalizados do cliente
router.get("/servicos/cliente/finalizados/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const servicos = await Servico.getServicosAcabadosDoCliente(id);
    return res.status(200).json(servicos);
  } catch (erro) {
    res.status(500).json({ mensagem: "Erro no servidor" });
  }
});

// Serviços finalizados do prestador
router.get("/servicos/prestador/finalizados/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const servicos = await Servico.getServicosAcabadosDoPrestador(id);
    return res.status(200).json(servicos);
  } catch (erro) {
    res.status(500).json({ mensagem: "Erro no servidor" });
  }
});

// Serviços em andamento do cliente
router.get("/servicos/cliente/andamento/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const servicos = await Servico.getServicosEmAndamentoDoCliente(id);
    return res.status(200).json(servicos);
  } catch (erro) {
    res.status(500).json({ mensagem: "Erro no servidor" });
  }
});

// Serviços em andamento do prestador
router.get("/servicos/prestador/andamento/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const servicos = await Servico.getServicosEmAndamentoDoPrestador(id);
    return res.status(200).json(servicos);
  } catch (erro) {
    res.status(500).json({ mensagem: "Erro no servidor" });
  }
});

// Obter chat de um serviço
router.get("/servicos/chat/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const chat = await Servico.getChatPorIdServico(id);
    return res.status(200).json(chat);
  } catch (erro) {
    res.status(500).json({ mensagem: "Erro no servidor" });
  }
});

router.post("/servicos/mensagem/:id", async (req, res) => {
  try {
    const mensagem = req.body;
    const msg = await Servico.novaMensagem(mensagem);
    return res.status(201).json(msg);
  } catch (erro) {
    res.status(500).json({ mensagem: "Erro no servidor" });
  }
});

module.exports = router;
