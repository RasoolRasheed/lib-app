import React, { FunctionComponent } from 'react';
import {Button, Alert, Row, Col, FormControl, Container} from "react-bootstrap"; // importing FunctionComponent
import '../../../assets/styles/Author.scss';
import plusIcon from '../../../assets/images/plus.svg';
import crossIcon from '../../../assets/images/x-circle.svg';
import editIcon from '../../../assets/images/edit.svg';
import trashIcon from '../../../assets/images/trash-2.svg';

type CardProps = {
    title: string,
    paragraph: string
}

interface AuthorProps{
    name:string;
    //person:CardProps,
    //i:number,
    //fn:(bob:string) => number
}
const Author: React.FC<AuthorProps> = () => {
    return <div>
    <Container>
        <Row>
            <Col sm={6}>
                <Row className={"back"}>
                    <h2>Books</h2>
                </Row>
            </Col>
            <Col sm={6}>
                <Row><Col className="border-bottom"><h3>Authors</h3></Col></Row>
                {/*<Row ><strong>Authors</strong></Row>*/}
                <Row><Col> 1 Author1 name </Col><Col><img src={editIcon} alt="editIcon" width={15} height={15}></img> <img src={trashIcon} alt="trashIcon" width={15} height={15}></img></Col></Row>
                <Row><Col> 2 Author2 name </Col><Col><img src={editIcon} alt="editIcon" width={15} height={15}></img> <img src={trashIcon} alt="trashIcon" width={15} height={15}></img></Col></Row>
                <Row><Col> 3 Author3 name </Col><Col><img src={editIcon} alt="editIcon" width={15} height={15}></img> <img src={trashIcon} alt="trashIcon" width={15} height={15}></img></Col></Row>
                <Row>
                    <Col><img src={plusIcon} alt="plusIcon"></img>Add Author</Col>
                </Row>
                <Row>
                    <Col className={"create-author-title"}>Create Author</Col>
                    <Col><img src={crossIcon} alt="plusIcon"></img></Col>
                </Row>
                <Row>
                    <Col><p>Name of Author</p></Col>
                </Row>
                <Row>
                    <Col xs={6} className={"create-author-title"}><input type="text"></input></Col>
                </Row>
                <Row>
                    <Col className={"create-author-title"}><Button className={"btn btn-primary"}>create</Button></Col>
                </Row>
            </Col>
        </Row>
    </Container>
    </div>;
}

export default Author;