"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAnimales = getAnimales;
exports.getAnimal = getAnimal;
exports.deleteAnimal = deleteAnimal;
exports.postAnimal = postAnimal;
exports.putAnimal = putAnimal;
exports.getAnimalesEstacion = getAnimalesEstacion;
exports.getDietasDeAnimales = getDietasDeAnimales;
exports.asignarDietaAnimal = asignarDietaAnimal;
const connection_1 = __importDefault(require("../db/connection"));
function getAnimales(req, res) {
    connection_1.default.query('SELECT * FROM animal', (err, data) => {
        if (err)
            throw err;
        res.json(data);
    });
}
function getAnimal(req, res) {
    const { id } = req.params;
    connection_1.default.query('SELECT * FROM animal WHERE caravana = ?', id, (err, data) => {
        if (err)
            throw err;
        res.json(data);
        msg: "ListadoAnimalxID";
    });
}
function deleteAnimal(req, res) {
    const { id } = req.params;
    connection_1.default.query('DELETE FROM animal WHERE caravana = ?', id, (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: 'Animal eliminado con exito'
        });
    });
}
function postAnimal(req, res) {
    const { body } = req;
    connection_1.default.query('INSERT INTO animal set ?', [body], (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: 'Animal agregado con exito'
        });
    });
}
function putAnimal(req, res) {
    const { body } = req;
    const { id } = req.params;
    connection_1.default.query('UPDATE animal set ? WHERE caravana = ? ', [body, id], (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: "Animal actualizado con exito"
        });
    });
}
function getAnimalesEstacion(req, res) {
    const { id } = req.params;
    connection_1.default.query("SELECT a.caravana FROM animal a WHERE a.estacion = ?", id, (err, data) => {
        if (err)
            throw err;
        res.json(data);
        msg: "Caravanas que pertenecen a la estacion seleccionada";
    });
}
function getDietasDeAnimales(req, res) {
    const { id } = req.params;
    connection_1.default.query(" SELECT d.* FROM animal a JOIN animal_dieta ad ON a.caravana = ad.cod_animal JOIN dieta d ON ad.cod_dieta = d.cod_dieta WHERE a.caravana = ?", id, (err, data) => {
        if (err)
            throw err;
        res.json(data);
        msg: "Datos de Dieta de caravana seleccionada";
    });
}
function asignarDietaAnimal(req, res) {
    const { caravana } = req.params;
    const { iddieta } = req.body;
    //Consulta para agregar los datos automaticos a la tabla intermedia
    connection_1.default.query('INSERT INTO animal_dieta (cod_animal, cod_dieta) VALUES (?, ?)', [caravana, iddieta], (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: 'Dieta agregada al Animal'
        });
    });
}
