import mongoose from 'mongoose';
import Author from './Model';
import Book from '../book/Model';

export default function authorCreate(req, res) {
  const _id = new mongoose.Types.ObjectId();
  const { name } = req.body;

  const newAuthor = new Author({
    _id,
    name,
    book: req.body.book,
  });

  req.body.book.forEach((book) => {
    Book.findById(book)
      .exec()
      .then((doc) => {
        doc.author = [...doc.author, _id];
        doc.save().catch((err) => {
          console.log(err);
        });
      });
  });

  newAuthor
    .save()
    .then(() => {
      res.status(200).json('Author created');
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('Author create error');
    })
    .finally(() => {
      console.log('End');
    });
}
