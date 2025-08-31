
require(".env").config();
const mongo = require("mongoose");



mongoose.connect(process.env.STRING_DE_CONEXAO, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("Conectado"))
.catch(err => console.error("Erro ao conectar:", err));

function login(email, senha){

}



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
  getChatPorIdServico,
  novaMensagem,
  // Avaliação
  getAvaliacoesPorServico,
  criarAvaliacao
};


