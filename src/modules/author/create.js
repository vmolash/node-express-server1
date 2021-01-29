import mongoose from 'mongoose';
import Author from './Model';
import Book from '../book/Model';

export default async function authorCreate(req, res) {
  const _id = new mongoose.Types.ObjectId();
  const { name } = req.body;

  const newAuthor = new Author({
    _id,
    name,
    book: req.body.book,
  });

  const promises = req.body.book.map(async (book) => {
    Book.findById(book)
      .exec()
      .then((doc) => {
        if (!doc) {
          newAuthor.book = req.body.book.filter((el) => el !== book);
        } else {
          Book.findOneAndUpdate({ _id: book }, { $addToSet: { author: _id } })
            .exec()
            .then(() => {
              console.log('result');
            })
            .catch((err) => {
              console.log('error', err);
              newAuthor.book = req.body.book.filter((el) => el !== book);
            });

          // doc.author = [...doc.author, _id];
          // doc.save().catch((err) => {
          //   console.log(err);
          // });
        }
      })
      .catch((err) => {
        console.log('no such book', err);
        newAuthor.book = req.body.book.filter((el) => el !== book);
      });
  });

  await Promise.all(promises);

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
