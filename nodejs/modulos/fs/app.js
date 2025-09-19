//const fs = require('fs');

import fs from 'fs';//importa o módulo nativo de sistema de arquivos (ESM)
fs.readFile('example.txt', 'utf8', (erro, data) => {//lê o conteúdo de um arquivo de forma assíncrona
    if (erro) {//trata erros na leitura do arquivo
        console.error('Error reading file:', erro);//exibe o erro no console
        return;//sai da função em caso de erro
    }
    console.log('File contents:', data);//exibe o conteúdo do arquivo no console
});

console.log('This is a simple Node.js application.');//mensagem simples para indicar que o app está rodando