"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDietas = getDietas;
exports.getDietasxID = getDietasxID;
exports.deleteDieta = deleteDieta;
exports.postDieta = postDieta;
exports.putDieta = putDieta;
const connection_1 = __importDefault(require("../db/connection"));
function getDietas(req, res) {
    connection_1.default.query('SELECT * FROM dieta', (err, data) => {
        if (err)
            throw err;
        res.json(data);
        msg: "ListadoDietas";
    });
}
function getDietasxID(req, res) {
    const { cod } = req.params;
    connection_1.default.query('SELECT * FROM dieta WHERE cod_dieta = ?', cod, (err, data) => {
        if (err)
            throw err;
        res.json(data);
        msg: "ListadoDietaxID";
    });
}
function deleteDieta(req, res) {
    const { cod } = req.params;
    connection_1.default.query('DELETE FROM dieta WHERE cod_dieta = ?', cod, (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: 'Dieta eliminada con exito'
        });
    });
}
function postDieta(req, res) {
    const { body } = req;
    connection_1.default.query('INSERT INTO dieta set ?', [body], (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: 'Dieta agregada con exito'
        });
    });
}
function putDieta(req, res) {
    const { body } = req;
    const { cod } = req.params;
    connection_1.default.query('UPDATE dieta set ? WHERE cod_dieta = ? ', [body, cod], (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: "Dieta actualizada con exito"
        });
    });
}
