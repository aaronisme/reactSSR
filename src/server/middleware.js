import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../components/App';

export default (req, res, next) => {
  const startTime = Date.now()
  const appString = ReactDOMServer.renderToString(<App />)
  const endTime = Date.now()
  console.log("Rendering String Time is", endTime - startTime)
  res.locals = {time: endTime - startTime, appString}
  next()
}