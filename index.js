const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
require("./db");

//settings
app.set("port", process.env.PORT || 5000);

//middlewares
app.use(morgan("dev"));
app.use(cors());

app.use(express.json());

//routes
app.use("/api/", require("./routes/alumnos"));

//start server
app.listen(app.get('port'), () => {
    console.log(`Servidor conectado en el puerto ${app.get('port')}`);
});