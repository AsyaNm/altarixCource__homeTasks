import { Textarea } from "../Textarea/Textarea";
import './TextareaSend.scss';
import React from "react";

export class TextareaSend extends Textarea {
  render() {
    return(
        <textarea className="Textarea TextareaSend" name="textarea-send" wrap="soft" placeholder="Enter your message"></textarea>
    )
  }
}