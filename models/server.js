const express = require('express')
const cors = require('cors')

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        //rutas por defecto golables instancias
        this.usuariosPath = '/api/usuarios';
        //Middlewares
        this.middlewares();
        //Rutas ed mi applicacion
        this.routes();
    }

    middlewares() {
        //CORS PROTEGER RUTAS
        this.app.use(cors());
        //lectura y parseo del body
        this.app.use(express.json());
        //Directorio publico
        this.app.use(express.static('public'))
    }

    routes() {
        //middleware condicionale lo q pase por este pat lo rdirige al require
        this.app.use(this.usuariosPath, require('../routes/usuarios'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Example app listening on port ${this.port}`)
        })
    }
}

module.exports = Server;
