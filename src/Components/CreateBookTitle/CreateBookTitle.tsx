import React from "react";
import {Col, Row} from "react-bootstrap";
import {XCircle} from "react-feather";

type CreateBookTitleProps = {
    closeForm: () => void;
}

const CreateBookTitle: React.FC<CreateBookTitleProps> = (props) => {
    return (
        <Col xs={12} xl={8} sm={12} md={12}>
            <Row>
                <Col xs={10} xl={11} sm={11} md={11} lg={9}>
                    <p className={"cb-title"}><u>Create Book</u></p>
                </Col>
                <Col xs={1} xl={1} sm={1} md={2} lg={2}>
                    <XCircle className={"add-book-xcircle px-0"} onClick={props.closeForm}/>
                </Col>
            </Row>
        </Col>
    )
}
export default CreateBookTitle;
