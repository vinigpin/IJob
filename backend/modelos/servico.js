
const mongoose = require("mongoose");

const MensagemSchema = new mongoose.Schema({
  conteudo: { type: String, required: true },
  remetente: { type: String, required: true } // "cliente" ou "prestador"
}, { timestamps: true }); // se quiser colocar quando a mensagem foi enviada, tem o createdAt automatico

const ServicoSchema = new mongoose.Schema({
  idCliente: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario", required: true },
  idPrestador: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario", required: true },
  dataDeRequisicao: { type: Date, default: Date.now },
  dataDeInicio: { type: Date },
  status: { type: String, required: true },
  dataDeConclusao: { type: Date },
  mensagens: [MensagemSchema]
}, { timestamps: true });

module.exports = mongoose.model("Servico", ServicoSchema);
