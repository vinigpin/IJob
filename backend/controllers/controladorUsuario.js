
const Usuario = require('../models/usuario');
const {ObejctId} = require('mongoose').Types;
const bcrypt = require('bcrypt');

async function login(chave, senha){
  if (ehEmail(chave)){
    if (ehEmailValido(chave)){
      return loginPorEmail(chave, senha);
    }
    return {sucesso: false, mensagem: "Email inválido"};
  }
  if (ehCelularValido(chave)){
    return loginPorCelular(chave, senha);
  }
  return {sucesso: false, mensagem: "Celular inválido"};
}

async function loginPorCelular(celular, senha){
  try{
    const usuario = await Usuario.findOne({celular: celular});
    if (!usuario) 
        return {sucesso: false, mensagem: "Usuário não encontrado"};

    const senhaValida = await bcrypt.compare(senha, usuario.senha);
    if (!senhaValida)
        return {sucesso: false, mensagem: "Senha inválida"};
    
    const {senha: _, ...usuarioSemSenha} = usuario.toObject();
    return {sucesso: true, usuario: usuarioSemSenha};
  } 
  catch(erro){
    throw `Erro de login: ${erro}`;
  }
}

async function loginPorEmail(email, senha){
  try{
    const usuario = await Usuario.findOne({email: email});
    if (!usuario) 
        return {sucesso: false, mensagem: "Usuário não encontrado"};

    const senhaValida = await bcrypt.compare(senha, usuario.senha);
    if (!senhaValida)
        return {sucesso: false, mensagem: "Senha inválida"};
    
    const {senha: _, ...usuarioSemSenha} = usuario.toObject();
    return {sucesso: true, usuario: usuarioSemSenha};
  } 
  catch(erro){
    throw `Erro de login: ${erro}`;
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

async function getTodosUsuarios() {
  try {
    return await Usuario.find();
  } catch (erro) {
    console.log("Erro no getTodosUsuarios", erro.message);
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


module.exports = {
  login,
  cadastroUsuario,
  getUsuarioPorId,
  getTodosUsuarios,
  editarUsuario,
  // Prestador em específico
  getTodosOsPrestadores,
  getPrestadorPorCategoria
};