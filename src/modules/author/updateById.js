import Author from './Model';

export default function updateAuthorById(req, res) {
  const { authorId } = req.params;
  const { book } = req.body;

  delete req.body.password;
  delete req.body.roles;

  Author.findByIdAndUpdate(authorId, req.body)

    .exec()
    .then(() => {
      res.status(200).json('Author updated');
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('Author not updated');
    })
    .finally(() => {
      console.log('END');
    });
}
