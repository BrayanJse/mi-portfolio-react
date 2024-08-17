const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Sirve archivos estáticos desde el directorio 'dist' o 'build'
app.use(express.static(path.join(__dirname, 'dist')));

console.log(path.join(__dirname))

// Maneja todas las rutas, redirigiendo a 'index.html'
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
