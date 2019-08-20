// import styled from 'styled-components';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
// import Container from './styles/global';
import store from './store';
import history from './services/history';
import Routes from './routes';
import './config/ReactotronConfig';
import GlobalStyle from './styles/global';

// console.tron.log('testando');

export default class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Provider store={store}>
          <Routes />
          <GlobalStyle />
        </Provider>
      </Router>
    );
  }
}
