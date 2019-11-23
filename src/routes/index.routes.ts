import { Router } from 'express';
const router = Router();

import {indexBienvenida} from '../controllers/index.controller'

router.route('/')
    .get(indexBienvenida);
export default router;