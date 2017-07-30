
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../components/App';
import page from './page';


export default (req, res) => {
  const appString = ReactDOMServer.renderToString(<App />)

  return res.status(200).send(page(appString))
}