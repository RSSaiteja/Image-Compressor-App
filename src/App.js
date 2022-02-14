import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Instructions from "./components/Instructions"
import Compressor from "./components/Compressor";


function App() {
 

  return (
    <>
      <Navbar title="Image - Compressor" />
      <Instructions />
      <Compressor/>
      
    </>
  );
}

export default App;
