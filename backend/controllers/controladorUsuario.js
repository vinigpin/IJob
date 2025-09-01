
const Usuario = require('../modelos/modeloUsuario');
const bcrypt = require('bcrypt');

async function login(celular, senha){
  try{
    const usuario = await Usuario.find({
      celular: celular,
      senha: senha
    });
    return usuario;
  } 
  catch(erro){
    console.log("Erro no login", erro.message);
    return null;
  }
}

async function cadastroUsuario(usuario){
    try{
    await Usuario.create(usuario);
    return true;
  } 
  catch(erro){
    console.log("Erro no cadastroUsuario", erro.message);
    return null;
  }
}

async function getUsuarioPorId(id){
  try{
    const usuario = await Usuario.findById(id);
    return usuario;
  } 
  catch(erro){
    console.log("Erro no getUsuarioPorId", erro.message);
    return null;
  }
}

async function editarUsuario(id, dados){
    // TODO: Implementar edição de cliente
}

async function getTodosOsPrestadores(){
    // TODO: Implementar busca de todos os prestadores
}

async function getPrestadorPorCategoria(categoria){
    // TODO: Implementar busca de prestador por categoria
}




module.exports = {
  login,
  cadastroUsuario,
  getUsuarioPorId,
  editarUsuario,
  // Prestador em específico
  getTodosOsPrestadores,
  getPrestadorPorCategoria
};