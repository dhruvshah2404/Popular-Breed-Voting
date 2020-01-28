import React from 'react';

function User(props){
  
    return <div className="user">
      <p>
        Submitted by:
      </p>
      <img className="userImage" src={props.url.userImage} alt="userImage"></img>
    </div> ;
}
 
export default User;