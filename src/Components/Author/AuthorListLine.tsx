import {Col, Row} from "react-bootstrap";
import {Edit, Trash, Trash2} from "react-feather";
import './../../assets/styles/partials/AuthorListLine.scss';

const AuthorListLine : React.FC = () => {
    return(
        //<ol>
        <li>
            <li>
            <Row>
                <Col xs={10}>1.Author 01</Col>
                <Col><Edit className="edit-btn" /></Col>
                <Col><Trash2></Trash2></Col>
            </Row>
            </li>
            <li>
                <Row>
                    <Col xs={10}>1.Author 01</Col>
                    <Col><Edit className="edit-btn" /></Col>
                    <Col><Trash2></Trash2></Col>
                </Row>
            </li>
        </li>

    );
}

export default AuthorListLine;