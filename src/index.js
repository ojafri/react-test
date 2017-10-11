import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Router, Route, IndexRoute, StaticRouter, HashRouter,Link} from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './components/Home';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store/store';

ReactDOM.render((
<Provider store={store}>
    <HashRouter>
        <App>
            <Route exact path='/' component={Home}/>
            {/*<Route path = "/someotherroute" component = {SomeotherComponent} />*/}
        </App>
    </HashRouter>
</Provider>
), document.getElementById('root'));
registerServiceWorker();
