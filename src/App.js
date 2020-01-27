import React, { Component } from "react";
import Header from "./Header";
import EachBreed from "./EachBreed";
import data from "./Data.json";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: data
    };
  }

  //Lifting the state explained by antony
  updateVote = Objid => {
    const newArray = this.state.items
      .map(e => {
        if (e.id === Objid) {
          e.votes += 1;
        }
        return e;
      })
      .sort((a, b) => {
        return b.votes - a.votes;
      });
    this.setState({ items: newArray });
  };

  render() {
    return (
      <main>
        <Header />
        <EachBreed items={this.state.items} changeVote={this.updateVote} />
      </main>
    );
  }
}

export default App;
