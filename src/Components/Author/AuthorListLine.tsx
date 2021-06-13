import {Col, Row, Tooltip} from "react-bootstrap";
import {Edit, Trash2} from "react-feather";
import '../../assets/styles/partials/_author-list-line.scss';
import React, {useState} from "react";
import DeleteAuthorModal from "./DeleteAuthorModal";

type authorsListLineProps = {
    name: string,
    id: number,
    updateRequest: (id: number) => void,
    delete: (id:number) => void;
}

const AuthorListLine : React.FC<authorsListLineProps> = (props) => {
    // Visibility of delete author modal
    const [showDeleteAuthorModal, setShowDeleteAuthorModal] = useState<boolean>(false);

    // Display delete author modal
    const openDeleteAuthorModal = () => {
        setShowDeleteAuthorModal(true);
    }
    // When click 'Close'
    const refuseDeleteAuthorAction = () => {
        setShowDeleteAuthorModal(false);
    }
    // When click 'Yes, Delete'
    const acceptDeleteAuthorAction = () => {
        props.delete(props.id);
        setShowDeleteAuthorModal(false);
    }
    const showEditOverlay = (props: any) => (
        <Tooltip id="button-tooltip" {...props}>
            Edit author name
        </Tooltip>
    );
    const showDeleteOverlay = (props: any) => (
        <Tooltip id="button-tooltip" {...props}>
            Delete author name
        </Tooltip>
    );

    return(
        <li>
            <Row className={"author-list-line"}>
                <Col xs={10} md={10}>{props.id}. {props.name}</Col>
                <Col className={"author-list-line-edit-btn"}>
                    <Edit className="edit-btn" onClick={() => props.updateRequest(props.id)}/>
                </Col>
                <Col className={"author-list-line-delete-btn"}>
                    <Trash2 className="trash-btn" onClick={() => openDeleteAuthorModal()}/>
                </Col>
            </Row>
            <DeleteAuthorModal
                authorToDelete={props.name}
                isVisible={showDeleteAuthorModal}
                closeModal={refuseDeleteAuthorAction}
                acceptDeleteAction={acceptDeleteAuthorAction}
            />
        </li>
    );
}

export default AuthorListLine;