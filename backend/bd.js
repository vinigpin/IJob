
require(".env").config();


function conectarBD() {
  mongoose.connect(process.env.STRING_DE_CONEXAO, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Conectado"))
  .catch(err => console.error("Erro ao conectar:", err));
}


