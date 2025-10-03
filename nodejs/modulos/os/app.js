// Importa o módulo 'os' do Node.js, que fornece informações sobre o sistema operacional
const os = require('os');

// Exibe a arquitetura do sistema operacional (ex: 'x64', 'arm')
console.log('Arquitetura do sistema:', os.arch());

// Exibe a quantidade de CPUs disponíveis no sistema
console.log('Quantidade de CPUs:', os.cpus().length);

// Exibe a quantidade total de memória do sistema em bytes
console.log('Memória total do sistema (bytes):', os.totalmem());

// Exibe a quantidade de memória livre do sistema em bytes
console.log('Memória livre do sistema (bytes):', os.freemem());

// Exibe a plataforma do sistema operacional (ex: 'linux', 'win32', 'darwin')
console.log(os.platform());