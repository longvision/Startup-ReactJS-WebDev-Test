import React, { Component } from 'react';
// import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Container, Repository, Button, Card,
} from './styles';

// import * as RepoActions from '../../store/actions/repo';

class List extends Component {
  componentDidMount = async () => {
    // try {
    //   const { repositoryInput, addRepoRequest } = this.props;
    //   await addRepoRequest(repositoryInput);
    // } catch (err) {
    //   alert('Please type your username');
    //   console.log(err);
    // }
  };

  render() {
    const { repo } = this.props;

    return (
      <Container>
        {repo.loading && <span> Carregando...</span>}
        <ul>
          {repo.data.map(repo => (
            <Card>
              <Repository key={repo.id}>
                <header>
                  {/* <img src={repo.owner.avatar_url} alt="avatar" /> */}
                  <strong>{repo.name}</strong>
                  <small>{repo.description}</small>
                </header>
              </Repository>
              <Button>
                {/* <Link
                  to={{
                    pathname: `/commits/${rep.id}`,
                  }}
                >
                  Commits
                </Link> */}
              </Button>
            </Card>
          ))}
        </ul>
      </Container>
    );
  }
}

// const mapDispatchToProps = dispatch => bindActionCreators(RepoActions, dispatch);

const mapStateToProps = state => ({
  repo: state.repo,
});

export default connect(
  mapStateToProps,
  // mapDispatchToProps,
)(List);
