import React, { Component } from 'react';
import Header from "./Header";
import EachBreed from "./EachBreed";
import Dogs from './Data';
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <main>
        <Header/>
        <EachBreed />
      </main>
    );
  }
}

export default App;
