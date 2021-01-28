import { Router } from 'express';
import createBase from './create';
import updateBaseById from './updateById';
import searchById from './searchById';
import deleteById from './deleteById';
import search from './search';

const router = Router();

router.post('/', createBase); // POST localhost:5000/base/createBase
router.post('/search', search);
router.patch('/:baseId', updateBaseById); // PATCH localhost:5000/base/updateBaseById
router.get('/:baseId', searchById); // GET localhost:5000/base/updateBaseById
router.delete('/:baseId', deleteById); // DELETE localhost:5000/base/updateBaseById

export default router;
