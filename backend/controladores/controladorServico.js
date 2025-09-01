
const Servico = require('../modelos/modeloServico')

async function getServicosAcabadosDoCliente(idCliente){
  try{
      const servicos = Servico.findById(idCliente);
      return servicos;
    } 
    catch(erro){
      console.log("Erro no getServicosAcabadosDoCliente", erro.message);
      return null;
    }
}

async function getServicosAcabadosDoPrestador(){
  
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
