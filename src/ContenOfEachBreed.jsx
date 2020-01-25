import React, { Component } from 'react';
import User from './User';
class ContentOfEachBreed extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="contentOfEachBreed">
        <button><i className="fas fa-arrow-up"></i></button>
        <h4 className="votes">0</h4>
        <p className="breedName">BreedName</p>
        <p className="subBreedName">SubBreed Name</p>
        <User/>
      </div>
     );
  }
}
 
export default ContentOfEachBreed;