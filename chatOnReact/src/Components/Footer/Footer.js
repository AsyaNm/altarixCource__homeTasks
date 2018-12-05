import {Component} from 'react';
import './Footer.scss';
import React from "react";
import {ButtonSend} from "../ButtonSend/ButtonSend";

export class Footer extends Component {
  render() {
    return (
        <footer className="main-footer">
          <form id="sendMessage" action="" >
            <input type="hidden" value="0"/>
            <textarea form="sendMessage" className="field-message" wrap="soft" placeholder="Enter your message" name="field-message"></textarea>
            <div className="btn-container">
              <ButtonSend />
            </div>
          </form>
        </footer>
    );
  }
}