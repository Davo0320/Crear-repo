// Importa las dependencias
const express = require('express');
const mysql = require('mysql');

// Crea una instancia de Express
const app = express();

// Configura el puerto en el que se ejecutará el servidor
const port = 3000;

// Crea una conexión a la base de datos MySQL (debes proporcionar tus propios datos de conexión)
const db = mysql.createConnection({
  host: 'tu-host',
  user: 'tu-usuario',
  password: 'tu-contraseña',
  database: 'tu-base-de-datos',
});

// Conecta a la base de datos
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Conexión a la base de datos MySQL establecida');
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

app.get('/api/articulos', (req,res)=>{
  conexion.query('SELECT * FROM articulos', (error,filas)=>{
    if(error){
        throw error;
    }else{
        res.send(filas);
    }
});
});
