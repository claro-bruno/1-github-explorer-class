import React, { Component } from "react";
import './style.scss';

interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  }
}

export default class RepositoryItem extends Component {

  render() {
    const { repository } = this.props as RepositoryItemProps;
    const { name, description, html_url } = repository;
    return (
      <li>
            <strong>{ name ?? 'Default' }</strong>
            <p>{ description }</p>
            <a href={ html_url }>
              Acess Repository
            </a>
          </li>
    );
  }
};