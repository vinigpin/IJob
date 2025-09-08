const twilio = require("twilio");
const express = require("express");
const router = express.Router();

const accountSid = "AC29f65de6b304039c61bace2dbe9762d3";
const authToken = "71999da87f9da4daa3150fe928596f09"; 
const verifyServiceSid = "VA0560e43cee8afeffcab3c854ed6b0571";
const client = twilio(accountSid, authToken);

router.post("/enviar", async (req, res) => {
  const { numero } = req.body;

  try {
    const verification = await client.verify.v2
      .services(verifyServiceSid)
      .verifications.create({ to: numero, channel: "sms" });

    res.json({ status: verification.status, sid: verification.sid });
  } catch (error) {
    console.error("Erro ao enviar:", error);
    res.status(500).json({ error: error.message });
  }
});

router.post("/verificar", async (req, res) => {
  const { numero, codigo } = req.body;

  try {
    const check = await client.verify.v2
      .services(verifyServiceSid)
      .verificationChecks.create({ to: numero, code: codigo });

    if (check.status === "approved") {
      res.json({ success: true, message: "Número verificado com sucesso" });
    } else {
      res.json({ success: false, message: "Código incorreto" });
    }
  } catch (error) {
    console.error("Erro ao verificar:", error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;