console.log('holis');

const express = require("express");
const app = express();
var puntosFijos = "https://datos.madrid.es/egob/catalogo/200284-0-puntos-limpios.xml";


app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
})

app.get(puntosFijos, (req, res) => {
    res.json(puntosFijos);
    
})
const port = 5000;
app.listen(port, () => console.log(`Server started on port ${port}`))
