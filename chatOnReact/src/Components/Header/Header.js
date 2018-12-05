import {Component} from 'react';
import './Header.scss';
import React from "react";

export class Header extends Component {
  render() {
    return (
        <header className="main-header">
          <h2>
            {this.getName()}
          </h2>
        </header>
    );
  }
  getName() {
    return this.props.name;
  }
}

