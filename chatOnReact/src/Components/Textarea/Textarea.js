import {Component} from 'react';
import './Textarea.scss';
import React from "react"

export class Textarea extends Component {
  render() {
    return (
        <textarea className="Textarea" wrap="soft" name="textarea">
          {this.getText()}
        </textarea>
    )
  }

  getText() {
    return this.props.text;
  }
}