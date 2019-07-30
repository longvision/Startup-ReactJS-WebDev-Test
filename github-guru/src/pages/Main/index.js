import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import logo from '../../assets/logo.png';
import {
  Container, Form, Logo, Results,
} from './styles';
import List from '../../components/List';
import Avatar from '../../components/Avatar';

import * as RepoActions from '../../store/actions/repo';

class Main extends Component {
  state = {
    repositoryInput: '',
    // repositories: [],
    repository: null,
  };

  handleAddRepository = async (e) => {
    e.preventDefault();
    const { addRepoRequest } = this.props;
    addRepoRequest(this.state.repositoryInput);
  };

  render() {
    const { repository, repositoryInput } = this.state;
    const { repo } = this.props;
    return (
      <Container>
        <Logo src={logo} alt="Github Guru" />
        <div>
          <h1>{repo.data.id}</h1>
          <Form onSubmit={this.handleAddRepository}>
            <input
              type="text"
              placeholder="type the username"
              value={this.state.repositoryInput}
              onChange={e => this.setState({ repositoryInput: e.target.value })}
            />
            <button type="submit">Check</button>
          </Form>
        </div>
        {repository ? <Avatar repository={repository} /> : null}
        <Results>
          <List repositoryInput={repositoryInput} />
        </Results>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(RepoActions, dispatch);

const mapStateToProps = state => ({
  repo: state.repo,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
