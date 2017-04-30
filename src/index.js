import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './App';
import MockLiveSite from './components/MockLiveSite';

import rootReducer from './reducers/index'
import './index.css';

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/:id" component={MockLiveSite} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
