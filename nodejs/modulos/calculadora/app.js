//const funcoesMatematicas = require('./funcoes_matematicas');
import {somar,subtrair,multiplicar,dividir} from './modulos/funcoes_matematicas.js';
import * as calculadora_idade from './modulos/calculadora_idade.js';


// Exemplo de uso:
console.log("Soma: " + somar(2, 3));
console.log("Subtração: " + subtrair(5, 2));
console.log("Multiplicação: " + multiplicar(4, 6));
console.log("Divisão: " + dividir(10, 2));

console.log(calculadora_idade.calcularIdade("João", 1912, 2025));