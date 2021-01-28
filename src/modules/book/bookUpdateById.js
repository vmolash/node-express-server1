import Book from './Model';
import Author from '../author/Model';

export default function bookUpdateById(req, res) {
  const { bookId } = req.params;
  const author = req.body.author;

  delete req.body.password;
  delete req.body.roles;

  author.forEach((author) => {
    Author.findById(author)
      .exec()
      .then((doc) => {
        doc.book = [bookId];
        doc.save().catch((err) => {
          console.log(err);
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json('Author does not exist');
      });

    Book.findByIdAndUpdate(bookId, req.body)
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
  });
}
