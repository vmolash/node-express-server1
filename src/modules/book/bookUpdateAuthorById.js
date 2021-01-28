import mongoose from 'mongoose';
import Book from './Model';

export default function bookUpdateAuthorById(req, res) {
  const { bookId } = req.params;

  const authorData = req.body.author;

  let authorId = authorData ? new mongoose.Types.ObjectId() : null;

  const book = {
    authors: authorId ? [authorId] : [],
  };

  delete req.body.password;
  delete req.body.roles;

  Book.findByIdAndUpdate(bookId, book)

    .exec()
    .then(() => {
      res.status(200).json('Book updated');
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('Book not updated');
    })
    .finally(() => {
      console.log('END');
    });
}
