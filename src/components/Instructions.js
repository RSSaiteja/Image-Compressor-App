import React from "react";


export default function Instructions(props) {
  const textStyle = {
    marginTop: "20px",
    marginLeft: "20px",
    
  };
  return (
    <>
      <div style={textStyle}>
        <h5>Three Simple Steps to Follow :</h5>
        <ul class="list-group list-group-flush" style={textStyle}>
          <li class="list-group-item"> Step-1: Upload the Image</li>
          <li class="list-group-item">Step-2: Click on Compress Image Button</li>
          <li class="list-group-item">Step-3: Download the Compressed Image</li>
        </ul>
      </div>
    </>
  );
}
