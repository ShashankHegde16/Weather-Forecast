import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from './reducers';
import App from './components/App';

const store = applyMiddleware(ReduxPromise)(createStore);

const Main = () => {
    return (
        <Provider store={store(reducers)}>
            <App />
        </Provider>
    );
}

ReactDOM.render(<Main />, document.querySelector('#root'));