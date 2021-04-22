import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import 'react-modal-video/css/modal-video.min.css';

import RouteMovie from './route/index';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <RouteMovie />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
