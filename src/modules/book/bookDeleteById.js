import Book from './Model';

export default function bookDeleteById(req, res) {
  const { bookId } = req.params;

  Book.deleteOne({ _id: bookId })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('Book delete error');
    });
}
