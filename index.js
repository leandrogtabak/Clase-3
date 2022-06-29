const express = require('express');

const app = express();

const PORT = 8081;
let countVisitors = 0;

const server = app.listen(PORT, () => {
  console.log(`Servidor http corriendo en el puerto ${server.address().port}`);
});

app.get('/', (req, res) => {
  res.send('<h1 style="color:blue;">Hola mundo!!</h1>');
});

app.get('/visitas', (req, res) => {
  countVisitors++;
  res.send('La cantidad de visitas es ' + countVisitors);
});

app.get('/fyh', (req, res) => {
  res.send({ fyh: new Date().toLocaleString() });
});

server.on('error', (error) => console.log(`Error en el servidor: ${error}`));
