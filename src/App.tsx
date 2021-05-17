import React from 'react';
import './App.scss';
import {Container} from "react-bootstrap";
import Library from "./views/Library";

const App:React.FC= () => {
  return(
      <Container className="px-0" fluid>
        <Library></Library>
      </Container>
  );
}

export default App;
