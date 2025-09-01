const Usuario = require('../modelos/modeloUsuario');
const bcrypt = require('bcrypt');

function login(celular, senha){
    // TODO: Implementar login
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

// function editarPrestador(id, dados){
//     // TODO: Implementar edição de prestador
// }

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
  //editarPrestador,
}