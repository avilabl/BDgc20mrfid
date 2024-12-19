import {Router} from 'express';
import { asignarDietaAnimal, deleteAnimal, getAnimal, getAnimales, getAnimalesEstacion, getDietasDeAnimales, postAnimal, putAnimal } from '../controllers/animal.controller';

const router = Router();

router.get('/', getAnimales);
router.get('/:id', getAnimal);
router.delete('/:id', deleteAnimal);
router.post('/', postAnimal);
router.put('/:id', putAnimal);
router.get('/estacion/:id', getAnimalesEstacion)
router.get('/dieta/:id', getDietasDeAnimales)
router.post('/:caravana/dieta', asignarDietaAnimal)

export default router;