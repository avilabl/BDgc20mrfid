import {Router} from 'express';
import { getEstaciones, getEstacionesDuenio, postEstacion } from '../controllers/estacion.controller';
import { getAnimales } from '../controllers/animal.controller';

const router = Router();

router.get('/usuario/:id', getEstacionesDuenio);
router.get('/', getEstaciones)
router.post('/', postEstacion)
export default router;