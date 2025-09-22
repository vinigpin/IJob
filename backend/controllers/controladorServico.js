const Servico = require('../models/servico');
const {ObjectId} = require("mongoose").Types;
const sanitize = require('../middleware/sanitize');

async function getTodosOsServicos() {
  try {
    return await Servico.find();
  } catch (erro) {
    console.log("Erro no getTodosOsServicos:", erro.message);
    throw erro;
  }
}

async function getServicosAcabadosDoCliente(idCliente){
  idCliente = sanitize(idCliente);

  try{
      idCliente = sanitize(idCliente);
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
    idPrestador = sanitize(idPrestador);

  try{
    idPrestador = sanitize(idPrestador);
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
    idCliente = sanitize(idCliente);

   try{
      idCliente = sanitize(idCliente);
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
    idPrestador = sanitize(idPrestador);

  try{
    idPrestador = sanitize(idPrestador);
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
    servico = sanitize(servico);

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
    idServico = sanitize(idServico);
    estado = sanitize(estado);

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
    idServico = sanitize(idServico);

  try{
    const chat = await Servico.findById(idServico).mensagens;
    return chat;
  }
  catch(erro){
    console.log("Erro no getChatPorIdServico", erro.message);
    throw erro;
  }
}

async function novaMensagem(mensagem, idServico) {
    mensagem = sanitize(mensagem);
    idServico = sanitize(idServico);

  try{
    await Servico.updateOne({
      _id: new ObjectId(idServico)
    },{
      $push: { mensagens: mensagem }
    })
    const msg = await Servico.create(mensagem)
    return msg;
  }
  catch(erro){
    console.log("Erro no novaMensagem", erro.message);
    throw erro;
  }
  
}


module.exports = {
  getTodosOsServicos,
  getServicosAcabadosDoCliente, // o historico são só serviços já terminados
  getServicosAcabadosDoPrestador,
  getServicosEmAndamentoDoCliente,
  getServicosEmAndamentoDoPrestador,
  criarServico,
  alterarStatusDoServico,
  getChatPorIdServico,
  novaMensagem
}
