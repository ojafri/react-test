import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Router, Route, IndexRoute, StaticRouter, HashRouter,Link} from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
<HashRouter>
    <App />
</HashRouter>
), document.getElementById('root'));
registerServiceWorker();
