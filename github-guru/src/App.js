// import styled from 'styled-components';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Container from './styles/global';
import store from './store';
// import Main from './pages/Main';
import Routes from './routes';
import './config/ReactotronConfig';

console.tron.log('testando');

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container>
          <Routes />
        </Container>
      </Provider>
    );
  }
}
