import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore } from 'redux';
import mainReducer from './redux/reducers';
import { Provider } from 'react-redux';

const store = createStore(mainReducer);


ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>
  ,document.getElementById('root'));

