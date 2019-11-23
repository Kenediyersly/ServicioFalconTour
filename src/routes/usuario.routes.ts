import {Router} from 'express';
const router = Router();

import {getUsuario, postInsertUserAndPerson} from '../controllers/usuario.controller'

router.route('/:u&p=:p')
    .get(getUsuario);
router.route('/')
    .post(postInsertUserAndPerson);

export default router;