import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducers';

const persistedState = sessionStorage.getItem('reduxState') ? JSON.parse(sessionStorage.getItem('reduxState')) : {}
const store = createStore(reducer, persistedState)

store.subscribe(() => {
    sessionStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
