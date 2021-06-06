import React, {useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import { Plus } from 'react-feather';
import AddBookForm from '../Book/AddBookForm';
import IAuthor from "../../Interface/IAuthor";
import IBook from '../../Interface/IBook';
import BookListLine from "./BookListLine";
import UpdateBookForm from "./UpdateBookForm";
import NoBooks from "./NoBooks";

type BooksProps = {
    authorsAvailable: () => IAuthor[]
};

const Books:React.FC<BooksProps> = (props) =>{
    let bookId: number = 1;
    const [isVisibleAddBookForm,setIsVisibleAddBookForm] = useState<boolean>(false);
    const [bookList,setBookList] = useState<IBook[]>([]);
    // Visibility of 'UpdateBook' form
    const [isVisibleUpdateBookForm, setIsVisibleUpdateBookForm] = useState<boolean>(false);
    // Book to be update
    const [bookToBeUpdate, setBookToBeUpdate] = useState<number | null>(null);

    const handleCloseEvent = () => {
        setIsVisibleAddBookForm(false);
    }

    const handleAddBookForm = () => {
        setIsVisibleAddBookForm(true);
    }

    const handleCreateBook = (event:React.FormEvent,name:string,price:string,author:string) => {
        event.preventDefault();
        const newBook:IBook = {bookName:name,bookPrice:price,bookAuthor:author};
        const book = bookList.slice();
        book.push(newBook);
        setBookList(book);
        console.log(book);
        setIsVisibleAddBookForm(false);
    }

    // Update a 'Book'
    const handleUpdateBookRequestEvent = (id: number) => {

        setIsVisibleAddBookForm(false);
        setIsVisibleUpdateBookForm(true);
        setBookToBeUpdate(id);
    }

    // Set 'UpdateBook' form invisible
    const handleClickCloseUpdateFormEvent = () => {
        setIsVisibleUpdateBookForm(false);
    }

    // Delete a 'Book'
    const handleDeleteBookEvent = (id: number) => {
        const books: IBook[] = bookList.slice();
        books.splice(id - 1, 1);
        setBookList(books);
        setIsVisibleUpdateBookForm(false);
    }

    const handleUpdateBookEvent = (event: React.FormEvent, title: string, price: string, author: string) => {
        if (bookToBeUpdate === null) {
            return;
        }
        const books = bookList.slice();
        const newBook: IBook = {bookName: title, bookPrice: price, bookAuthor: author};
        books.splice(bookToBeUpdate - 1, 1, newBook);
        setBookList(books);
        setBookToBeUpdate(null);
        setIsVisibleUpdateBookForm(false);
        event.preventDefault();
    }

    return(
        <Container className={"px-5"}>
            <Row className="Books px-0">
                <Col sm={12} md={12}>
                    <h3 className="books-title">Books</h3>
                </Col>
                {
                    bookList.length===0 && <NoBooks/>
                }
                <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                    <ul className="book-list px-0">
                        {bookList.map(
                            (book: IBook) => {
                                return (
                                    <BookListLine
                                        title={book.bookName} price={book.bookPrice} author={book.bookAuthor}
                                        id={bookId++} key={bookId} delete={handleDeleteBookEvent}
                                        updateRequest={handleUpdateBookRequestEvent}
                                    />
                                );
                            }
                        )}
                    </ul>
                </Col>
                <Col sm={12} md={12}>
                    <p className="add-book pt-3">
                        <Plus color="#034fa5" className="add-book-plus" onClick={handleAddBookForm}/>
                        <span className="add-book-text">
                    Add Book
                </span>
                    </p>
                </Col>
                <Col>
                    {
                        isVisibleAddBookForm
                        &&
                        <AddBookForm
                            closeForm={handleCloseEvent}
                            createBook={handleCreateBook}
                            authors={props.authorsAvailable}
                        />
                    }
                    {
                        isVisibleUpdateBookForm
                        &&
                        <UpdateBookForm
                            currentTitle={bookToBeUpdate === null ? "" : bookList[bookToBeUpdate - 1].bookName}
                            currentPrice={bookToBeUpdate === null ? "" : bookList[bookToBeUpdate - 1].bookPrice}
                            currentAuthor={bookToBeUpdate === null ? "" : bookList[bookToBeUpdate - 1].bookAuthor}
                            closeForm={handleClickCloseUpdateFormEvent}
                            updateBook={handleUpdateBookEvent}
                            authors={props.authorsAvailable}
                        />
                    }
                </Col>
            </Row>
        </Container>
    );
}

export default Books;