import React, {useState} from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {XCircle} from "react-feather";
import IAuthor from "../../Interface/IAuthor";
import * as CurrencyFormat from 'react-currency-format';
import '../../assets/styles/partials/_addBookForm.scss';

type AddBookProps = {
    createBook : (event:React.FormEvent,name:string,price:string,author:string) => void,
    closeForm: () =>void,
    authors: () => IAuthor[]
}
const AddBookForm:React.FC<AddBookProps> = (props) => {
    // Book title
    const [bookTitle, setBookTitle] = useState<string>("");
    // Book Price
    const [price, setPrice] = useState<string>("");
    const [bookAuthor, setBookAuthor] = useState<string>("");
    const [validated,setValidated] = useState<boolean>(false);

    const handleBookTitleChangeEvent = (event:React.ChangeEvent<HTMLInputElement>) =>{
        const book = event.target.value;
        setBookTitle(book);
    }

    const submitBookForm = (event:React.FormEvent) => {
        event.preventDefault();
        event.stopPropagation();
        setValidated(true);
        const bookTitleToBeAdded = bookTitle;
        const priceToBeAdded = price;
        const bookAuthorToBeAdded = bookAuthor;
        setBookTitle("");
        setPrice("");

        return props.createBook(event,bookTitleToBeAdded,priceToBeAdded,bookAuthorToBeAdded);
    }
    // Change book Author
    const handleBookAuthorChangeEvent = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newBookAuthor = event.target.value;
        setBookAuthor(newBookAuthor);
    }
    return(
        <Container className="ab-form-container" fluid={true}>
            <Row>
                <Col className={"cb-title px-0"}>
                    <u>Create Book</u>
                </Col>
                <Col>
                    <XCircle className={"add-book-xcircle"} onClick={props.closeForm}/>
                </Col>
            </Row>
            <Row>
                <Col md={8} xs={10}>
                    <Form
                        noValidate
                        className="ab-form"
                        validated={validated}
                        onSubmit={(event: React.FormEvent) => submitBookForm(event)}>
                        <Form.Group>
                            <Form.Label className="book-title-label">Title of the Book</Form.Label>
                            <Form.Control
                                className="book-title-input" type="text" size="sm" value={bookTitle}
                                onChange={
                                    (event: React.ChangeEvent<HTMLInputElement>) => handleBookTitleChangeEvent(event)
                                } required/>
                            <Form.Control.Feedback type="invalid">
                                Please provide a book title.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Label className="book-price-label">Price</Form.Label>
                        <Form.Group>
                            <CurrencyFormat
                                className="book-price-input"
                                size="sm" inputMode="numeric" thousandSeparator={true} prefix={'$'}
                                value={price} onValueChange={(values) => {
                                const {value} = values;
                                setPrice(value);
                            }
                            } required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a Price.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="book-author-label">Author</Form.Label>
                            <Form.Control
                                className="book-author-input" size="sm" as="select"
                                onChange={
                                    (event: React.ChangeEvent<HTMLSelectElement>) =>
                                        handleBookAuthorChangeEvent(event)
                                }
                                value={bookAuthor} required>
                                {props.authors().map(
                                    (author: IAuthor) => {
                                        return (
                                            <option
                                                value={author.authorName}
                                                key={author.authorName}>
                                                {author.authorName}
                                            </option>
                                        );
                                    }
                                )}
                            </Form.Control>
                            <Form.Control.Feedback type="invalid">
                                Please select a book author.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="create-btn-container px-0">
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