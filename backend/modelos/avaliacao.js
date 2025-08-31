
const mongoose = require("mongoose");

const AvaliacaoSchema = new mongoose.Schema({
  idServico: { type: mongoose.Schema.Types.ObjectId, ref: "Servico", required: true },
  data: { type: Date, default: Date.now },
  nota: { type: Number, required: true, min: 1, max: 5 },
  conteudo: { type: String }
}, { timestamps: true });

module.exports = mongoose.model("Avaliacao", AvaliacaoSchema);
