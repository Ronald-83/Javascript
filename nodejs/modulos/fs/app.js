// Importa o módulo 'fs' (File System)
//const fs = require('fs')

import fs from 'fs'
// Lê o arquivo 'example.txt' de forma assíncrona, usando codificação 'utf8'
fs.readFile('example.txt', 'utf8', (erro, conteudo_do_arquivo) => {
    // Se ocorrer um erro ao ler o arquivo, exibe a mensagem de erro no console
    if (erro) {
        console.error('Error reading file:', erro)
        return // Encerra a execução da função de callback
    }
    // Se não houver erro, exibe o conteúdo do arquivo no console
    console.log('File contents:', conteudo_do_arquivo)
})

// Exibe uma mensagem no console antes da leitura do arquivo ser concluída
console.log('Essa mensagem aparece primeiro, antes do conteúdo do arquivo ser lido.')