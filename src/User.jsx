import React, { Component } from 'react';

class User extends Component {
  state = {  }
  render() { 
    return (<div className="user">
      <p>
        Submitted by:
      </p>
      <img className="userImage" src="https://i.pinimg.com/originals/32/be/bb/32bebb917ab933c5ba4ee7832f3036a0.jpg"></img>
    </div> );
  }
}
 
export default User;