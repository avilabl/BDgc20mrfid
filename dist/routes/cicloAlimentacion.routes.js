"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cicloAlimentacion_controller_1 = require("../controllers/cicloAlimentacion.controller");
const router = (0, express_1.Router)();
router.get('/', cicloAlimentacion_controller_1.getCiclos);
router.get('/:id', cicloAlimentacion_controller_1.getCicloxID);
router.post('/', cicloAlimentacion_controller_1.postCiclos);
router.delete('/:id', cicloAlimentacion_controller_1.deleteCiclo);
router.put('/:id', cicloAlimentacion_controller_1.putCiclo);
router.get('/estacion/:idestacion', cicloAlimentacion_controller_1.getCiclosdeEstacion);
exports.default = router;
