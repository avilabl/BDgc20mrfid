"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDias = getDias;
exports.deleteDiaAlimentacion = deleteDiaAlimentacion;
exports.postDiaAlimentacion = postDiaAlimentacion;
const connection_1 = __importDefault(require("../db/connection"));
function getDias(req, res) {
    connection_1.default.query('select * FROM diaalimentacion', (err, data) => {
        if (err)
            throw err;
        res.json(data);
    });
}
function deleteDiaAlimentacion(req, res) {
    const { iddiaalimentacion } = req.params;
    res.json({
        msg: "DeleteDiaAlimentacion",
        iddiaalimentacion: iddiaalimentacion
    });
}
function postDiaAlimentacion(req, res) {
    console.log(req.body);
    res.json({
        msg: "PostDiaAlimentacion",
        body: req.body
    });
}
