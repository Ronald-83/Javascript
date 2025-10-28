const ProdutosModel = require('../models/ProdutosModel');
module.exports = {

  produtos: (req, res) => {
    res.sendFile('produtos.html', { root: './views'});
  },

  camisetas: (req, res) => {
    res.sendFile('camisetas.html', { root: './views'});
  },

  Formcadastrar: (req, res) => {
    res.sendFile('Formcadastrar.html', { root: './views'});
  },

  cadastrar: (req, res) => {
    const { ID, Descrição, Quantidade, Preço } = req.body;
    res.send(ProdutosModel.gerarCadastro(ID, Descrição, Quantidade, Preço));
  },
};