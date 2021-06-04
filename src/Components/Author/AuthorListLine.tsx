import {Col, Row} from "react-bootstrap";
import {Edit, Trash2} from "react-feather";
import '../../assets/styles/partials/_authorListLine.scss';
import React from "react";

type authorsListLineProps = {
    name: string,
    id: number,
    updateRequest: (id: number) => void,
    delete: (id:number) => void;
}

const AuthorListLine : React.FC<authorsListLineProps> = (props) => {

    return(
        <li>
            <Row className={"author-list-line"}>
                <Col xs={10}>{props.id}. {props.name}</Col>
                <Col className={"author-btn-container"}>
                    <Edit className="edit-btn" onClick={() => props.updateRequest(props.id)}/>
                </Col>
                <Col>
                    <Trash2 className="trash-btn" onClick={() => props.delete(props.id)}/>
                </Col>
            </Row>
        </li>
    );
}

export default AuthorListLine;