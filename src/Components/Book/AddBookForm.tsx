import React, {useState} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import {XCircle} from "react-feather";
import IAuthor from "../../Interface/IAuthor";
import * as CurrencyFormat from 'react-currency-format';
import '../../assets/styles/partials/_add-book-form.scss';
import Select from 'react-select';
import CreateBookTitle from "./CreateBookTitle";

type AddBookProps = {
    createBook: (event: React.FormEvent, name: string, price: string, author: IAuthor[]) => void,
    closeForm: () => void,
    authors: () => IAuthor[]
}
const AddBookForm: React.FC<AddBookProps> = (props) => {
    // Book title
    const [bookTitle, setBookTitle] = useState<string>("");
    // Book Price
    const [price, setPrice] = useState<string>("");
    const [bookAuthor, setBookAuthor] = useState<IAuthor[]>([]);
    const [validated, setValidated] = useState<boolean>(false);

    const handleBookTitleChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
        const book = event.target.value;
        setBookTitle(book);
    }

    const submitBookForm = (event: React.FormEvent) => {
        event.preventDefault();
        event.stopPropagation();
        setValidated(true);

        if (bookTitle === "" || price === "" || bookAuthor === []) {
            return;
        }
        const bookTitleToBeAdded = bookTitle;
        const priceToBeAdded = price;
        const bookAuthorToBeAdded = bookAuthor;
        setBookTitle("");
        setPrice("");
        return props.createBook(event, bookTitleToBeAdded, priceToBeAdded, bookAuthorToBeAdded);
    }

    // Change book Author
    const handleBookAuthorChangeEvent = (value) => {
        setBookAuthor(value);
    }

    const authorsOptions = props.authors().map(
        ({authorName}) => ({label: authorName, value: authorName})
    );

    return (
        <Row className={"add-book-row"}>
            {/*<CreateBookTitle closeForm={}/>*/}
            <Col xs={12} xl={8} sm={12} md={9}>
                <Row>
                    <Col md={11} xs={2} className={"cb-title"}>
                        <u>Create Book</u>
                    </Col>
                    <Col md={1} xs={2}>
                        <XCircle className={"add-book-xcircle"} onClick={props.closeForm}/>
                    </Col>
                </Row>
            </Col>
            <Col md={3} xs={12}/>
            <Col md={1} xs={12}/>
            <Col xs={12} xl={8} sm={12} md={8}>
                <Form
                    noValidate
                    className="ab-form"
                    validated={validated}
                    onSubmit={(event: React.FormEvent) => submitBookForm(event)}>
                    <Form.Group>
                        <Form.Label className="book-title-label mt-2 mb-0">Title of the Book</Form.Label>
                        <Form.Control
                            className="book-title-input" type="text" size="sm" value={bookTitle}
                            onChange={
                                (event: React.ChangeEvent<HTMLInputElement>) => handleBookTitleChangeEvent(event)
                            } required/>
                        <Form.Control.Feedback type="invalid">
                            Please provide a book title.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Label className="book-price-label mt-2 mb-0">Price</Form.Label>
                    <Form.Group>
                        <CurrencyFormat
                            style={{width: '100%'}}
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
                        <Form.Label className="book-author-label mt-2 mb-0">Author</Form.Label>
                        <Select isClearable={true}
                            //value={bookAuthor}
                                defaultValue={props.authors[0]}
                                onChange={handleBookAuthorChangeEvent}
                                options={authorsOptions} required
                        />
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
    );
}

export default AddBookForm;