import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Form() {
    return (
        <Container>
            <Row>
                <Col>
                    <div className="form">
                        <div className="card card--action">
                            <div className="card--action_content">
                                <p className="card--action_content-title">New License Module</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed </p>
                                <p>$2.00 per request</p>
                            </div>
                            <button className="btn-icon btn-icon--success"></button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>

    )
}