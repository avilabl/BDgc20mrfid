import {Router} from 'express';
import { deleteCiclo, getCiclos, getCiclosdeEstacion, getCicloxID, postCiclos, putCiclo } from '../controllers/cicloAlimentacion.controller' ;


const router = Router();
router.get('/', getCiclos);
router.get('/:id', getCicloxID);
router.post('/', postCiclos);
router.delete('/:id', deleteCiclo);
router.put('/:id', putCiclo);
router.get('/estacion/:idestacion', getCiclosdeEstacion)

export default router; 