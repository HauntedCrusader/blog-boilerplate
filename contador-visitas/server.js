const express = require("express");
const cors = require("cors");
const db = require("./db");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// Incrementa +1 e retorna o total atualizado
app.post("/visitas", async (req, res) => {
  try {
    const result = await db.query(`
      UPDATE contador_visitas
      SET total_visitas = total_visitas + 1
      WHERE id = 1
      RETURNING total_visitas;
    `);

    res.json({
      total_visitas: result.rows[0].total_visitas,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao atualizar contador" });
  }
});

// Apenas consulta o total atual
app.get("/visitas", async (req, res) => {
  try {
    const result = await db.query(`
      SELECT total_visitas
      FROM contador_visitas
      WHERE id = 1;
    `);

    res.json({
      total_visitas: result.rows[0].total_visitas,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar contador" });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});