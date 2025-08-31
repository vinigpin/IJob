
const mongoose = require("mongoose");

const UsuarioSchema = new mongoose.Schema({
  celular: { type: String, required: true, unique: true }, 
  senha: { type: String, required: true },
  nome: { type: String, required: true },
  regiao: { type: String, required: true },
  enderecoFoto: { type: String },
  prestador: {
    contaCadastrada: { type: Number },
    categorias: [{ type: String }],
    nascimento: { type: Date },
    valor: { type: Number },
    cpf: { type: String, unique: true, sparse: true }
  }
}, { timestamps: true });

module.exports = mongoose.model("Usuario", UsuarioSchema);
