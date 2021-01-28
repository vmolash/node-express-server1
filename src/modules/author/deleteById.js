import Author from './Model';

export default function deleteAuthorById(req, res) {
  const { authorId } = req.params;

  Author.deleteOne({ _id: authorId })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('Author delete error');
    });
}
