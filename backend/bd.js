require(".env").config();
const mongo = require("mongoose");

mongoose.connect(process.env.CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("Conectado"))
.catch(err => console.error("Erro ao conectar:", err));

module.exports = {
  login,
  // Cliente
  getClientePorId,
  cadastroCliente,
  editarCliente,
  // Prestador
  getTodosOsPrestadores,
  getPrestadorPorCategoria,
  getPrestadorPorId,
  cadastroPrestador,
  //editarPrestador,
  // Categoria
  getCategorias,
  // Serviço
  getServicosAcabadosDoCliente, // o historico são só serviços já terminados
  getServicosAcabadosDoPrestador,
  getServicosEmAndamentoDoCliente,
  getServicosEmAndamentoDoPrestador,
  criarServico,
  alterarStatusDoServico,
  // Avaliação
  getAvaliacoesPorServico,
  criarAvaliacao,
  // Chat
  getChatPorIdServico,
  novaMensagem
};


