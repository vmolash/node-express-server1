import Base from './Model';

export default function deleteBaseById(req, res) {
  const { baseId } = req.params;

  Base.deleteOne({ _id: baseId })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('Base delete error');
    });
}
