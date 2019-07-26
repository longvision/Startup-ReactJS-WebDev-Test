import React, { Component } from 'react';
// import logo from '../../assets/logo.png';
import { Container, Repository } from './styles';

export default class List extends Component {
  render() {
    const { repos } = this.props;
    return (
      <Container>
        {repos.map(repo => (
          <Repository key={repo.id}>
            <header>
              <img src={repo.owner.avatar_url} alt="avatar" />
              <strong>{repo.description}</strong>
              {/* <small>{repo.fork}</small> */}
            </header>
            <strong>{repo.name}</strong>
          </Repository>
        ))}
      </Container>
    );
  }
}
