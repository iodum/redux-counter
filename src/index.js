import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';

const rootReducrs = combineReducers({
    counter: counterReducer,
    result: resultReducer
});

const logger = store => {
    return next => {
        return action => {
            console.log('[Midliware] Dispatching:', action);
            const result = next(action);
            console.log('[Midliware] next state', store.getState());
            return result;
        }
    }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducrs, composeEnhancers(
    applyMiddleware(logger)
));
// const store = createStore(rootReducrs, applyMiddleware(logger));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
