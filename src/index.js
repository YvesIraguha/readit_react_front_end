import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './pages/index';
import store from './redux/store';
import { Provider } from 'react-redux';
import './scss/main.scss';
let App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
