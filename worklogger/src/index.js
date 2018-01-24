import React from 'react';
import ReactDOM from 'react-dom';
import './ui-toolkit/css/nm-cx/main.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
