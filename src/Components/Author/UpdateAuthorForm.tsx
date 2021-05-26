import React, {useState} from "react";
import {Button, Col, Container, Form, FormControl, FormGroup, Row} from "react-bootstrap";
import {XCircle} from "react-feather";
import '../../assets/styles/partials/UpdateAuthorForm.scss';

type UpdateAuthorForm = {
    currentAuthorName:string,
    closeForm : ()  => void,
    updateAuthor: (event: React.FormEvent, name: string) => void
}
const UpdateAuthorForm:React.FC<UpdateAuthorForm> = (props) => {
    const [updateAuthor,setUpdateAuthor] = useState<string>("");

    const handleAuthorChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        const updateAuthor = event.target.value;
        setUpdateAuthor(updateAuthor);
        // return props.updateAuthor(event,updateAuthor);
    }

    const closeUpdateForm = () => {

    }
    const submitUpdateAuthorForm = (event:React.FormEvent) => {
        const authorToBeUpdated = updateAuthor;
        setUpdateAuthor("");
        props.updateAuthor(event,authorToBeUpdated);
    }

    return(
        <Container>
            <Row>
                <Col>
                    <p>Update Author</p>
                </Col>
                <Col>
                    <XCircle className={"edit-close-btn"} onClick={()=> props.closeForm()}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form onSubmit={(event:React.FormEvent) => submitUpdateAuthorForm(event)}>
                        <FormGroup>
                            <Form.Label className="author-name-label">Name of Author</Form.Label>
                            <FormControl type="text" value={updateAuthor} onChange={(event:React.ChangeEvent<HTMLInputElement>) => handleAuthorChange(event)}></FormControl>
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