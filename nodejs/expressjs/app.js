//importe o express
import express from "express";

const app = express();
const PORT = 3000;

//middleware para definir o cabeçalho da resposta como html
app.use((req, res, next) => {
  res.setHeader("Content-Type", "text/html");
  next();
});

//roteamento basico
app.get("/", (req, res) => {
  res.status(200).send("<h1>Pagina inicial</h1>");
});     

app.get("/sobre", (req, res) => {
  res.status(200).send("<h1>Pagina sobre</h1>");
});         

app.get("/contato", (req, res) => {
  res.status(200).send("<h1>fale conosco</h1>");
});

app.get("/fotos", (req, res) => {
  res.status(200).send("<h1>fotos</h1><img src='https://assets.goal.com/images/v3/blt77343c47650bbfc1/2342f72fb9136c85780213e2ad65de2843a40911.jpg?auto=webp&format=pjpg&width=1080&quality=60'");
});

//rota para tratar paginas nao encontradas
app.use((req, res) => {
  res.status(404).send("<h1>Pagina nao encontrada</h1>");
});

//iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});