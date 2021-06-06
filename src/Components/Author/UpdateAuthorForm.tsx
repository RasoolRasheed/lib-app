import React, {useState} from "react";
import {Button, Col, Container, Form, FormControl, FormGroup, Row} from "react-bootstrap";
import {XCircle} from "react-feather";
import '../../assets/styles/partials/_update-author-form.scss';

type UpdateAuthorFormProps = {
    currentAuthorName:string,
    closeForm : ()  => void,
    updateAuthor: (event: React.FormEvent, name: string) => void
}
const UpdateAuthorForm:React.FC<UpdateAuthorFormProps> = (props) => {
    const [updateAuthor,setUpdateAuthor] = useState<string>("");

    const handleAuthorChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        const updateAuthor = event.target.value;
        setUpdateAuthor(updateAuthor);
    }

    const submitUpdateAuthorForm = (event:React.FormEvent) => {
        const authorToBeUpdated = updateAuthor;
        setUpdateAuthor("");
        props.updateAuthor(event,authorToBeUpdated);
    }

    return(
        <Container fluid={true}>
            <Row>
                <Col xs={10} md={4} className={"update-author-title px-0"}>
                    <p><u>Update Author</u></p>
                </Col>
                <Col xs={2} md={3} className={"px-3"}>
                    <XCircle className={"update-author-title-xcircle"} onClick={()=> props.closeForm()}/>
                </Col>
            </Row>
            <Row>
                <Col className={"update-form px-3"} md={7}>
                    <Form className={"px-0 mx-0"}
                          onSubmit={(event:React.FormEvent) => submitUpdateAuthorForm(event)}>
                        <FormGroup>
                            <Form.Label className="author-name-label">Name of Author</Form.Label>
                            <FormControl type="text" value={updateAuthor}
                                         onChange={(event:React.ChangeEvent<HTMLInputElement>) =>
                                             handleAuthorChange(event)}>
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