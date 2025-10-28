module.exports = {

  clientes: (req, res) => {
    res.sendFile('clientes.html', { root: './views'});
  },

  formulario: (req, res) => {
    res.sendFile('formularioclientes.html', { root: './views'});
  }
};