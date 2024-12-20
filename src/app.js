import e from "express";

const app = e();
app.use(e.json());

const livros = [
    {
        id: 1,
        titulo: "O Senhor dos Anéis"
    },
    {
        id: 2,
        titulo: "O Hobbit"
    }
]

app.get("/", (req , res) => {
    res.status(200).send("Curso de Node.js");
});

app.get("/livros", (req , res) => {
    res.status(200).json(livros);
});

app.post("/livros", (req , res) => {
    livros.push(req.body)
    res.status(201).send("Livro cadastrado com sucesso")
});

export default app;   