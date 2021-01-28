import Author from './Model';
import Book from '../book/Model';

export default function addBookById(req, res) {
  const authorId = req.params.authorId;
  const bookId = req.body.book;

  Book.findByIdAndUpdate(bookId, { authors: [authorId] })
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('Book update error');
    });

  Author.findByIdAndUpdate(authorId, { books: [bookId] })
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('Author update error');
    });
}