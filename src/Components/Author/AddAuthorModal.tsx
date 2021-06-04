import React, {useState} from "react";
import {Button, Col, Container, Form, FormGroup, Row} from "react-bootstrap";
import {XCircle} from "react-feather";
import '../../assets/styles/partials/_addAuthorModal.scss';

type AddAuthorModelProps = {
    closeForm : () => void,
    createAuthor : (event:React.FormEvent,authorName:string) => void
};

const AddAuthorModel : React.FC<AddAuthorModelProps> = (props) => {
    const[enteredAuthor,setEnteredAuthor] = useState<string>("");
    const [validated, setValidated] = useState(false);

    const handleAuthorChangeEvent = (event:React.ChangeEvent<HTMLInputElement>) => {
        const authorName = event.target.value;
        setEnteredAuthor(authorName);
    }
    const submitAuthorForm = (event:React.FormEvent) => {
        event.preventDefault();
        event.stopPropagation();
        setValidated(true);
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
                <Col xs={10} md={4} className={"create-author-title px-0"}>Create Author</Col>
                <Col xs={2} md={3} className={"px-3"}>
                    <XCircle className={"create-author-title-xcircle"}
                               onClick={() => props.closeForm()}>
                </XCircle>
                </Col>
            </Row>
            <Row>
                <Col className={"create-form px-3"} md={7}>
                    <Form noValidate validated={validated} className={"px-0 mx-0"}
                          onSubmit={(event:React.FormEvent) => submitAuthorForm(event)}>
                        <FormGroup>
                            <Form.Label className="author-name-label">Name of Author</Form.Label>
                            <Form.Control
                                className="author-name"
                                type="text"
                                onChange={(event:React.ChangeEvent<HTMLInputElement>) => handleAuthorChangeEvent(event)}
                                value={enteredAuthor} required/>
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid author.
                            </Form.Control.Feedback>
                        </FormGroup>
                        <Form.Group className="create-btn-container ">
                            <Button className="create-btn btn-primary" variant="primary" type="submit" size="sm">
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