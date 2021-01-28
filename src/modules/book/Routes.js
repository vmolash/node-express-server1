import { Router } from 'express';
import bookCreate from './bookCreate';
import bookUpdateById from './bookUpdateById';
import bookGetById from './bookGetById';
import bookDeleteById from './bookDeleteById';
import bookDeleteAll from './bookDeleteAll';
import bookUpdateAuthorById from './bookUpdateAuthorById';
import search from './search';

const router = Router();

router.post('/', bookCreate); // POST localhost:5000/book/createBook
router.post('/search', search); // POST localhost:5000/book/search
router.patch('/:bookId', bookUpdateById); // PATCH localhost:5000/book/updateBookById
router.get('/:bookId', bookGetById); // GET localhost:5000/book/updateBookById
router.delete('/:bookId', bookDeleteById); // DELETE localhost:5000/book/updateBookById
router.delete('/', bookDeleteAll);

router.patch('/:bookId/update', bookUpdateAuthorById);

export default router;
