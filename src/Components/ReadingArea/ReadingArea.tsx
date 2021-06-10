import React, {useState} from "react";
import {Col, Row} from "react-bootstrap";
import Book from "../Book/Book";
import Author from "../Author/Author";
import IAuthor from "../../Interface/IAuthor";

const ReadingArea: React.FC = () => {

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

    return (
        <Row>
            <Col md={{order: 'first', span: 6}} xs={{order: 'last', span: 12}}>
                <Book authorsAvailable={sendAvailableAuthors}/>
            </Col>
            <Col sm={6} md={6}><Author returnAvailableAuthors={getAvailableAuthors}/>
            </Col>
        </Row>
    )
}
export default ReadingArea;
