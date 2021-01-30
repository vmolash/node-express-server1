import mongoose from 'mongoose';
import Book from './Model';
import Author from '../author/Model';

export default async function bookCreate(req, res) {
  const _id = new mongoose.Types.ObjectId();
  const authors = req.body.author;

  // Book - ПРОТОТИП, и создаем на основе модели Book экземпляр newBook
  const newBook = new Book({
    _id,
    title: req.body.title,
    author: authors,
  });

  // Update author
  const promises = authors.map(async (author) => {
    await Author.findById(author)
      .exec()
      .then((doc) => {
        if (doc) {
          doc.book = [...doc.book, _id];
          doc.save().catch((err) => {
            console.log(err);
            newBook.author = authors.filter((el) => el !== author);
          });
        } else {
          newBook.author = authors.filter((el) => el !== author);
        }
      })
      .catch((err) => {
        console.log(err);
        newBook.author = authors.filter((el) => el !== author);
      });
  });
  // req.body.author.forEach((author) => {
  await Promise.all(promises);
  // Create book
  newBook
    .save()
    .then(() => {
      res.status(200).json('Book created');
    })
    .catch((err) => {
      console.log('error', err);
      res.status(400).json('Book not created');
    })
    .finally(() => {
      console.log('END');
    });
}
