const mongoose = require("mongoose");

const UsuarioSchema = new mongoose.Schema({
  celular: { type: String, required: true, unique: true }, 
  senha: { type: String, required: true },
  nome: { type: String, required: true },
  regiao: { type: String, required: true },
  enderecoFoto: { type: String },
  cpf: { type: String, unique: true, sparse: true },
  prestador: {
    contaCadastrada: { type: Number },
    categorias: [{ type: String }],
    nascimento: { type: Date },
    valor: { type: Number },
  }
}, { timestamps: true });

module.exports = mongoose.model("Usuario", UsuarioSchema);
