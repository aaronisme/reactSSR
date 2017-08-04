
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../components/App';
import page from './page';
import userApi from '../api/userApi';
import SSRCaching from "electrode-react-ssr-caching";



export default (req, res) => {
  userApi().then((data) => {

    ReactDOMServer.renderToString(<App userData={data}/>);
    SSRCaching.clearProfileData();
    SSRCaching.enableProfiling();
    const appString = ReactDOMServer.renderToString(<App userData={data}/>)
    SSRCaching.enableProfiling(false);
    console.log(JSON.stringify(SSRCaching.profileData, null, 2));

    return res.status(200).send(page(appString, data))
  })
}