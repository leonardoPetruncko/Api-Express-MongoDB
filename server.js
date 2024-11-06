import http from "http";

const port = 3000;

const rotas = {
    "/": "Curso de Node.js",
    "/livros": "Rota dos livros",
    "/autores": "Rota autores"
}

const server = http.createServer((req , res) => {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end(rotas[req.url]);
});

server.listen(port,() => {
    console.log("Servidor operando!");
});