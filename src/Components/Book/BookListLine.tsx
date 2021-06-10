import {Col, OverlayTrigger, Row, Tooltip} from "react-bootstrap";
import React, {useState} from "react";
import {Edit, Trash2} from "react-feather";
import DeleteBookModal from "./DeleteBookModal";
import IAuthor from "../../Interface/IAuthor";

type BookListLineProps={
    title: string,
    price: string,
    author: IAuthor[],
    id: number,
    delete: (id: number) => void,
    updateRequest: (id: number) => void
}

const BookListLine:React.FC<BookListLineProps> = (props) => {
    // Visibility of delete book modal
    const [showDeleteBookModal, setShowDeleteBookModal] = useState<boolean>(false);

    // Display delete book modal
    const openDeleteBookModal = () => {
        setShowDeleteBookModal(true);
    }
    // When click 'Close'
    const refuseDeleteBookAction = () => {
        setShowDeleteBookModal(false);
    }
    // When click 'Yes, Delete'
    const acceptDeleteBookAction = () => {
        props.delete(props.id);
        setShowDeleteBookModal(false);
    }
    const showEditOverlay = (props: any) => (
        <Tooltip id="button-tooltip" {...props}>
            Edit book details
        </Tooltip>
    );
    const showDeleteOverlay = (props: any) => (
        <Tooltip id="button-tooltip" {...props}>
            Delete book
        </Tooltip>
    );

    return(
        <li>
            <Row>
                <Col className="AddedBook" xs={6} sm={6} md={6}>
                    {props.id}. {props.title}
                </Col>
                <Col xs={{offset: 2}} sm={{offset: 3}} md={{offset: 2}} lg={{offset: 3}} xl={{offset: 3}}>
                    <OverlayTrigger
                        placement="left"
                        delay={{show: 250, hide: 400}}
                        overlay={showEditOverlay}
                    >
                        <Edit className="edit-btn mx-3" onClick={() => props.updateRequest(props.id)}/>
                    </OverlayTrigger>
                    <OverlayTrigger
                        placement="bottom"
                        delay={{show: 250, hide: 400}}
                        overlay={showDeleteOverlay}
                    >
                        <Trash2 className="trash-btn" onClick={() => openDeleteBookModal()}/>
                    </OverlayTrigger>
                </Col>
            </Row>
            <DeleteBookModal
                bookToDelete={props.title}
                isVisible={showDeleteBookModal}
                closeModal={refuseDeleteBookAction}
                acceptDeleteAction={acceptDeleteBookAction}
            />
        </li>
    )
}

export default BookListLine;