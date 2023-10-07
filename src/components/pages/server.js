const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const router = jsonServer.router('db.json');
const port = 3001;

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Adicione uma rota para o formulário comum
server.post('/formularios', (req, res) => {
  const formulario = req.body;
  router.db.get('formularios').push(formulario).write();
  res.status(201).json(formulario);
});

// Adicione uma rota para o formulário do cartão
server.post('/formulariosCartao', (req, res) => {
  const formularioCartao = req.body;
  router.db.get('formulariosCartao').push(formularioCartao).write();
  res.status(201).json(formularioCartao);
});

server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
