import * as express from 'express';
import Brett from './src/Brett'

const app = express();

app.get('/api/stuff', (req, res): void => {
  res.status(200).send('Hey this is working!!!!!');
})


app.get('/api/name', (req, res) => {
  res.status(200).send(Brett.sayName());
})

app.listen(3000, () => console.log('Listening on 3000'))