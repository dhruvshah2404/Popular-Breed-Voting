import React, { Component } from 'react';
import EachImage from './EachImage';
import ContentOfEachBreed from './ContenOfEachBreed';

class EachBreed extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    console.log(this.props.items);
    return ( 
      <React.Fragment>
        {/* <div className="eachBreed"> */}
        {this.props.items.map(item => {
          return (
            <div className="eachBreed" key={item.id}>
              <EachImage image={item.dogImage} />
              <ContentOfEachBreed content={item}/>
              </div>
            )
           }
           )}
        {/* <EachImage image={this.props.items[0]}/> */}
      {/* </div> */}
      </React.Fragment>
     );
  }
}
 
export default EachBreed;
