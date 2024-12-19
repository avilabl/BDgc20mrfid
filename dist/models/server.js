"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usuario_routes_1 = __importDefault(require("../routes/usuario.routes"));
const dieta_routes_1 = __importDefault(require("../routes/dieta.routes"));
const cicloAlimentacion_routes_1 = __importDefault(require("../routes/cicloAlimentacion.routes"));
const animal_routes_1 = __importDefault(require("../routes/animal.routes"));
const estacion_routes_1 = __importDefault(require("../routes/estacion.routes"));
const historial_routes_1 = __importDefault(require("../routes/historial.routes"));
const connection_1 = __importDefault(require("../db/connection"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '4000';
        this.middlewares();
        this.conectarDB();
        this.routes();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Aplicacion corriendo por el puerto ', this.port);
        });
    }
    middlewares() {
        //Parseo del body
        this.app.use(express_1.default.json());
        //cors
        this.app.use((0, cors_1.default)());
    }
    routes() {
        this.app.use('/api/usuario', usuario_routes_1.default);
        this.app.use('/api/dieta', dieta_routes_1.default);
        this.app.use('/api/cicloalimentacion', cicloAlimentacion_routes_1.default);
        this.app.use('/api/animal', animal_routes_1.default);
        this.app.use('/api/estacion', estacion_routes_1.default);
        this.app.use('/api/historial', historial_routes_1.default);
    }
    conectarDB() {
        connection_1.default.connect((err) => {
            if (err)
                throw err;
            console.log("Conexion correcta de la base de datos");
        });
    }
}
exports.default = Server;
