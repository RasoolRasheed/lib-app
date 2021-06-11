import AuthorListLine from "./AuthorListLine";
import {Plus} from "react-feather";
import AddAuthorModel from "./AddAuthorModal";
import IAuthor from "../../Interface/IAuthor";
import React, {useState} from "react";
import {Col, Row} from "react-bootstrap";
import UpdateAuthorForm from "./UpdateAuthorForm";

type AuthorsProps = {
    returnAvailableAuthors: (authors: IAuthor[]) => void
};
const Author: React.FC<AuthorsProps> = (props) => {

    const [isVisibleAddAuthorForm, setIsVisibleAddAuthorForm] = useState<boolean>(false);
    let authorId: number = 1;
    const [authorsList, setAuthorsList] = useState<IAuthor[]>([]);
    const [isVisibleUpdateAuthorForm, setIsVisibleUpdateAuthorForm] = useState<boolean>(false);
    const [authorToBeUpdate, setAuthorToBeUpdate] = useState<number | null>(null);

    const handleClickAddAuthorEvent = () => {
        setIsVisibleAddAuthorForm(true);
    }

    const handleCreateAuthorEvent = (event: React.FormEvent, name: string) => {
        event.preventDefault();
        const newAuthor: IAuthor = {authorName: name};
        const author = authorsList.slice();
        author.push(newAuthor);
        setIsVisibleAddAuthorForm(false);
        setAuthorsList(author);
        // Sending to books section
        props.returnAvailableAuthors(author);
    }

    const handleClickCloseUpdateFormEvent = () => {
        setIsVisibleUpdateAuthorForm(false);
    }
    const handleCloseEvent = () => {
        setIsVisibleAddAuthorForm(false);
    }

    const handleUpdateAuthorRequestEvent = (id: number) => {
        setIsVisibleUpdateAuthorForm(true);
        setAuthorToBeUpdate(id);
    }

    const handleUpdateAuthorEvent = (event: React.FormEvent, name: string) => {
        if (authorToBeUpdate === null) {
            return;
        }

        const authors = authorsList.slice();
        const newAuthor: IAuthor = {authorName: name};
        authors.splice(authorToBeUpdate - 1, 1, newAuthor);
        setAuthorsList(authors);
        setAuthorToBeUpdate(null);
        setIsVisibleUpdateAuthorForm(false);
        event.preventDefault();
        // Sending to books section
        props.returnAvailableAuthors(authors);

    }

    const handleDeleteAuthorEvent = (id: number) => {
        const authors: IAuthor[] = authorsList.slice();
        authors.splice(id - 1, 1);
        setAuthorsList(authors);
        setIsVisibleUpdateAuthorForm(false);
        // Sending to books section
        props.returnAvailableAuthors(authors);
    }

    return (
        <Row className="author-container px-3">
            <Col sm={12} md={12}>
                <Row>
                    <Col className={"author"}><p className={"author-title"}>Authors</p></Col>
                </Row>
                <Row>
                    {
                        authorsList.length === 0 &&
                        <Col><i>No authors listed here</i></Col>
                    }
                    <Col md={12}>
                        <ul className="author-list px-0">
                            {authorsList.map(
                                (author: IAuthor) => {
                                    return (
                                        <AuthorListLine
                                            name={author.authorName} id={authorId++} key={authorId}
                                            updateRequest={handleUpdateAuthorRequestEvent}
                                            delete={handleDeleteAuthorEvent}/>
                                    );
                                }
                            )}
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col className={"px-0 add-author-title"}>
                        <Plus className={"add-author-plus"}
                              onClick={() => handleClickAddAuthorEvent()}/> Add Author
                    </Col>
                </Row>
            </Col>
            <Col className={"px-0"} xs={12} md={9}>
                {
                    isVisibleAddAuthorForm
                    &&
                    <AddAuthorModel closeForm={handleCloseEvent} createAuthor={handleCreateAuthorEvent}/>
                }
                {
                    isVisibleUpdateAuthorForm
                    &&
                    <UpdateAuthorForm
                        currentAuthorName={authorToBeUpdate ? authorsList[authorToBeUpdate - 1].authorName : ""}
                        closeForm={handleClickCloseUpdateFormEvent}
                        updateAuthor={handleUpdateAuthorEvent}
                    />
                }
            </Col>
        </Row>
    );
}

export default Author;