import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import logo from '../../assets/logo.png';
import {
  Container, Form, Logo, Results,
} from './styles';
import List from '../../components/List';

import * as RepoActions from '../../store/actions/repo';

class Main extends Component {
  state = {
    repositoryInput: '',
  };

  handleAddRepository = async (e) => {
    e.preventDefault();
    const { addRepoRequest, repo } = this.props;

    addRepoRequest(this.state.repositoryInput);
  };

  render() {
    const { repositoryInput } = this.state;
    const { repo } = this.props;
    return (
      <Container>
        <Logo src={logo} alt="Github Guru" />
        <div>
          <h1>{repo.data.id}</h1>
          <Form onSubmit={this.handleAddRepository}>
            <input
              type="text"
              placeholder="Type your Git username..."
              value={this.state.repositoryInput}
              onChange={e => this.setState({ repositoryInput: e.target.value })}
            />
            <button type="submit">Check</button>
          </Form>
        </div>
        <List repositoryInput={repositoryInput} />
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
