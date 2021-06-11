import React, {FC, useState} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {XCircle} from 'react-feather';
import IAuthor from "../../Interface/IAuthor";
import * as CurrencyFormat from 'react-currency-format';
import Select from 'react-select';

type UpdateBookFormProps = {
    closeForm: () => void,
    updateBook: (event: React.FormEvent, title: string, price: string, author: IAuthor[]) => void,
    authors: () => IAuthor[],
    currentTitle: string,
    currentPrice: string,
    currentAuthor: IAuthor[]
};

const UpdateBookForm: FC<UpdateBookFormProps> = (props) => {
    // Book Price
    const [enteredPrice, setEnteredPrice] = useState<string>(props.currentPrice);
    // Book title
    const [enteredTitle, setEnteredTitle] = useState<string>(props.currentTitle);
    // Book Author
    const [enteredAuthor, setEnteredAuthor] = useState<IAuthor[]>(props.currentAuthor);
    // Validate
    const [validated, setValidated] = useState<boolean>(false);

    // Handling changes of book author field
    const handleEnterAuthorChangeEvent = (event) => {
        setEnteredAuthor(event);
    }
    // Handling changes of book price field
    const handleEnterPriceChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
        const price = event.target.value;
        setEnteredPrice(price);
    }
    // Handling changes of book price field
    const handleEnterTitleChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
        const title = event.target.value;
        setEnteredTitle(title);
    }
    // submit update book form
    const submitUpdateBookForm = (event: React.FormEvent) => {
        event.preventDefault()
        event.stopPropagation()
        setValidated(true);
        if (enteredTitle === "" || enteredPrice === "" || enteredAuthor === []) {
            return;
        }

        const bookTitleToBeUpdated = enteredTitle;
        const bookPriceToBeUpdated = enteredPrice;
        const bookAuthorToBeUpdated:IAuthor[] = enteredAuthor;
        setEnteredTitle("");
        setEnteredPrice("");
        setEnteredAuthor([]);
        return props.updateBook(event, bookTitleToBeUpdated, bookPriceToBeUpdated, bookAuthorToBeUpdated);
    }

    const authorsOptions = props.authors().map(
        ({ authorName}) => ({ label: authorName, value: authorName })
    );

    return (
            <Row>
                <Col md={9} xs={12}>
                    <Row>
                        <Col className="ub-title" md={11} xs={10}>
                            <p className="ub-title-text"><u>Update Book</u></p>
                        </Col>
                        <Col className="close-btn" md={1} xs={2} onClick={() => props.closeForm()}>
                            <XCircle className="close-icon"/>
                        </Col>
                    </Row>
                </Col>
                <Col md={3} xs={12}/>
                <Col md={1} xs={12}/>
                <Col md={8} xs={12}>
                    <Form
                        noValidate validated={validated} className="ub-form"
                        onSubmit={(event: React.FormEvent) => submitUpdateBookForm(event)} >
                        <Form.Group>
                            <Form.Label className="book-title-label mt-2 mb-0">Title of the Book</Form.Label>
                            <Form.Control
                                className="book-title-input"
                                type="text"
                                size="sm"
                                value={enteredTitle}
                                onChange={
                                    (event: React.ChangeEvent<HTMLInputElement>) =>
                                        handleEnterTitleChangeEvent(event)
                                }
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a book title.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Label className="book-price-label mt-2 mb-0">Price</Form.Label>
                        <Form.Group>
                            <CurrencyFormat
                                style={{width: '100%'}}
                                className="book-price-input" size="sm" inputMode="numeric" thousandSeparator={true}
                                prefix={'$'} value={enteredPrice}
                                onChange={
                                    (event: React.ChangeEvent<HTMLInputElement>) =>
                                        handleEnterPriceChangeEvent(event)
                                } required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide an price number.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="book-author-label mt-2 mb-0">Author</Form.Label>
                            <Select isClearable={true}
                                    defaultValue={props.authors[0]}
                                    onChange={handleEnterAuthorChangeEvent}
                                    options={authorsOptions}
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please select an author.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="update-btn-container">
                            <Button className="update-btn" variant="primary" type="submit" size="sm">
                                Update
                            </Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
    );
}

export default UpdateBookForm;