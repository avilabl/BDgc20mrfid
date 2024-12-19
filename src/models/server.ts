import e from 'express';
import express from 'express';
import routesUsuarios from '../routes/usuario.routes'
import routesDietas from '../routes/dieta.routes'
import routesCicloAlimentacion from '../routes/cicloAlimentacion.routes'
import routesAnimales from '../routes/animal.routes'
import routesEstaciones from '../routes/estacion.routes'
import routesHistoriales from '../routes/historial.routes'
import connection from '../db/connection';
import cors from 'cors';

export default class Server {
    private app: express.Application;
    private port: string;


    constructor(){
        this.app = express();
        this.port = process.env.PORT || '4000';
        this.middlewares();
        this.conectarDB();
        this.routes();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Aplicacion corriendo por el puerto ', this.port);
        })
    }

    middlewares() {
        //Parseo del body
        this.app.use(express.json());

        //cors

        this.app.use(cors());
        
    }

    routes(){
        this.app.use('/api/usuario', routesUsuarios);
        this.app.use('/api/dieta', routesDietas);
        this.app.use('/api/cicloalimentacion', routesCicloAlimentacion);
        this.app.use('/api/animal', routesAnimales);
        this.app.use('/api/estacion', routesEstaciones);
        this.app.use('/api/historial', routesHistoriales);
    }

    conectarDB(){
        connection.connect((err) => {
            if(err) throw err;
            console.log("Conexion correcta de la base de datos");
        })
    }

}