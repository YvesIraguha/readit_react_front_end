import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store';
import { Provider } from 'react-redux';
import './scss/main.scss';
import Button from './pages/index';
let HelloWorld = () => <h1>Hello there world!</h1>;
let App = () => (
  <Provider store={store}>
    <HelloWorld />
    <Button />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
