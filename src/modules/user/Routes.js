import { Router } from 'express';
import userRegister from './userRegister';
import userGetAll from './userGetAll';
import userGetById from './userGetById';
import userUpdateById from './userUpdateById';
import userDeleteById from './userDeletetById';
import userDeleteAll from './userDeleteAll';

const router = Router();

router.post('/', userRegister); // POST localhost:5000/user/
router.get('/', userGetAll); // GET localhost:5000/user
router.get('/:userId', userGetById);
router.patch('/:userId', userUpdateById);
router.delete('/:userId', userDeleteById);
router.delete('/', userDeleteAll);

export default router;
