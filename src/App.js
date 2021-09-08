import React, { Component } from 'react';
import RepositoryList from './components/RepositoryList';
import Counter from './components/Counter';

class App extends Component {
  render(){
    return (
      <>
        <RepositoryList />
        <Counter />
      </>
    );
  };
}

export default App;
