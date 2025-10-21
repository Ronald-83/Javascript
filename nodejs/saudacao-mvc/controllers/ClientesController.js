module.exports = {

  clientes: (req, res) => {
    res.sendFile('clientes.html', { root: './views' });
  },
  
  logado: (req, res) => {
    const nome = req.body.nome;
    res.send(`Cliente ${nome} está logado no sistema.`);
  }

};
