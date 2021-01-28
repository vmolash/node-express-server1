import Book from './Model';

export default function bookGetById(req, res) {
  const { bookId } = req.params;

  Book.findById(bookId)
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('Book not found');
    });
}
