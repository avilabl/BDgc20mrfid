"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsuarios = getUsuarios;
exports.getUsuario = getUsuario;
exports.deleteUsuario = deleteUsuario;
exports.postUsuario = postUsuario;
exports.putUsuario = putUsuario;
const connection_1 = __importDefault(require("../db/connection"));
function getUsuarios(req, res) {
    connection_1.default.query('SELECT * FROM usuario', (err, data) => {
        if (err)
            throw err;
        res.json(data);
        msg: "ListadoUsuarios";
    });
}
function getUsuario(req, res) {
    const { id } = req.params;
    connection_1.default.query('SELECT * FROM usuario WHERE idusuario = ?', id, (err, data) => {
        if (err)
            throw err;
        res.json(data);
        msg: "ListadoUsuarioxID";
    });
}
function deleteUsuario(req, res) {
    const { id } = req.params;
    connection_1.default.query('DELETE FROM usuario WHERE idusuario = ?', id, (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: 'Usuario eliminado con exito'
        });
    });
}
function postUsuario(req, res) {
    const { body } = req;
    connection_1.default.query('INSERT INTO usuario set ?', [body], (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: 'Usuario agregado con exito'
        });
    });
}
function putUsuario(req, res) {
    const { body } = req;
    const { id } = req.params;
    connection_1.default.query('UPDATE usuario set ? WHERE idusuario = ? ', [body, id], (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: "Usuario actualizado con exito"
        });
    });
}
