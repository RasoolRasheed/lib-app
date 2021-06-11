import React, {useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Welcome from "../Components/Welcome/Welcome";
import LibraryFooter from "../Components/Footer/LibraryFooter";
import ReadingArea from "../Components/ReadingArea/ReadingArea";
import NavBar from '../Components/NavBar/NavBar';

const Library: React.FC = () => {
    return (
        <Container className="library" fluid>
            <Row>
                <Welcome/>
            </Row>
            <Row>
                <ReadingArea/>
            </Row>
            <LibraryFooter/>
        </Container>);
}

export default Library;
