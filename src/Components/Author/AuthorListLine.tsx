import {Col, Row} from "react-bootstrap";
import {Edit, Trash, Trash2} from "react-feather";
import './../../assets/styles/partials/AuthorListLine.scss';
import React, {FC, useState} from "react";
import AddAuthorModel from "./AddAuthorModal";

type authorsListLineProps = {
    name: string,
    id: number,
    updateRequest: (id: number) => void,
    delete: (id:number) => void;
}

const AuthorListLine : React.FC<authorsListLineProps> = (props) => {

    const [isVisibleAddAuthorForm,setIsVisibleAddAuthorForm] = useState<boolean>(false);

    const handleUpdateModel = () => {
        setIsVisibleAddAuthorForm(true);
    }

    const handleCloseEvent = () => {
        setIsVisibleAddAuthorForm(false);
    }

    const handleUpdateAuthorEvent = () => {
        // return props.createAuthor(event, "");
    }

    return(
        <li>
            <Row className={"author-list-line"}>
                <Col xs={10}>{props.id}. {props.name}</Col>
                <Col className={"author-btn-container"}>
                    <Edit className="edit-btn" onClick={() => props.updateRequest(props.id)}/>
                    <Trash2 className="trash-btn" onClick={() => props.delete(props.id)}></Trash2>
                </Col>
            </Row>
        </li>
    );
}

export default AuthorListLine;