import Author from './Model';
import Book from '../book/Model';

export default async function updateAuthorById(req, res) {
  const { authorId } = req.params;
  const { name, book } = req.body;

  const updatedAuthor = {
    name,
    book,
  };

  delete req.body.password;
  delete req.body.roles;

  await Author.findById(authorId)
    .exec()
    .then((doc) => {
      console.log(doc);
      req.body.book.forEach((book) => {
        if (!doc.book.includes(book)) {
          Book.findByIdAndUpdate(book, { $addToSet: { author: authorId } })
            .exec()
            .then(() => console.log('book updated with author'))
            .catch((err) => {
              console.log('error', err);
              updatedAuthor.book = req.body.book.filter((el) => el !== book);
            });
        }
      });

      doc.book.forEach((book) => {
        if (!req.body.book.includes(book)) {
          Book.updateOne({ _id: book }, { $pull: { author: authorId } })
            .exec()
            .then(() => console.log('ok'))
            .catch((err) => {
              console.log(err);
              updatedAuthor.book = req.body.book((el) => el !== book);
            });
        }
      });
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      console.log('END');
    });
  Author.updateOne({ _id: authorId }, req.body)
    .exec()
    .then((result) => res.status(200).json(result))
    .catch((err) => {
      console.log(err);
      res.status(400).json('error');
    });
}
