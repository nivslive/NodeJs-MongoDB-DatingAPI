import express from 'express';
import bodyParser from 'body-parser';

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


export default app;