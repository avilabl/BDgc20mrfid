"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getControladoresDuenio = getControladoresDuenio;
exports.postControlador = postControlador;
exports.putControlador = putControlador;
exports.getControladores = getControladores;
const connection_1 = __importDefault(require("../db/connection"));
function getControladoresDuenio(req, res) {
    const { id } = req.params;
    connection_1.default.query("SELECT c.nro_serie FROM controlador c WHERE c.usuario = ?", id, (err, data) => {
        if (err)
            throw err;
        res.json(data);
        msg: "Usuario al que pertenece el controlador";
    });
}
function postControlador(req, res) {
    const { body } = req;
    connection_1.default.query('INSERT INTO controlador set ?', [body], (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: 'Controlador agregado con exito'
        });
    });
}
function putControlador(req, res) {
    const { body } = req;
    const { id } = req.params;
    connection_1.default.query('UPDATE controlador set ? WHERE nro_serie = ? ', [body, id], (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: "Controlador actualizado con exito"
        });
    });
}
function getControladores(req, res) {
    connection_1.default.query('SELECT * FROM controlador', (err, data) => {
        if (err)
            throw err;
        res.json(data);
        msg: "ListadoControladores";
    });
}
