function calculaIdade(anoNascimento) {
    const anoAtual = new Date().getFullYear();
    return anoAtual - anoNascimento;
}

module.exports = { calculaIdade };
