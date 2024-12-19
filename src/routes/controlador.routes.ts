import {Router} from 'express';
import { getControladores, getControladoresDuenio, postControlador, putControlador } from '../controllers/controlador.controller';
const router = Router();

router.get('/usuario/:id', getControladoresDuenio);
router.get('/', getControladores)
router.post('/', postControlador)
router.put('/:id', putControlador)

export default router;