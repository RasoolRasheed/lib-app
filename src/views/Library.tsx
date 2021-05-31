import React, {ReactElement, useState} from 'react';
import LibraryImage from '../assets/images/anna-hunko-ajE5goOGzZc-unsplash-min.jpg';
import {Col, Container, Image, Row} from "react-bootstrap";
import '../assets/styles/Library.scss'
import Author from "../Components/Author/Author";
import Book from "../Components/Book/Book";
import IAuthor from "../Interface/IAuthor";
import Welcome from "../Components/Welcome/Welcome";
import LibraryFooter from "../Components/Footer/LibraryFooter";

const Library:React.FC =() =>{
    // Author list to be rendered inside add book form
    const [fullAuthorList, setFullAuthorList] = useState<IAuthor[]>([]);

    // Get all available authors from the authors section
    const getAvailableAuthors = (authors: IAuthor[]) => {
        setFullAuthorList(authors);
    }

    // Send all available authors into books section
    const sendAvailableAuthors = (): IAuthor[] => {
        return fullAuthorList;
    }

    return(
        <Container className="Library" fluid>
            <Row>
                <Welcome></Welcome>
            </Row>
            <Row>
                <Col sm={6}><Book authorsAvailable={sendAvailableAuthors}></Book></Col>
                <Col sm={6}><Author returnAvailableAuthors={getAvailableAuthors}></Author></Col>
            </Row>
            <LibraryFooter/>
        </Container>);
}

export default Library;
