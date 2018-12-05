import {Component} from 'react';
import './Button.scss';
import React from "react";

export class Button extends Component {
  render() {
    return (
      <button className='Button'>
        {this.getValue()}
      </button>
    );
  }

  getValue() {
    return this.props.value;
  }
}
