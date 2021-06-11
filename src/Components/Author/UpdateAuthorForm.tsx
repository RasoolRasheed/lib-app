import React, {useState} from "react";
import {Button, Col, Container, Form, FormControl, FormGroup, Row} from "react-bootstrap";
import {XCircle} from "react-feather";

type UpdateAuthorFormProps = {
    currentAuthorName:string,
    closeForm : ()  => void,
    updateAuthor: (event: React.FormEvent, name: string) => void
}
const UpdateAuthorForm:React.FC<UpdateAuthorFormProps> = (props) => {
    const [updateAuthor,setUpdateAuthor] = useState<string>(props.currentAuthorName);
    const [validated, setValidated] = useState(false);

    const handleAuthorChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        const authorName = event.target.value;
        setUpdateAuthor(authorName);
    }

    const submitUpdateAuthorForm = (event:React.FormEvent) => {
        event.preventDefault();
        event.stopPropagation();
        setValidated(true);
        if (updateAuthor === "") {
            return;
        }
        const authorToBeUpdated = updateAuthor;
        setUpdateAuthor("");
        props.updateAuthor(event,authorToBeUpdated);
    }

    return(
        <Container fluid={true}>
            <Row>
                <Col xs={9} sm={10} md={10} xl={10} lg={10}>
                    <p className={"update-author-title px-0"}><u>Update Author</u></p>
                </Col>
                <Col xs={1} sm={2} md={1} xl={1} lg={1} className={"px-0"}>
                    <XCircle className={"update-author-title-xcircle px-0"} onClick={()=> props.closeForm()}/>
                </Col>
            </Row>
            <Row>
                <Col className={"update-form px-5"} xs={12} md={12}>
                    <Form className={"px-0 mx-0"} noValidate validated={validated}
                          onSubmit={(event:React.FormEvent) => submitUpdateAuthorForm(event)}>
                        <FormGroup>
                            <Form.Label className="author-name-label mt-2 mb-0">Name of Author</Form.Label>
                            <FormControl type="text" value={updateAuthor}
                                         onChange={(event:React.ChangeEvent<HTMLInputElement>) =>
                                             handleAuthorChange(event)} required>
                            </FormControl>
                        </FormGroup>
                        <Form.Group className="update-btn-container">
                            <Button className="update-btn" variant="primary" type="submit" size="sm">
                                Update
                            </Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default UpdateAuthorForm;