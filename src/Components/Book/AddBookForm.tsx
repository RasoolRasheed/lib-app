import React, {useState} from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {XCircle} from "react-feather";
import IAuthor from "../../Interface/IAuthor";

type AddBookProps = {
    createBook : (event:React.FormEvent,name:string,price:number,author:IAuthor) => void
    closeForm: () =>void;
}
const AddBookForm:React.FC<AddBookProps> = (props) => {
    const [validated,setValidated] = useState<boolean>(false);

    const submitBookForm = (event:React.FormEvent) => {

    }
    return(
        <Container>
            <Row>
                <Col className={"add-book px-0"}>
                    Create Book
                </Col>
                <Col>
                    <XCircle className={"add-book-xcircle"} ></XCircle>
                </Col>
            </Row>
            <Row>
                <Col xl={9} lg={9} md={9} xs={12}>
                    <Form
                        noValidate
                        className="ab-form"
                        validated={validated}
                        onSubmit={(event: React.FormEvent) => submitBookForm(event)}
                    >
                        <Form.Group>
                            <Form.Label className="book-title-label">Title of the Book</Form.Label>
                            <Form.Control
                                className="book-title-input"
                                type="text"
                                size="sm"
                                //value={bookTitle}
                                // onChange={
                                //     (event: React.ChangeEvent<HTMLInputElement>) => handleBookTitleChangeEvent(event)
                                // }
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a book title.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Label className="book-price-label">Price</Form.Label>
                        <Form.Group>
                            {/*Book Price currency-format*/}
                            {/*<CurrencyFormat*/}
                            {/*    className="book-price-input"*/}
                            {/*    size="sm"*/}
                            {/*    inputMode="numeric"*/}
                            {/*    thousandSeparator={true}*/}
                            {/*    prefix={'$'}*/}
                            {/*    value={price}*/}
                            {/*    onValueChange={*/}
                            {/*        (values) => {*/}
                            {/*            const {formattedValue, value} = values;*/}
                            {/*            setPrice(value);*/}
                            {/*        }*/}
                            {/*    }*/}
                            {/*    required*/}
                            {/*/>*/}
                            <Form.Control.Feedback type="invalid">
                                Please provide a Price.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="book-author-label">Author</Form.Label>

                            {/*<Select options={options1}/>*/}

                            {/*<Form.Control*/}
                            {/*    className="book-author-input"*/}
                            {/*    size="sm"*/}
                            {/*    as="select"*/}
                            {/*    onChange={*/}
                            {/*        (event: React.ChangeEvent<HTMLSelectElement>) => handleBookAuthorChangeEvent(event)*/}
                            {/*    }*/}
                            {/*    value={bookAuthor}*/}
                            {/*    required*/}
                            {/*>*/}
                            {/*{props.authors().map(*/}
                            {/*    (author: IAuthor) => {*/}
                            {/*        return (*/}
                            {/*            <option*/}
                            {/*                value={author.authorName}*/}
                            {/*                key={author.authorName}*/}
                            {/*            >*/}
                            {/*                {author.authorName}*/}
                            {/*            </option>*/}
                            {/*        );*/}
                            {/*    }*/}
                            {/*)}*/}
                            {/*</Form.Control>*/}
                            <Form.Control.Feedback type="invalid">
                                Please select a book author.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="create-btn-container">
                            <Button className="create-btn" variant="primary" type="submit" size="sm">
                                Create
                            </Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default AddBookForm;