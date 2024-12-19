"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDosis = getDosis;
exports.putDosis = putDosis;
exports.postDosis = postDosis;
exports.deleteDosis = deleteDosis;
const connection_1 = __importDefault(require("../db/connection"));
function getDosis(req, res) {
    connection_1.default.query('select * FROM dosis', (err, data) => {
        if (err)
            throw err;
        res.json(data);
    });
}
function putDosis(req, res) {
    const { body } = req;
    const { iddosis } = req.params;
    res.json({
        msg: "putDosis",
        body: body,
        iddosis: iddosis
    });
}
function postDosis(req, res) {
    console.log(req.body);
    res.json({
        msg: "PostDosis",
        body: req.body
    });
}
function deleteDosis(req, res) {
    const { iddosis } = req.params;
    res.json({
        msg: "DeleteDosis",
        iddosis: iddosis
    });
}
