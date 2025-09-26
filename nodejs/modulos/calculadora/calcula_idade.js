export function calculaIdade(anoNascimento, anoAtual, nome) {
    const idade = anoAtual - anoNascimento;
    return `Ola ${nome}! Em ${anoAtual} você terá ${idade} anos!`;
}