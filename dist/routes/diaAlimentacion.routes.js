"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const diaAlimentacion_controller_1 = require("../controllers/diaAlimentacion.controller");
const router = (0, express_1.Router)();
router.get('/', diaAlimentacion_controller_1.getDias);
router.delete('/:iddialimentacion', diaAlimentacion_controller_1.deleteDiaAlimentacion);
router.post('/', diaAlimentacion_controller_1.postDiaAlimentacion);
exports.default = router;
