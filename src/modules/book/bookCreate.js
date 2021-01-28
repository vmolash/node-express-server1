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
  const promises = req.body.author.map((author) => {
    Author.findById(author)
      .exec()
      .then((doc) => {
        if (!doc) {
          newBook.author = authors.filter((el) => el !== author);
        } else {
          Author.findOneAndUpdate({ _id: author }, { $addToSet: { book: _id } })
            .exec()
            .then(() => {
              console.log('author updated');
            })
            .catch(() => {
              console.log('author not updated');
            });
          // doc.book = [...doc.book, _id];
          // doc.save().catch((err) => {
          //   console.log('error catch', err);
          // });
        }
      })
      .catch((err) => {
        console.log(err);
        newBook.author = authors.filter((el) => el !== author);
        // res.status(400).json('Author not updated');
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
