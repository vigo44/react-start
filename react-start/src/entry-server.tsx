import ReactDOMServer, { RenderToPipeableStreamOptions } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../src/store/index';
import App from './App';

//import './index.css';

export function render(url: string, opts: RenderToPipeableStreamOptions) {
  if (url != '/' && url != '/form' && url != '/about') {
    url = '/404';
  }
  return ReactDOMServer.renderToPipeableStream(
    <React.StrictMode>
      <Provider store={store}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </Provider>
    </React.StrictMode>,
    opts
  );
}
