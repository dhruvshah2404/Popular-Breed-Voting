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
        <p className="breedName"><a href={this.props.content.info} target="_blank">{this.props.content.breedName}</a></p>
        <p className="subBreedName">{this.props.content.subBreedName}</p>
        <User url={this.props.content}/>
      </div>
    );
  }
}
export default ContentOfEachBreed;
