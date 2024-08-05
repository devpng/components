import React from "react";
import { Table, Container, Row, Col } from "react-bootstrap";
import { useState } from "react";


export default function ReportTableList() {
    const [reports, setReports] = useState(
        [
            {
                id: 1,
                selected: false,
                name: "John Doe",
                title: "Title Zero",
                department: "Engineering Team",
                reportType: "Scheduled",
                scheduleDate: "Every 9th of the month",
                dateCreated: "04/06/2024"
            },
            {
                id: 2,
                selected: false,
                name: "Leanne Graham",
                title: "Title One",
                department: "Design Team",
                reportType: "One Time",
                scheduleDate: "Every 7th of the month",
                dateCreated: "04/06/2024"
            }
        ]
    );

    const showReports = true;

    return (
        <div className="report-table">
            <Container>
                <Row>
                    <Col>
                        <Table>
                            <thead bgColor="transparent">
                                <tr>
                                    <td className="report-table_columns">
                                        <input
                                            className="report-table_checkbox"
                                            type='checkbox'
                                        />
                                    </td>
                                    <td><p>Report Name & Author Name</p></td>
                                    <td><p>Department</p></td>
                                    <td><p>Report Type</p></td>
                                    <td><p>Schedule Date</p></td>
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
                                                <tr key={report.id} className="report-table_rows">
                                                    <th className="report-table_columns">
                                                        <input
                                                            className="report-table_checkbox"
                                                            type='checkbox'
                                                            // onChange={handleOnChange}
                                                        />
                                                    </th>
                                                    <th ><p className="label--g">{report.title}</p><p className="label--lg">{report.name}</p></th>
                                                    <th className="report-table_columns"><p>{report.department}</p></th>
                                                    <th className="report-table_columns"><p>{report.reportType}</p></th>
                                                    <th className="report-table_columns"><p>{report.scheduleDate}</p></th>
                                                    <th className="report-table_columns"><p>{report.dateCreated}</p></th>
                                                    <th className="report-table_columns">
                                                        <div className="report-table_actions">
                                                            <button><img src="/eye.png"/></button>
                                                            <button><img src="/star.png"/></button>
                                                            <button><img src="/download.png"/></button>
                                                            <button><img src="/more-horizontal.png"/></button>
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