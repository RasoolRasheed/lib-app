import React, {FC} from 'react';
import {Modal, Button} from "react-bootstrap";

type DeleteBookModalProps = {
    bookToDelete: string,
    isVisible: boolean,
    closeModal: () => void,
    acceptDeleteAction: () => void
};

const DeleteBookModal: FC<DeleteBookModalProps> = (props) => {
    return (
        <Modal
            show={props.isVisible}
            onHide={props.closeModal}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header>
                <Modal.Title>Confirm delete action</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Are you sure that you want to delete <b>{props.bookToDelete}</b>?
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => props.closeModal()}>
                    Close
                </Button>
                <Button variant="danger" onClick={() => props.acceptDeleteAction()}>
                    Yes, Delete
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default DeleteBookModal;