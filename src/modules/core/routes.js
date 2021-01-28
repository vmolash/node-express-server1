import infoRouter from '../info/Routes';
import userRouter from '../user/Routes';
import homeRouter from '../home/Routes';
import baseRouter from '../base/Routes';
import bookRouter from '../book/Routes';
import authorRouter from '../author/Routes';

export default function routes(app) {
  app.use('/info', infoRouter);
  app.use('/base', baseRouter);
  app.use('/user', userRouter);
  app.use('/book', bookRouter);
  app.use('/author', authorRouter);

  app.use('/', homeRouter);
}
