const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const port = 3000;

app.use(bodyParser.json());

const perfis = [
    {
        'name': 'renato'
    }
];

app.get('/perfis', (req, res) => {
  res.json(perfis);
});

app.post('/perfil', (req, res) => {
  const novoPerfil = req.body;
  perfis.push(novoPerfil);
  res.json({ mensagem: 'Perfil criado com sucesso', perfil: novoPerfil });
});

app.post('/match', (req, res) => {
  const { perfilId, perfilAlvoId } = req.body;

  const perfil = perfis.find(p => p.id === perfilId);
  const perfilAlvo = perfis.find(p => p.id === perfilAlvoId);

  if (!perfil || !perfilAlvo) {
    return res.status(404).json({ mensagem: 'Perfil não encontrado' });
  }

  // Lógica de verificação de match
  if (perfilAlvo.interessadoEm.includes(perfilId) && perfil.interessadoEm.includes(perfilAlvoId)) {
    return res.json({ mensagem: 'Match! Vocês têm interesse mútuo', match: true });
  } else {
    return res.json({ mensagem: 'Sem match. Apenas um interesse unilateral', match: false });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
