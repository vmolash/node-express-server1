import { Router } from 'express';
import info from './info';

const router = Router();

router.post('/', info); // // localhost:5000/info/

export default router;
