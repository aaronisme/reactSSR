import React from 'react';
import ReactDOMStream from "react-dom-stream/server";
import App from '../components/App';

export default (req, res) => {
  const startTime = Date.now()
  const stream = ReactDOMStream.renderToString(<App />)
  const endTime = Date.now()
  console.log('rendering Time is', endTime - startTime)
  stream.pipe(res, {end: false});
	stream.on("end", function() {
		res.end();
	});
}