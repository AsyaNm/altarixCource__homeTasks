import {Component} from 'react';
import './Footer.scss';
import React from "react";
import {ButtonSend} from "../ButtonSend/ButtonSend";
import {TextareaSend} from "../TextareaSend/TextareaSend";

export class Footer extends Component {
  render() {
    return (
        <footer className="main-footer">
          <form id="sendMessage" action="" >
            <input type="hidden" value="0"/>
            <TextareaSend id="sendMessage"/>
            <div className="btn-container">
              <ButtonSend />
            </div>
          </form>
        </footer>
    );
  }
}