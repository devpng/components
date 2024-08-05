import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from 'react-bootstrap/Image';

export default function ReportTemplateList() {
    const [templates, setTemplates] = useState([
        {
            id: 1,
            name: 'template one',
            author: 'Rafael Desuyo',
            thumbnail: '/thumbnail-1.png'
        },
        {
            id: 2,
            name: 'template two',
            author: 'Fusion User',
            thumbnail: '/thumbnail-2.png'
        },
        {
            id: 3,
            name: 'template three',
            author: 'Fusion Department Head',
            thumbnail: '/thumbnail-3.png'
        },
        {
            id: 4,
            name: 'template four',
            author: 'Fusion User',
            thumbnail: '/thumbnail-2.png'
        },
        {
            id: 5,
            name: 'template five',
            author: 'Fusion User',
            thumbnail: '/thumbnail-1.png'
        },
    ])
    return (
        <div className="templates-container">
            <Container>
                <Row>
                    <Col>
                        <div className="templates-header">
                            <h4>Create Report</h4>
                            <button className="templates-see-more">See Template Gallery</button>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="templates-card"> 
                            <button className="templates-card_default"></button>
                            <p>Blank Document</p>
                        </div>
                    </Col>
                    {templates.map((template) => {
                        return (
                            <Col key={template.id}>
                                <div className="templates-card"> 
                                    <button className="templates-card_default">
                                        <Image
                                            alt="template-thumbnail"
                                            src={template.thumbnail}
                                            width={170}
                                            height={200}
                                        />
                                        {/* <img src={template.thumbnail} alt="template-thumbnail"/> */}
                                    </button>
                                    <p>{template.name}</p>
                                    <p>{template.author}</p>
                                </div>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </div>
    )
};