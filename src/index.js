import React from 'react';
import * as serviceWorker from './serviceWorker';
import ReactDOM from 'react-dom';
import './index.css';
import MainApp from './App';

ReactDOM.render(<MainApp />, document.getElementById('root'));

serviceWorker.unregister();