import Author from './Model';

export default function searchAuthorById(req, res) {
  const { authorId } = req.params;

  Author.findById(authorId)
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('Author not found');
    });
}
