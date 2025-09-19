import http from 'http';//importa o módulo HTTP

http.createServer((req, res) => {//cria um servidor HTTP
  res.writeHead(200, { 'Content-Type': 'text/plain' });//define o cabeçalho da resposta
  res.end('Hello, World!');//envia a resposta ao cliente
}).listen(8080);//faz o servidor escutar na porta 8080
console.log('Servidor rodando em http://localhost:8080/');//mensagem no console