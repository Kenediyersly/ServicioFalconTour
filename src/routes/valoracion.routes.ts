import {Router} from 'express';
import { getValoracion, postInsertValoracion } from '../controllers/valoracion.controller';
const router = Router();


router.route('/:id')
    .get(getValoracion);
router.route('/')
    .post(postInsertValoracion);

export default router;