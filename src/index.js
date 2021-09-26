import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'; // provides store to App; global state
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const pageReducer = (state = [], action) => {
    console.log('Feedback Page Reducer');
    // TODO: determine what to return
    if (action.type === 'FEELING_FEEDBACK') {
        if (action.payload > 5 ) { // keeping values inside requested parameters
            return [...state, 5];
        } else if (action.payload < 0) {
            return [...state, 0];
        }
        return [...state, action.payload];
    } else if (action.type === 'UNDERSTANDING_FEEDBACK') {
        if (action.payload > 5 ) { // keeping values inside requested parameters
            return [...state, 5];
        } else if (action.payload < 0) {
            return [...state, 0];
        }
        return [...state, action.payload];
    } else if (action.type === 'SUPPORTED_FEEDBACK') {
        if (action.payload > 5 ) { // keeping values inside requested parameters
            return [...state, 5];
        } else if (action.payload < 0) {
            return [...state, 0];
        }
        return [...state, action.payload];
    } else if (action.type === 'COMMENT_FEEDBACK') {
        return [...state, action.payload];
    } else if (action.type === 'RESET_ALL') {
        return [];
    }

    return state;
}

// const pageTwoReducer = (state = [], action) => {

//         return state;
// }



const storeInstance = createStore(
    combineReducers({
        // needs reducer
        pageReducer,
        // pageTwoReducer,
    }),
    applyMiddleware(logger) // for multi-state console logs
);


ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
