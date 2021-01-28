import { Router } from 'express';
import create from './create';
import updateById from './updateById';
import searchById from './searchById';
import deleteById from './deleteById';
import addBookById from './addBookById';
import search from './search';

const router = Router();

router.post('/', create); // POST localhost:5000/author/createAuthor
router.post('/search', search);
router.patch('/:authorId', updateById); // PATCH localhost:5000/author/updateAuthorById
router.put('/:authorId', addBookById); // PATCH localhost:5000/author/updateAuthorById
router.get('/:authorId', searchById); // GET localhost:5000/author/updateAuthorById
router.delete('/:authorId', deleteById); // DELETE localhost:5000/author/updateAuthorById

export default router;
