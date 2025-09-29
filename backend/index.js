const express = require("express");
const cors = require("cors");
const bd = require("./config/bd");

// Inicializa o app
const app = express();

// Middlewares globais
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  res.on("finish", () => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url} - ${res.statusCode}`);
  });
  next();
});


// Importa rotas
const rotasUsuario = require("./routes/rotasUsuario");
const rotasAvaliacao = require("./routes/rotasAvaliacao");
const rotasCategoria = require("./routes/rotasCategoria");
const rotasServico = require("./routes/rotasServico");
const rotasVerificacao = require("./routes/rotasVerificacao");

// Usa rotas com prefixos organizados
app.use("/api/usuarios", rotasUsuario);
app.use("/api/avaliacoes", rotasAvaliacao);
app.use("/api/categorias", rotasCategoria);
app.use("/api/servicos", rotasServico);
app.use("/api/verificacao", rotasVerificacao);

// Rota de teste/saúde
app.get("/", (req, res) => {
  res.send("API no ar");
});

// Inicia servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`\nServidor rodando em: http://localhost:${PORT}`))

// Conecta ao banco
bd.conectarBD();
