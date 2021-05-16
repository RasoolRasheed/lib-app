import React from 'react';
import './App.scss';
import Library from "./views/Library";
import {Container, Row} from "react-bootstrap";

const App:React.FC= () => {
  return(
    <Container fluid>
      <Row>
        <Library></Library>
      </Row>
    </Container>);
}

export default App;
