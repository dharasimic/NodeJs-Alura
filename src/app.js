import express from "express";

const app = express();
app.use(express.json());

const livros = [
    {
        id: 1,
        titulo: "A Mansão Hollow",
    },
    {
        id: 2,
        titulo: "Rashoumon",
    }
]

function buscaLivro (id) {
    return livros.findIndex(livro => {
        return livro.id === Number(id);
    });
}

app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.js");
});

app.get("/livros", (req, res) => {
    res.status(200).json(livros);
});

app.get("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    res.status(200).json(livros[index]);
});

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("Livro adicionado com sucesso.");
});

app.put("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).send("Livro atualizado com sucesso."); 
});

export default app;