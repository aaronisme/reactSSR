import express from 'express';
import path from 'path';
import middleware from './middleware';
import userData from '../data/user.json'

const app =  express();

app.set('host', process.env.HOST || '0.0.0.0');
app.set('port', process.env.PORT || '8080');

app.get('/api', (req, res) => {
  setTimeout(() => res.status(200).json(userData), 2000)
})

app.get('/', middleware);
app.use('/public', express.static(path.join(__dirname, '../../public')));

app.listen(app.get('port'), () => {
  console.log(`The App is Lisitening at ${app.get('port')}`)
})