
const Usuario = require('../modelos/modeloUsuario');
const {ObejctId} = require('mongoose').Types;
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
    throw erro;
  }
}

async function cadastroUsuario(usuario){
    try{
    await Usuario.create(usuario);
    return true;
  } 
  catch(erro){
    console.log("Erro no cadastroUsuario", erro.message);
    throw erro;
  }
}

async function getUsuarioPorId(id){
  try{
    const usuario = await Usuario.findById(id);
    return usuario;
  } 
  catch(erro){
    console.log("Erro no getUsuarioPorId", erro.message);
    throw erro;
  }
}

async function editarUsuario(id, dados){
  try{
    await Usuario.updateOne(
      { _id: new ObejctId(id)},
      dados
    );
    return true;
  } 
  catch(erro){
    console.log("Erro no editarUsuario", erro.message);
    throw erro;
  }
}


async function getTodosOsPrestadores(){
  try{
    const usuarios = await Usuario.find({
      prestador: { $ne: null }
    });
    return usuarios;
  } 
  catch(erro){
    console.log("Erro no login", erro.message);
    throw erro;
  }
}

async function getPrestadorPorCategoria(categorias){ // manda um vetor de categorias
  try{
    const usuarios = await Usuario.find({
      prestador: { $ne: null },
      "prestador.categorias": { $in: categorias}
    });
    return usuarios;
  } 
  catch(erro){
    console.log("Erro no login", erro.message);
    throw erro;
  }
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