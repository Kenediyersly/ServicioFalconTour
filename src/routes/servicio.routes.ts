import {Router} from 'express';
import { getServicios } from '../controllers/service.controller';
const router = Router();

router.route('/:b')
    .get(getServicios);


export default router;