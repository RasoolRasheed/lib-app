import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import LibraryImage from "../../assets/images/anna-hunko-ajE5goOGzZc-unsplash-min.jpg";

const Welcome:React.FC = () =>{
    return(
        <Container>
            <Row>
                <Col className="px-0" xs={12}>
                    <h1 className={"text-center py-2"}>My Library</h1>
                </Col>
                <Col className="px-0" xs={12}>
                    <img src={LibraryImage} alt="Library Image"/>
                </Col>
            </Row>
            <Row className={"credits"}>
                <Col xs={12} className="photo-credits">
                    Photo by
                    <a href="https://unsplash.com/@annahunko?
                       utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                        Anna Hunko
                    </a>
                    on <a href="https://unsplash.com/?
                       utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                >Unsplash
                </a>
                </Col>
            </Row>
        </Container>
    )
}

export default Welcome;