<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Municípios por Estado - IBGE</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #f4f4f4;
      padding: 20px;
    }

    h1 {
      color: #333;
    }

    select, ul {
      margin-top: 10px;
      width: 300px;
      font-size: 16px;
      padding: 8px;
    }

    ul {
      list-style-type: none;
      padding: 0;
      margin-top: 20px;
      background: #fff;
      border: 1px solid #ccc;
      max-height: 400px;
      overflow-y: auto;
    }

    li {
      padding: 8px;
      border-bottom: 1px solid #eee;
    }

    li:last-child {
      border-bottom: none;
    }
  </style>
</head>
<body>

  <h1>Municípios por Estado (IBGE)</h1>

  <label for="estado">Selecione o estado:</label>
  <select id="estado">
    <option value="">-- Escolha uma UF --</option>
  </select>

  <ul id="lista-municipios"></ul>

  <script>
    const estadoSelect = document.getElementById('estado');
    const listaMunicipios = document.getElementById('lista-municipios');

    // Carregar os estados no select
    async function carregarEstados() {
      const res = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome');
      const estados = await res.json();

      estados.forEach(estado => {
        const option = document.createElement('option');
        option.value = estado.id; // código da UF
        option.textContent = `${estado.sigla} - ${estado.nome}`;
        estadoSelect.appendChild(option);
      });
    }

    // Carregar municípios ao selecionar um estado
    estadoSelect.addEventListener('change', async function () {
      const uf = this.value;
      listaMunicipios.innerHTML = '';

      if (!uf) return;

      const res = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios?orderBy=nome`);
      const municipios = await res.json();

      municipios.forEach(m => {
        const li = document.createElement('li');
        li.textContent = m.nome;
        listaMunicipios.appendChild(li);
      });
    });

    // Inicializar
    carregarEstados();
  </script>

</body>
</html>
