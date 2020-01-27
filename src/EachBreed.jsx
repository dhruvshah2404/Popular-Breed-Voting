import React, { Component } from "react";
import EachImage from "./EachImage";
import ContentOfEachBreed from "./ContenOfEachBreed";

class EachBreed extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        {this.props.items.map(item => {
          return (
            <div className="eachBreed" key={item.id}>
              <EachImage image={item.dogImage} />
              <ContentOfEachBreed
                content={item}
                updateVote={this.props.changeVote}
              />
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}

export default EachBreed;
