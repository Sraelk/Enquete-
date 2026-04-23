const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

let votos = [];

app.get("/votes", (req,res)=>{
 res.json(votos);
});

app.post("/vote", (req,res)=>{
 votos.push({ id: Date.now(), ...req.body });
 res.sendStatus(200);
});

// Rota raiz
app.get("/", (req, res) => {
 res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>console.log(`Servidor rodando na porta ${PORT}`));
