const { subtrair } = require('./funcoes_matematica');

/**
 * Calcula a idade com base no ano de nascimento.
 * @param {number} anoNascimento - O ano de nascimento.
 * @returns {number} - A idade atual.
 */
function calcularIdade(anoNascimento) {
    const anoAtual = new Date().getFullYear();
    return subtrair(anoAtual, anoNascimento);
}

// Exemplo de uso:
const anoNascimento = 2000;
console.log(`Idade: ${calcularIdade(anoNascimento)}`);

module.exports = {
    calcularIdade
};