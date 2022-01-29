import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import App from './App';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import mainReducer from 'store';


const store = applyMiddleware(thunk)(createStore)(mainReducer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>

    , document.getElementById('root'));

serviceWorker.unregister();
