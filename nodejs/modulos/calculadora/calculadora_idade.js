export function calcularIdade(nome, anoNascimento, anoAtual) {
    calcularIdade = anoAtual - anoNascimento;
    return `Olá, ${nome}! Em ${anoAtual}, você terá ${calcularIdade} anos!`;
}