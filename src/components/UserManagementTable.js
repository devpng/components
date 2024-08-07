import React from "react";
import { Table, Container, Row, Col } from "react-bootstrap";
import { useState } from "react";


export default function UserManagementTable() {
    const [reports, setReports] = useState(
        [
            {
                id: 1,
                selected: false,
                name: "Rafael Desuyo",
                title: "rafael.desuyo@fusion.com",
                department: "Engineering Team",
                status: "active",
                license: "License One",
                dateCreated: "04/06/2024"
            },
            {
                id: 2,
                selected: false,
                name: "John Doe",
                title: "johndoe1996@fusion.com",
                department: "Design Team",
                status: "active",
                license: "License Two",
                dateCreated: "04/06/2024"
            }
        ]
    );

    const showReports = true;

    return (
        <div className="fusion-table">
            <Container>
                <Row>
                    <Col>
                        <Table>
                            <thead bgColor="transparent">
                                <tr>
                                    <td><p>User Details</p></td>
                                    <td><p>Department</p></td>
                                    <td><p>Status</p></td>
                                    <td><p>Licenses</p></td>
                                    <td><p>Date Created</p></td>
                                    <td><p>Actions</p></td>
                                </tr>
                            </thead>
                            <tbody>
                                { showReports ? ( 
                                    <>
                                        {reports.map((report) => {
                                            console.log(report, 'hello');
                                            return (
                                                <tr key={report.id} className="fusion-table_rows">
                                                    <th >
                                                        <div className="fusion-table_user">
                                                            <img className="fusion-table_user-image" src="./avatar.png" />
                                                            <div className="fusion-table_user-details">
                                                                <p className="label--name">{report.name}</p>
                                                                <p className="label--email">{report.title}</p>
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <th className="report-table_columns"><p className="report-table_text">{report.department}</p></th>
                                                    <th className="report-table_columns">
                                                        <div className="badge-primary badge-primary--success">
                                                            <div className="badge-primary_circle"></div>
                                                            <p className="badge-primary_text">{report.status}</p>
                                                        </div>
                                                    </th>
                                                    <th className="report-table_columns">
                                                        <div className="badge-secondary">
                                                            <p>{report.license}</p>
                                                        </div>
                                                    </th>
                                                    <th className="report-table_columns"><p className="report-table_text">{report.dateCreated}</p></th>
                                                    <th className="report-table_columns">
                                                        <div className="table-actions">
                                                            <button className="btn-icon btn-icon--primary"><img src="/edit.svg"/></button>
                                                            <button className="btn-icon btn-icon--success"><img src="/clipboard.svg"/></button>
                                                            <button className="btn-icon btn-icon--danger"><img src="/trash.svg"/></button>
                                                        </div>
                                                    </th>
                                                </tr>
                                            )
                                        })}
                                    </>
                                ) : (
                                    <p>No reports</p>
                                )}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};