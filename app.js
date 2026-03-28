const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Microservicio funcionando 🚀");
});

app.get('/mensaje', (req, res) => {
    res.json({
        mensaje: "Hola desde el backend"
    });
});

app.listen(3000, '0.0.0.0', () => {
    console.log("Servidor en puerto 3000");
});
