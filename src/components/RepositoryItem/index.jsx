import React, { Component } from "react";
import './style.scss';

export default class RepositoryItem extends Component {

  render() {
    const { repository } = this.props;
    const { name, description, link } = repository;
    return (
      <li>
            <strong>{ name ?? 'Default' }</strong>
            <p>{ description }</p>
            <a href={ link }>
              Acess Repository
            </a>
          </li>
    );
  }
};