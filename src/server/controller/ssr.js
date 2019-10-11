// SSR
import fs from 'fs'
import React from 'react'; // eslint-disable-line
import {
  renderToString
} from "react-dom/server"
import App from "../../client/app.jsx" // eslint-disable-line
export const renderSSRcomponent = (req, res) => {
  var RenderedAppToString = renderToString( < App /> );
  var indexHTMLpage = fs.readFileSync('./public/index.html');
  var indexHTMLpageToString = indexHTMLpage.toString();
  var HTMLWithSSRComponentInIt = indexHTMLpageToString.replace("<!-- __APP__ -->", RenderedAppToString);
  res.send(HTMLWithSSRComponentInIt);
}
