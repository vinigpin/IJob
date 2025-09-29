
require("dotenv").config();
const mongoose = require("mongoose");

async function conectarBD() {
  await mongoose.connect(process.env.STRING_DE_CONEXAO)
  .then(() => console.log("Banco de dados conectado com sucesso!\n"))
  .catch(err => console.error("Erro ao conectar:", err));
}

module.exports = { conectarBD };
