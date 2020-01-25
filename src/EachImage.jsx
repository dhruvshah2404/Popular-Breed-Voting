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
  return (
    <div className="eachImage">
      <img
        src="https://images.fineartamerica.com/images-medium-large-5/square-pug-banner-art.jpg"
        alt="BreedImage"
      ></img>
    </div>
  );
}

export default EachImage;
