import React, { Component } from "react";
import Header from "./Header";
import EachBreed from "./EachBreed";
import data from './Data.json';
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      items: data
    };
  }

  render() {
    console.log(this.state.items)
    return (
      <main>
        <Header />
        <EachBreed items={this.state.items} />
      </main>
    );
  }
}

export default App;
