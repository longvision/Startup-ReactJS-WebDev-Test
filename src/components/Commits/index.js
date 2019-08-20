import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment-timezone';
import {
  Container,
  List,
  Ul,
  Card,
  Logo,
  CommitList,
  SearchInput,
  SearchBox,
  Title,
  Button,
  Repository,
} from './styles';
import logo from '../../assets/logo.png';
import avatar from '../../assets/avatar.png';
import * as CommitsActions from '../../store/actions/commits';

class Commits extends Component {
  state = {
    items: [],
    search: '',
  };

  filterList = (event) => {
    const { commits } = this.props;
    let updatedList = this.state.items;
    updatedList = commits.data.filter(
      c => c.commit.message.toLowerCase().search(event.target.value.toLowerCase()) !== -1,
    );
    this.setState({ items: updatedList, search: event.target.value });
  };

  componentDidMount = () => {
    const { commits } = this.props;
    this.setState({ items: commits.data });
  };

  componentWillMount() {
    const { commits } = this.props;
    const list = commits.data.filter(c => c.commit.message === '');
    this.setState({ items: list });
  }

  render() {
    const { items, search } = this.state;
    console.log(items);
    return (
      <Container>
        <Logo src={logo} alt="Github Guru" />
        <CommitList>
          <SearchInput
            type="text"
            className="form-control form-control-lg"
            placeholder="Filter by commit message..."
            onChange={this.filterList}
          />
          <button type="submit">Filter</button>
        </CommitList>
        {search === '' ? (
          <Title>Last 20 commits:</Title>
        ) : (
          <Title>All commits with '{search}' will appear below:</Title>
        )}
        {items.slice(0, 20).map(item => (
          <Card key={item.sha}>
            <Repository>
              <div>
                {item.author === null ? (
                  <img src={avatar} alt="avatar" alt="avatar" />
                ) : (
                  <img src={item.author.avatar_url} />
                )}
                <h2>{item.commit.author.name}</h2>
              </div>
              <h2>
                Commit message:
                <strong>{item.commit.message}</strong>
              </h2>

              <h2>
                Last Commit:
                <small>{moment(item.commit.author.date).fromNow()}</small>
              </h2>
            </Repository>
          </Card>
        ))}
      </Container>
    );
  }
}

// const mapDispatchToProps = dispatch => bindActionCreators(CommitsActions, dispatch);

const mapStateToProps = state => ({
  repo: state.repo,
  commits: state.commits,
});

export default connect(
  mapStateToProps,
  // mapDispatchToProps,
)(Commits);
