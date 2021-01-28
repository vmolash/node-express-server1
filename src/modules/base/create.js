import Base from './Model';

export default function createBase(req, res) {
  // Base - ПРОТОТИП, и создаем на основе модели Base экземпляр newBase
  const newBase = new Base({
    title: req.body.title,
  });

  newBase
    .save()
    .then(() => {
      res.status(200).json('Base created');
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('Base not created');
    })
    .finally(() => {
      console.log('END');
    });
}
