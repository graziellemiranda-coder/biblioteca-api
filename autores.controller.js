let autores = [];

exports.listarAutores = (req, res) => {
    res.json(autores);
};

exports.cadastrarAutor = (req, res) => {
    autores.push(req.body);
    res.json({ mensagem: "Autor cadastrado com sucesso" });
};

exports.removerAutor = (req, res) => {
    res.json({ mensagem: "Autor removido com sucesso" });
};