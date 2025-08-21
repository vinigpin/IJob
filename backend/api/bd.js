
require(".env").config();
const mongo = require("mongoose");

mongoose.connect(process.env.CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("Conectado"))
.catch(err => console.error("Erro ao conectar:", err));

