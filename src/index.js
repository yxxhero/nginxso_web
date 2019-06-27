import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Home'
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import reducers from './reducer'

let store = null;
if (process.env.NODE_ENV === 'development') {
    store = createStore(reducers, compose(
    	applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ))
} else {
    store = createStore(reducers, compose(
    	applyMiddleware(thunk)
    ))
}

ReactDOM.render(
  (
   <LocaleProvider locale={zhCN}>
       <Provider store={store}>
          <App />
       </Provider>
   </LocaleProvider>
),
 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
