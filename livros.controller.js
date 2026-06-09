let livros = [];

exports.listarLivros = (req, res) => {
    res.json(livros);
};

exports.buscarLivro = (req, res) => {
    const id = req.params.id;
    const livro = livros.find(l => l.id == id);

    if (!livro) {
        return res.status(404).json({ mensagem: "Livro não encontrado" });
    }

    res.json(livro);
};

exports.cadastrarLivro = (req, res) => {
    const novoLivro = req.body;
    livros.push(novoLivro);

    res.json({ mensagem: "Livro cadastrado com sucesso" });
};

exports.atualizarLivro = (req, res) => {
    res.json({ mensagem: "Livro atualizado com sucesso" });
};

exports.removerLivro = (req, res) => {
    res.json({ mensagem: "Livro removido com sucesso" });
};