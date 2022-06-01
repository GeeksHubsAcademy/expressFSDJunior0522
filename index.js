
//Requiero o importo express desde las librerías en node_modules
const express = require('express');

const port = 3000;

//Instancio express... a partir de ahora, con app accedo a los métodos de express
const app = express();

//MIDDLEWARE

app.use(express.json());


//API ENDPOINTS CRUD


app.get('/', (req, res) => res.send("A Oscar le gusta SOAD"));
app.get('/peor', (req, res) => res.send("Oscar odia a los Island Boys"));

app.post('/peor', (req, res) => res.json({Salutation: "Hola que tal? soy Colosal"}));

app.get('/login', (req, res) => res.send("Oscar está en el endpoint de login"));

app.post('/', (req, res) =>  {
    let cuerpo = req.body;

    res.send(cuerpo.modelo);
});

app.put('/', (req, res) => {
    let cuerpo = req.body;

    res.send(cuerpo);
});

///////////////////////////////

app.listen(port, ()=> console.log(`Servidor levantado en el puerto ${port}`));