import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'; // provides store to App; global state
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const pageOneReducer = (state = [], action) => {
    console.log('Feedback Page Reducer');
    // Since I used a separate reducer for each page
    // each one will only hold one item.
    // So no need to return state, just the item
    // This allows the user to go back and change an answer 
    // without creating a second sumbission on top of the first
    if (action.type === 'FEELING_FEEDBACK') {
        if (action.payload > 5 ) { // keeping values inside requested parameters
            return [5];
        } else if (action.payload < 1) {
            return [1];
        }
        return [action.payload]; 
    } else if (action.type === 'RESET_ALL') { // empty the array upon reset
        return [];
    }
    return state;
}

const pageTwoReducer = (state = [], action) => {
    if (action.type === 'UNDERSTANDING_FEEDBACK') {
        if (action.payload > 5 ) { // keeping values inside requested parameters
            return [5];
        } else if (action.payload < 1) {
            return [1];
        }
        return [action.payload]; // single item arrays only, pls 
    } else if (action.type === 'RESET_ALL') { // empty the array upon reset
        return [];
    }
    return state;
}

const pageThreeReducer = (state = [], action) => {
    if (action.type === 'SUPPORTED_FEEDBACK') {
        if (action.payload > 5 ) { // keeping values inside requested parameters
            return [5];
        } else if (action.payload < 1) {
            return [1];
        }
        return [action.payload];
    } else if (action.type === 'RESET_ALL') { // empty the array upon reset
        return [];
    }
    return state;
}

const pageFourReducer = (state = [], action) => {
    if (action.type === 'COMMENT_FEEDBACK') {
        return [action.payload]; // only going to have one item in each reducer, no need to return state
    } else if (action.type === 'RESET_ALL') {
        return [];
    }
    return state; // Not sure when I would ever get to this line
}

const storeInstance = createStore(
    combineReducers({
        // all the reducers
        pageOneReducer,
        pageTwoReducer,
        pageThreeReducer,
        pageFourReducer,
    }),
    applyMiddleware(logger) // for multi-state console logs
);


ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
