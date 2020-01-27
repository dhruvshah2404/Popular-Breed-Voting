import React, { Component } from "react";
import User from "./User";

class ContentOfEachBreed extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="contentOfEachBreed">
        <button onClick={() => this.props.updateVote(this.props.content.id)}>
          <i className="fas fa-arrow-up"></i>
        </button>
        <h4 className="votes">{this.props.content.votes}</h4>
        <p className="breedName">{this.props.content.breedName}</p>
        <p className="subBreedName">{this.props.content.subBreedName}</p>
        <User />
      </div>
    );
  }
}
export default ContentOfEachBreed;
