const fs = require('fs');//importa o módulo nativo de sistema de arquivos

fs.readFile('example.txt', 'utf8', (err, data) => {//lê o conteúdo de um arquivo de forma assíncrona
    if (err) {//trata erros na leitura do arquivo
        console.error('Error reading file:', err);//exibe o erro no console
        return;//sai da função em caso de erro
    }
    console.log('File contents:', data);//exibe o conteúdo do arquivo no console
});

console.log('This is a simple Node.js application.');//mensagem simples para indicar que o app está rodando