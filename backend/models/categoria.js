
const mongoose = require("mongoose");

const CategoriaSchema = new mongoose.Schema({
  nome: { type: String, required: true, unique: true },
  cor: { type: String, required: true } // como eh string, vai ter que ser em formato hexadecimal (#FFFFFF)
}, { timestamps: true });

module.exports = mongoose.model("Categoria", CategoriaSchema);
