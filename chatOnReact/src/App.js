import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.scss';
import { NewButton } from "./Components/NewButton/NewButton";
import {Header} from "./Components/Header/Header";
import {Message} from "./Components/Message/Message";
import {Footer} from "./Components/Footer/Footer";

class App extends Component {

  constructor() {
    super();
    this.state = {
      list: [], // Чтобы запросить данные из localStorage'а нужно использовать JSON.parse
      id:'5',
      name: 'AsyaNm',
      text: 'text message example',
      isOutgoing: true // Флаг для отметки своих сообщений
    };
  }

  renderList() {
    const render = [];
    for (let item of this.state.list) {
      render.push(<div>{item}<hr/></div>);
    }
    return render;
  }

  render() {
    return (
      <div className="App">
        <Header name={this.state.name}/>
        <NewButton value="New" handleClick={this.addItemToList.bind(this)}/>
        {this.renderList()}
        <div className="page-content">
          <Message
              name={this.state.name}
              text={this.state.text}
              id={this.state.id}
          />
          <Message
              name={this.state.name}
              text={this.state.text}
              id={this.state.id}
          />
        </div>
        <Footer/>
      </div>
    );
  }

  addItemToList() {
    const list2 = this.state.list;
    list2.push(Math.random());
    this.setState({});
    // Чтобы записать в localStorage - нужно сделать JSON.stringify()
  }
}

export default App;
