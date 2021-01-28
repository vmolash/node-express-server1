import Base from './Model';

export default function updateBaseById(req, res) {
  const { baseId } = req.params;

  delete req.body.password;
  delete req.body.roles;

  Base.findByIdAndUpdate(baseId, req.body)

    .exec()
    .then(() => {
      res.status(200).json('Base updated');
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('Base not updated');
    })
    .finally(() => {
      console.log('END');
    });
}
