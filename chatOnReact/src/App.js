import React, { Component } from 'react';
// import logo from './logo.svg';
import './normalize.scss'
import './App.scss';
import { NewButton } from "./Components/NewButton/NewButton";
import {Header} from "./Components/Header/Header";
import {Footer} from "./Components/Footer/Footer";

class App extends Component {

  constructor() {
    super();
    this.state = {
      list: [], // Чтобы запросить данные из localStorage'а нужно использовать JSON.parse
      name: 'AsyaNm',
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
        <Header  name={this.state.name}/>
          <div className="page-content">
            <NewButton value="New" handleClick={this.addItemToList.bind(this)}/>
          </div>
          {this.renderList()}
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
