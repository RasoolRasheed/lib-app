import React, {FC,useState} from "react";
import {Button, Col, Container, Form, FormGroup, Row} from "react-bootstrap";
import {XCircle} from "react-feather";
import '../../assets/styles/partials/AddAuthorModal.scss';

type AddAuthorModelProps = {
    closeForm : () => void,
    createAuthor : (event:React.FormEvent,authorName:string) => void
};

const AddAuthorModel : React.FC<AddAuthorModelProps> = (props) => {
    const[enteredAuthor,setEnteredAuthor] = useState<string>("");

    const inVisibleAddAuthorForm = () =>
    {

    }
    const handleAuthorChangeEvent = (event:React.ChangeEvent<HTMLInputElement>) => {
        const authorName = event.target.value;
        setEnteredAuthor(authorName);
    }
    const submitAuthorForm = (event:React.FormEvent) => {
        console.log("subm");
        event.preventDefault();
        event.stopPropagation();
        if(enteredAuthor === ""){
            return;
        }
        const authorToBeAdded = enteredAuthor;
        setEnteredAuthor("");
        return props.createAuthor(event, authorToBeAdded);
    }
    return(
        <Container fluid={true}>
            <Row>
                <Col xs={5} md={5} className={"create-author-title px-0"}>Create Author</Col>
                <Col xs={5} md={1} className={"px-0 border border-danger"}> <XCircle className={"create-author-title-xcircle"}
                               onClick={() => props.closeForm()}>
                </XCircle>
                </Col>

            </Row>
            <Row>
                <Col className={"create-form px-0"} md={6}>
                    <Form className={"px-4"} onSubmit={(event:React.FormEvent) => submitAuthorForm(event)}>
                        <FormGroup>
                            <Form.Label className="author-name-label">Name of Author</Form.Label>
                            <Form.Control
                                className="author-name"
                                type="text" onChange={(event:React.ChangeEvent<HTMLInputElement>) => handleAuthorChangeEvent(event)}
                                value={enteredAuthor} required/>
                        </FormGroup>
                        <Form.Group className="create-btn-container ">
                            <Button className="create-btn " variant="primary" type="submit" size="sm">
                                Create
                            </Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default AddAuthorModel;