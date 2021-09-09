import React, { Component } from 'react';
// import RepositoryItem from "../RepositoryItem";
import './style.scss';

// interface RepositoryState {
//   repositories: Repository[];
// };

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
};

// type MyPartialTypeForEdit<Type> = {
//   [Property in keyof Type]?: Type[Property];
// } & { id: number };

// type typeTeste = MyPartialTypeForEdit<Repository>;

export default class repositoryList extends Component<{},Repository> {

  

  constructor(props: {}) {
    super(props);
    state: Repository = {
      repositories: [],
    }
    // this.state = {
    //   repositories: Repository[],
    // };
    this.fetchRepositories = this.fetchRepositories.bind(this);
  }

  componentDidMount(){
    this.fetchRepositories();
  }
  
  async fetchRepositories() {
    const response = await fetch(
      "https://api.github.com/orgs/trybe/repos"
    );

    const result = await response.json();
    this.setState({ repositories: result as Repository[]  });
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
          // repositories.map((repository: Repository) => {
          //   return <RepositoryItem key={ repository.id } name = { repository.name } />
          // })
        };
        </ul>
      </section>
    );
  };

  
}