import {Router} from 'express';

import { getRanquing, postInsertRanking, getTopRanquing } from '../controllers/ranquing.controller';
const router = Router();


router.route('/:id')
    .get(getRanquing);
router.route('/list/:id')
    .get(getTopRanquing);

router.route('/')
    .post(postInsertRanking);


export default router;