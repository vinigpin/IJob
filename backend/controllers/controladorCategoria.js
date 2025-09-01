
const Categoria = require('../models/categoria')

async function getCategorias(){
  try{
    const categorias = await Categoria.find();
    return categorias;
  } catch(erro){
    console.log("Erro no getCategorias", erro.message);
    throw erro;
  }
}


module.exports = {
  getCategorias
}