import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Instructions from "./components/Instructions"
import Compressor from "./components/Compressor";
// import Extract from "./components/Extract"
// import Tesseract from 'tesseract.js';


// Tesseract.recognize(
//   'https://tesseract.projectnaptha.com/img/eng_bw.png',
//   'eng',
//   { logger: m => console.log(m) }
// ).then(({ data: { text } }) => {
//   console.log(text);
// })




function App() {
 

  return (
    <>
      <Navbar title="Image - Compressor" />
      <Instructions />
      <Compressor/>
      {/* <Extract/> */}
    </>
  );
}

export default App;
