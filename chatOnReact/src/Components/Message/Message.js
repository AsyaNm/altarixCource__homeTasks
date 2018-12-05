import {Component} from 'react';
import './Message.scss';
import React from "react";
import {Textarea} from "../Textarea/Textarea";

export class Message extends Component {

  render() {
    return (
      <div className="message-item">
        <div className="item-info">
          <img src="#" alt="" className="message-item-image"/>
          <span className="message-item-name">
            {this.getName()}
          </span>
        </div>
        <Textarea
            text={this.getText()}
        />
        <span className="message-item-id">
          {this.getID()}
        </span>
      </div>
    )
  }
  getName() {
    return this.props.name;
  }

  getText() {
    return this.props.text;
  }

  getID() {
    return this.props.id;
  }
}