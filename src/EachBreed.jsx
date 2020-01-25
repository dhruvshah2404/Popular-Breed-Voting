import React, { Component } from 'react';
import EachImage from './EachImage';
import ContentOfEachBreed from './ContenOfEachBreed';

class EachBreed extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <React.Fragment>
        <div className="eachBreed">
        <EachImage />
        <ContentOfEachBreed/>
      </div>
      </React.Fragment>
     );
  }
}
 
export default EachBreed;
