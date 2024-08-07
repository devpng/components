export default function PageHeader() {
    return (
        <div className="header-group">
            <div className="header-group_content">
                <img className="header-group_content-image" src="./../zapier-logo.png"/>
                <div className="header-group_content-details">
                    <p>Organization Name</p>
                    <p>43 licenses balance</p>
                </div>
                <div className="badge-primary badge-primary--warning">
                    <div className="badge-primary_circle"></div>
                    <p className="badge-primary_text">Requesting</p>
                </div>
            </div>
            <div className="header-group_actions">
                <button className="btn-base btn-base--tertiary">Add Department</button>
                <button className="btn-base btn-base--secondary">Add License</button>
                <button className="btn-base btn-base--primary">Add License Request</button>
            </div>
        </div>
    )
}