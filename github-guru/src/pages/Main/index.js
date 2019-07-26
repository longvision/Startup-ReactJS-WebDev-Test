import React, { Component } from 'react';
import logo from '../../assets/logo.png';
import { Container, Form, Logo } from './styles';
import List from '../../components/List';
import api from '../../services/api';

export default class Main extends Component {
  state = {
    repositoryInput: '',
    repositories: [],
  };

  handleAddRepository = async (e) => {
    e.preventDefault();
    try {
      const response = await api.get(`/users/${this.state.repositoryInput}/repos?per_page=100`);

      this.setState({
        repositoryInput: '',
        repositories: response.data,
      });
      console.log(this.state.repositories);
    } catch (err) {
      alert('Please type your username');
      console.log(err);
    }
  };

  render() {
    return (
      <Container>
        <Logo src={logo} alt="Github Guru" />
        <Form onSubmit={this.handleAddRepository}>
          <input
            type="text"
            placeholder="type the username"
            value={this.state.repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">Check</button>
        </Form>
        <List repos={this.state.repositories} />
      </Container>
    );
  }
}
