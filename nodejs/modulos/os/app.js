const os = require('os');//importa o módulo nativo do sistema operacional

console.log('Arquitetura do sistema:', os.arch());//exibe a arquitetura do sistema
console.log('Quantidade de CPUs', os.cpus().length);//exibe a quantidade de CPUs
console.log('Memoria total (bytes)', os.totalmem);//exibe a memória total em bytes
console.log('Memoria livre (bytes)', os.freemem());//exibe a memória livre em bytes
console.log(os.platform());//exibe a plataforma do sistema operacional