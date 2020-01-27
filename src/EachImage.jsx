import React from "react";
// {
//   fetch('https://dog.ceo/api/breed/husky/images/random')
//     .then((res) => {
//       return res.json();
//     }).then(( function(data) {
//       EachImage(data)
//     }))
// }
function EachImage(props) {
  console.log(props.image);
  
  return (
    <div className="eachImage">
      <img
        src={props.image}
        alt="BreedImage"
      ></img>
    </div>
  );
}

export default EachImage;
