"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const estacion_controller_1 = require("../controllers/estacion.controller");
const router = (0, express_1.Router)();
router.get('/usuario/:id', estacion_controller_1.getEstacionesDuenio);
router.get('/', estacion_controller_1.getEstaciones);
router.post('/', estacion_controller_1.postEstacion);
exports.default = router;
