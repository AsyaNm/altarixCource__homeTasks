import { Button } from "../Button/Button";
import './NewButton.scss';
import React from "react";

export class NewButton extends Button {
  value() {
    return super.getValue() + ' :)';
  }
  render() {
    return (
        <button className='Button NewButton' onClick={this.props.handleClick}>
          {this.getValue()}
        </button>
    )

  }
}
