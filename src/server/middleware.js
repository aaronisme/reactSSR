
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../components/App';
import page from './page';
import userApi from '../api/userApi';


export default (req, res) => {
  userApi().then((data) => {
    const appString = ReactDOMServer.renderToString(<App userData={data}/>)
    return res.status(200).send(page(appString, data))
  })
}