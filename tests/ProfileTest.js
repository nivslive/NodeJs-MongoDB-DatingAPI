import request from 'supertest';
import app from './app'; 

describe('Testes para a aplicação Express', () => {
  it('Deve retornar perfis existentes ao chamar GET /perfis', async () => {
    const response = await request(app).get('/perfis');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(perfis);
  });

  it('Deve adicionar um novo perfil ao chamar POST /perfil', async () => {
    const novoPerfil = { name: 'novoUsuario' };
    const response = await request(app)
      .post('/perfil')
      .send(novoPerfil);

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      mensagem: 'Perfil criado com sucesso',
      perfil: novoPerfil,
    });

    // Verifica se o novo perfil foi adicionado ao array 'perfis'
    expect(perfis).toContainEqual(novoPerfil);
  });
});