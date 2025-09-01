
const categoria = require('../modelos/categoria');
const Categoria = require('../modelos/categoria')

async function getCategorias(){
  try{
    const categorias = await Categoria.find();
    return categorias;
  } catch(erro){
    console.log("Erro no getCategorias", erro.message);
    return null;
  }
}


module.exports = {
  getCategorias
}