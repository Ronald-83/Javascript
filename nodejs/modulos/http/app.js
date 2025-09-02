const http = require('http');//importa o módulo nativo de HTTP

http.createServer((req, res) => {//cria um servidor HTTP
  res.writeHead(200, { 'Content-Type': 'text/plain' });//define o cabeçalho da resposta
  res.end('Hello, World!\n');//envia a resposta ao cliente
}).listen(8080);//faz o servidor escutar na porta 8080