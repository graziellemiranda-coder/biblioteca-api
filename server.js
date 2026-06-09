const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// IMPORTAR ROTAS 
const livrosRoutes = require("./src/routes/livros.routes");
const autoresRoutes = require("./src/routes/autores.routes");

// USAR ROTAS 
app.use(livrosRoutes);
app.use(autoresRoutes);

// teste
app.get("/", (req, res) => {
    res.send("FUNCIONOU");
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
