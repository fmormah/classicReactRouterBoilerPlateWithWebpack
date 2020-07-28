import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Header from './templates/Header.jsx';
import Footer from './templates/Footer.jsx';
import Root from './config/Root';


//  Init header
const header = new Header;
header.init('header-root');

//  Init footer
const footer = new Footer;
footer.init('footer-root');


const render = (Component) => {
  ReactDOM.render( <Root />,document.getElementById('content-root'),);
};

render(Root);

if (module.hot) {
  module.hot.accept('./config/Root', () => {
    const newApp = require('./config/Root').default;
    render(newApp);
  });
}
