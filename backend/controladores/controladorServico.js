
const Servico = require('../modelos/modeloServico')

async function getServicosAcabadosDoCliente(){
  
}








module.exports = {
  getServicosAcabadosDoCliente, // o historico são só serviços já terminados
  getServicosAcabadosDoPrestador,
  getServicosEmAndamentoDoCliente,
  getServicosEmAndamentoDoPrestador,
  criarServico,
  alterarStatusDoServico,
  getChatPorIdServico,
  novaMensagem
}
