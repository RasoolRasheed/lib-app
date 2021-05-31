import React, {FC} from 'react';
import {Col} from "react-bootstrap";

const NoBooks: FC = () => {
    return (
        <Col xs={12} md={10}>
            <p className="no-books"><i>No books listed here</i></p>
        </Col>
    );
}

export default NoBooks;