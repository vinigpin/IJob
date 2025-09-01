
const Servico = require('../models/servico');
const {ObjectId} = require("mongoose").Types;

async function getServicosAcabadosDoCliente(idCliente){
  try{
      const servicos = await Servico.find(
      {
        idCliente: new ObjectId(idCliente),
        status:"finalizado"
      });
      return servicos;
    } 
    catch(erro){
      console.log("Erro no getServicosAcabadosDoCliente", erro.message);
      throw erro;
    }
}

async function getServicosAcabadosDoPrestador(idPrestador){
  try{
    const servicos = await Servico.find(
      {
        idPrestador:new ObjectId(idPrestador),      
        status:"finalizado"
      });
    return servicos;
  }
  catch(erro){
    console.log("Erro no getServicosAcabadosDoPrestador", erro.message);
    throw erro;
  }
}

async function getServicosEmAndamentoDoCliente(idCliente){
   try{
      const servicos = await Servico.find(
      {
        idCliente: new ObjectId(idCliente),
        status:"Em andamento"
      });
      return servicos;
    } 
    catch(erro){
      console.log("Erro no getServicosEmAndamentoDoCliente", erro.message);
      throw erro;
    }
}

async function getServicosEmAndamentoDoPrestador(idPrestador){
  try{
    const servicos = await Servico.find(
      {
        idPrestador:new ObjectId(idPrestador),      
        status:"Em andamento"
      });
    return servicos;
  }
  catch(erro){
    console.log("Erro no getServicosEmAndamentoDoPrestador", erro.message);
    throw erro;
  }
}

async function criarServico(servico) {
  try{
         const aquisicao = await Servico.create(servico)
         return true
     }
     catch(erro){
         console.log("Erro no criarServico", erro.message);
         throw erro;
     }
}

async function alterarStatusDoServico(idServico, estado) {
  try{
    const status = await Servico.updateOne(
      {
        _id: new ObjectId(idServico)
      }
      ,
      {
        status: estado
      }
    )
  }
  catch(erro){
    console.log("Erro no alterarStatusDoServico", erro.message);
    throw erro;
  }
  
}

async function getChatPorIdServico(idServico) {
  try{
    const chat = await Servico.findById(idServico).mensagens;
    return chat;
  }
  catch(erro){
    console.log("Erro no getChatPorIdServico", erro.message);
    throw erro;
  }
}

async function novaMensagem(mensagem) {
  try{
    const msg = await Servico.create(mensagem)
    return msg;
  }
  catch(erro){
    console.log("Erro no novaMensagem", erro.message);
    throw erro;
  }
  
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
