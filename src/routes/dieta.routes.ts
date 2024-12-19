import {Router} from 'express';
import { deleteDieta, getDietas, getDietasxID, postDieta, putDieta } from '../controllers/dieta.controller';


const router = Router();

router.get('/', getDietas);
router.get('/:cod', getDietasxID);
router.delete('/:cod', deleteDieta);
router.post('/', postDieta);
router.put('/:cod', putDieta);

export default router; 