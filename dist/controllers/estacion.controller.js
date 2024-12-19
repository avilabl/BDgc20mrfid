"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEstacionesDuenio = getEstacionesDuenio;
exports.postEstacion = postEstacion;
exports.getEstaciones = getEstaciones;
const connection_1 = __importDefault(require("../db/connection"));
function getEstacionesDuenio(req, res) {
    const { id } = req.params;
    connection_1.default.query("SELECT e.cod_estacion FROM estacion e WHERE e.usuario = ?", id, (err, data) => {
        if (err)
            throw err;
        res.json(data);
        msg: "Usuario al que pertenece la estacion";
    });
}
function postEstacion(req, res) {
    const { body } = req;
    connection_1.default.query('INSERT INTO estacion set ?', [body], (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: 'Estacion agregada con exito'
        });
    });
}
function getEstaciones(req, res) {
    connection_1.default.query('SELECT * FROM estacion', (err, data) => {
        if (err)
            throw err;
        res.json(data);
        msg: "ListadoEstaciones";
    });
}
