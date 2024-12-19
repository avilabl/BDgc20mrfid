import {Router} from 'express';
import { deleteHistorial, getHistoriales, getHistorialXID, postHistorial, putHistorial } from '../controllers/historial.controller';

const router = Router();

router.get('/', getHistoriales)
router.get('/:id', getHistorialXID)
router.delete('/:id', deleteHistorial)
router.post('/', postHistorial)
router.put('/:id', putHistorial)

export default router; 