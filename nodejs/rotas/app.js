//importa o modulo http nativo do nodejs
import { stat } from 'fs';
import http from 'http';

const PORT = 3000;

//cria o servidor
const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    //define o cabeçalho da resposta
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    if (url === '/') {
        res.statusCode = 200;
        res.end('<h1>Home Page</h1>');

    } else if (url === '/sobre' && method === 'GET') {
        res.statusCode = 200;
        res.end('<h1>Sobre Nós</h1>');
        
    } else if (url === '/contato') {
        res.statusCode = 200;
        res.end('<h1>fale conosco</h1>');

    } else if (url === '/fotos') {
        res.statusCode = 200;
        res.end('<h1>fotos</h1>');
        
    } else {
        res.statusCode = 404;
        res.end('<h1>Pagina não encontrada</h1>');
    }
});

//define a porta e o host do servidor
server.listen(PORT, 'localhost', () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});    