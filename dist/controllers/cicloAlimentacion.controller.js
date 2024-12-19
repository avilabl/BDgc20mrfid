"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCiclos = getCiclos;
exports.getCicloxID = getCicloxID;
exports.postCiclos = postCiclos;
exports.deleteCiclo = deleteCiclo;
exports.putCiclo = putCiclo;
exports.getCiclosdeEstacion = getCiclosdeEstacion;
const connection_1 = __importDefault(require("../db/connection"));
function getCiclos(req, res) {
    connection_1.default.query('SELECT * FROM ciclo_alimentacion', (err, data) => {
        if (err)
            throw err;
        res.json(data);
    });
}
function getCicloxID(req, res) {
    const { id } = req.params;
    connection_1.default.query('SELECT * FROM ciclo_alimentacion WHERE codciclo_alimentacion = ?', id, (err, data) => {
        if (err)
            throw err;
        res.json(data);
        msg: "ListadoCiclosxID";
    });
}
function postCiclos(req, res) {
    const { body } = req;
    connection_1.default.query('INSERT INTO ciclo_alimentacion set ?', [body], (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: 'Ciclo agregado con exito'
        });
    });
}
function deleteCiclo(req, res) {
    const { id } = req.params;
    connection_1.default.query('DELETE FROM ciclo_alimentacion WHERE codciclo_alimentacion = ?', id, (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: 'Ciclo eliminado con exito'
        });
    });
}
function putCiclo(req, res) {
    const { body } = req;
    const { id } = req.params;
    connection_1.default.query('UPDATE ciclo_alimentacion set ? WHERE codciclo_alimentacion = ? ', [body, id], (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: "Ciclo actualizado con exito"
        });
    });
}
function getCiclosdeEstacion(req, res) {
    const { idestacion } = req.params;
    connection_1.default.query("SELECT ca.fechaIni FROM ciclo_alimentacion ca WHERE ca.estacion = ?", idestacion, (err, data) => {
        if (err)
            throw err;
        res.json(data);
        msg: "Fecha inicio del ciclo de la estacion";
    });
}
