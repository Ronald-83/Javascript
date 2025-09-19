import {soma, diminui, multiplica, divide} from './funcoes_matematicas.js';
import * as idade from './calcula_idade.js';

console.log('Soma =', soma(2, 3, 4));
console.log('Subtração =', diminui(5, 2));
console.log('Multiplicação =', multiplica(4, 3));
console.log('Divisão =', divide(10, 2));

console.log('Sua idade =', idade.calculaIdade(1982));