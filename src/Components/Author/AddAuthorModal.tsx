import React, {useState} from "react";
import {Button, Col, Container, Form, FormGroup, Row} from "react-bootstrap";
import {XCircle} from "react-feather";

type AddAuthorModelProps = {
    closeForm: () => void,
    createAuthor: (event: React.FormEvent, authorName: string) => void
};

const AddAuthorModel: React.FC<AddAuthorModelProps> = (props) => {
    const [enteredAuthor, setEnteredAuthor] = useState<string>("");
    const [validated, setValidated] = useState(false);

    const handleAuthorChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
        const authorName = event.target.value;
        setEnteredAuthor(authorName);
    }
    const submitAuthorForm = (event: React.FormEvent) => {
        event.preventDefault();
        event.stopPropagation();
        setValidated(true);
        if (enteredAuthor === "") {
            return;
        }
        const authorToBeAdded = enteredAuthor;
        setEnteredAuthor("");
        return props.createAuthor(event, authorToBeAdded);
    }
    return (
        <Container fluid={true}>
            <Row className={"author-title-row"}>
                <Col xs={9} sm={10} md={10} xl={10} lg={9}><p className={"create-author-title px-0"}><u>Create Author</u></p></Col>
                <Col xs={1} sm={1} md={1} xl={1} lg={1} className={"px-0"}>
                    <XCircle className={"create-author-title-xcircle px-0"}
                             onClick={() => props.closeForm()}>
                    </XCircle>
                </Col>
            </Row>
            <Row>
                <Col className={"create-form px-5"} xs ={12} md={12} lg={12} >
                    <Form noValidate validated={validated} className={"px-0 mx-0"}
                          onSubmit={(event: React.FormEvent) => submitAuthorForm(event)}>
                        <FormGroup>
                            <Form.Label className="author-name-label mt-2 mb-0">Name of Author</Form.Label>
                            <Form.Control
                                className="author-name mb-3"
                                type="text"
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleAuthorChangeEvent(event)}
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