"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHistoriales = getHistoriales;
exports.getHistorialXID = getHistorialXID;
exports.deleteHistorial = deleteHistorial;
exports.postHistorial = postHistorial;
exports.putHistorial = putHistorial;
const connection_1 = __importDefault(require("../db/connection"));
function getHistoriales(req, res) {
    connection_1.default.query('SELECT * FROM historial', (err, data) => {
        if (err)
            throw err;
        res.json(data);
        msg: "ListadoHistoriales";
    });
}
function getHistorialXID(req, res) {
    const { id } = req.params;
    connection_1.default.query('SELECT * FROM historial WHERE cod_historial = ?', id, (err, data) => {
        if (err)
            throw err;
        res.json(data);
        msg: "ListadoHistorialxID";
    });
}
function deleteHistorial(req, res) {
    const { id } = req.params;
    connection_1.default.query('DELETE FROM historial WHERE cod_historial = ?', id, (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: 'Historial eliminado con exito'
        });
    });
}
function postHistorial(req, res) {
    const { body } = req;
    connection_1.default.query('INSERT INTO historial set ?', [body], (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: 'Historial agregado con exito'
        });
    });
}
function putHistorial(req, res) {
    const { body } = req;
    const { id } = req.params;
    connection_1.default.query('UPDATE historial set ? WHERE cod_historial = ? ', [body, id], (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: "Historial actualizado con exito"
        });
    });
}
