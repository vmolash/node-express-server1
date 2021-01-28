import Base from './Model';

export default function searchBaseById(req, res) {
  const { baseId } = req.params;

  Base.findById(baseId)
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('Base not found');
    });
}
