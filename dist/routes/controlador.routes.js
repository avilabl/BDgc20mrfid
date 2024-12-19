"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controlador_controller_1 = require("../controllers/controlador.controller");
const router = (0, express_1.Router)();
router.get('/usuario/:id', controlador_controller_1.getControladoresDuenio);
router.get('/', controlador_controller_1.getControladores);
router.post('/', controlador_controller_1.postControlador);
router.put('/:id', controlador_controller_1.putControlador);
exports.default = router;