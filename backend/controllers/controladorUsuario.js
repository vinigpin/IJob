const Usuario = require('../modelos/modeloUsuario');
const bcrypt = require('bcrypt');

async function login(celular, senha){
  try{
    const usuario = await Usuario.findOne({celular: celular});
    if (!usuario) 
        return {sucesso: false, menssagem: "Usuário não encontrado"};

    const senhaValida = await bcrypt.compare(senha, usuario.senha);
    if (!senhaValida)
        return {sucesso: false, menssagem: "Senha inválida"};
    
    const {senha: _, ...usuarioSemSenha} = usuario.toObject();
    return {sucesso: true, usuario: usuarioSemSenha};
  } 
  catch(erro){
    throw `Erro de login: ${erro}`;
  }
}

function getClientePorId(id){
    // TODO: Implementar busca de cliente por ID
}

function cadastroCliente(dados){
    // TODO: Implementar cadastro de cliente
}

function editarCliente(id, dados){
    // TODO: Implementar edição de cliente
}

function getTodosOsPrestadores(){
    // TODO: Implementar busca de todos os prestadores
}

function getPrestadorPorCategoria(categoria){
    // TODO: Implementar busca de prestador por categoria
}

function getPrestadorPorId(id){
    // TODO: Implementar busca de prestador por ID
}

function cadastroPrestador(dados){
    // TODO: Implementar cadastro de prestador
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
  cadastroPrestador
}