// Importando as dependências
const express = require('express');
const app = express();
const port = 3000;

// Dados simulados para verificação
const users = [
  { username: 'tysaiw', email: 'tysaiw@gmail.com', password: '123456789' },
  { username: 'admin', email: 'admin@gmail.com', password: 'admin' },
  {
    username: "paduh",
    email: "LZz2N18D05gl4uITLec4HakOv@LZz2N18D05gl4uITLec4HakOv.com",
    password: "LZz2N18D05gl4uITLec4HakOv"
  }
];

// Rota de verificação
app.get('/api', (req, res) => {
  const { username, email, password } = req.query;

  // Verificar se senha foi fornecida
  if (!password) {
    return res.status(400).json({ error: 'Senha é obrigatória.' });
  }

  // Verificar se username ou email foi fornecido
  if (!username && !email) {
    return res.status(400).json({ error: 'Username ou email é obrigatório.' });
  }

  // Verificar usuário no array
  const user = users.find(
    (u) => (username && u.username === username) || (email && u.email === email)
  );

  // Se usuário não foi encontrado
  if (!user) {
    return res.status(404).json({ error: 'Usuário não encontrado.' });
  }

  // Verificar se a senha está correta
  if (user.password !== password) {
    return res.status(401).json({ error: 'Senha incorreta.' });
  }

  // Responder com sucesso
  return res.json({ status: 'ok', user: { username: user.username, email: user.email } });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});