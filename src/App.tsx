import React from 'react';
import './App.css';
import './App.scss';
import Author from "./Components/views/Author/Author";
import Welcome from "./Components/views/welcome/Welcome";

const App:React.FC= () => {
  return <div>
    <Welcome></Welcome>
    <Author name={"Razool"}></Author>
  </div>;
}

export default App;
