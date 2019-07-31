import React, { Component } from 'react';
// import logo from '../../assets/logo.png';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Container, Repository, Button, Card, Loading,
} from './styles';

import * as CommitsActions from '../../store/actions/commits';

class List extends Component {
  state = { toCommits: false, full_name: '' };

  openCommits = (rep) => {
    const { loadCommitsRequest } = this.props;

    loadCommitsRequest(rep.full_name);
  };

  render() {
    const { repo } = this.props;
    // const { full_name } = this.state;

    // if (this.state.toCommits === true) {
    //   return <Redirect to={`/repos/${full_name}/commits/`} />;
    // }
    return (
      <Container>
        {repo.loading && <Loading> Carregando...</Loading>}
        <ul>
          {repo.data.map(rep => (
            <Card key={rep.id}>
              <Repository>
                <header>
                  <img src={rep.owner.avatar_url} alt="avatar" />
                  <strong>{rep.login}</strong>
                  <strong>{rep.name}</strong>
                  <small>{rep.description}</small>
                </header>
              </Repository>
              <Button onClick={() => this.openCommits(rep)}>Commits</Button>
            </Card>
          ))}
        </ul>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(CommitsActions, dispatch);

const mapStateToProps = state => ({
  repo: state.repo,
  commits: state.commits,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);
