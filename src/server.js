import express from 'express';

const app =  express();

app.set('host', process.env.HOST || '0.0.0.0');
app.set('port', process.env.PORT || '8080');

app.get('/', (req, res) => {
  res.status(200).send('Hello World !')
});

app.listen(app.get('port'), () => {
  console.log(`The App is Lisitening at ${app.get('port')}`)
})