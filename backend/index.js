

const bd = require("../backend/config/bd");

const express = require("express");
const cors = require("cors");


const app = express();
app.use(cors());
app.use(express.json());

const rotasU = require("../backend/routes/rotasUsuario");
const rotasA = require("../backend/routes/rotasAvaliacao");
const rotasC = require("../backend/routes/rotasCategoria");
const rotasS = require("../backend/routes/rotasServico");

app.use("/api", rotasU);
app.use("/api", rotasA);
app.use("/api", rotasC);
app.use("/api", rotasS);


app.get("/", (req, res) => {
  res.send("API no ar");
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));

bd.conectarBD();














// alguma coisa que alguém pegou do chatgpt pra implementar o pix
//const axios = require("axios");

//const API_KEY = "SUA_API_KEY_AQUI"; // pegue no painel do OpenPix

async function gerarPix() {
  try {
    const response = await axios.post(
      "https://api.openpix.com.br/api/openpix/v1/charge",
      {
        correlationID: "pedido-123", // id único para identificar o pagamento
        value: 10000, // valor em centavos (R$ 100,00)
        comment: "Pagamento do Pedido 123",
        customer: {
          name: "Fulano de Tal",
          email: "fulano@email.com",
          taxID: "12345678909" // CPF ou CNPJ
        }
      },
      {
        headers: {
          "Authorization": `Bearer ${API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    console.log("✅ QR Code gerado!");
    console.log("Código copia e cola:", response.data.charge.brCode);
    console.log("QR Code base64:", response.data.charge.pixQrCode);
  } catch (error) {
    console.error("❌ Erro ao gerar Pix:", error.response?.data || error.message);
  }
}

//gerarPix();
