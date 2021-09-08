import React, { Component } from 'react';
import RepositoryItem from "../RepositoryItem";
import './style.scss';

export default class repositoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repositories: [],
    };
    this.fetchRepositories = this.fetchRepositories.bind(this);
  }

  componentDidMount(){
    this.fetchRepositories();
  }
  
  async fetchRepositories() {
    const response = await fetch(
      "https://api.github.com/orgs/rocketseat/repos"
    );

    const result = await response.json();
    this.setState({ repositories: result });
  }

  render() {
    const { repositories } = this.state;
    if (!repositories) {
      return <div>Carregando...</div>;
    }
    return (
      <section className="repository-list">
        <h1>RepositoryList</h1>
        <ul>
        {
          repositories.map((repository) => {
            return <RepositoryItem key={repository.id} repository={repository} />
          })
        };
        </ul>
      </section>
    );
  };

  
}