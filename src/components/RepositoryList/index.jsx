import RepositoryItem from "../RepositoryItem";
import './style.scss';

export default function repositoryList(){

  const repository = {
    name: 'unform',
    description: 'Forms in React',
    link: 'https://github.com/unform/unform',
  };

  return (
    <section className="repository-list">
      <h1>RepositoryList</h1>
      <ul>
        <RepositoryItem repository={ repository } />
        <RepositoryItem repository={ repository } />
        <RepositoryItem repository={ repository } />
        <RepositoryItem repository={ repository } />
      </ul>
    </section>
  );
}