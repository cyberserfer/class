import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './ui-toolkit/css/nm-cx/main.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();