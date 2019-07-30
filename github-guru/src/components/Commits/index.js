import React, { Component } from 'react';
import api from '../../services/api';
// import { Container } from './styles';

export default class Commits extends Component {
  state = { commit: [] };

  async componentDidMount() {
    const { repo } = this.props.location.state;
    // const { repo } = this.props.match.params;
    const response = await api.get(
      `/repos/${repo.owner.login}/${repo.id}/commits/${repo.commits_url}}`,
    );

    this.setState({ commit: response.data });
    console.log(response);
  }

  render() {
    const { commit } = this.state;
    return (
      <div>
        <h1>Commits</h1>
        <h1>{commit}</h1>
      </div>
    );
  }
}
