import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import './App.css';
import counterReducer from "./store/reducer";
import {createStore} from "redux";
import {Provider } from"react-redux";
//STORE (state)
let store = createStore(counterReducer,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());




//DISPATCH


ReactDOM.render(
  <React.StrictMode>
    <Provider store= {store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

