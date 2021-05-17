import {Button, Col, Container, Row} from "react-bootstrap";
import {XCircle} from "react-feather";
import React from "react";
import '../../assets/styles/partials/AddAuthorModal.scss';

type AddAuthorModelProps = {
    closeForm : () => void,
    createAuthor : (event:React.FormEvent,name:string) => void
}
const AddAuthorModel : React.FC<AddAuthorModelProps> = (props) => {
    const inVisibleAddAuthorForm = () => {

    }

    return(
        <Container>
            <Row>
                <Col className={"create-author-title"}>Create Author</Col>
                <Col><XCircle className={"create-author-title-xcircle"} onClick={() => props.closeForm()}></XCircle></Col>
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
        </Container>
    )
}

export default AddAuthorModel;