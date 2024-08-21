import React from 'react';

export default function PanelRightSide() {
    return (
        <div className='st-panel st-panel--right'>
            <div className='st-panel__header'>
                <div className='st-panel__header-text'>
                    <h5>Organization Details</h5>
                    <p>Subheader</p>
                </div>
                <button></button>
            </div>
            <div className='st-panel__content'>
                <div className="st-panel__content-header header-group_content">
                    <div className="st-flex st-flex--space-between">
                        <img className="header-group_content-image" src="./../zapier-logo.png"/>
                        <div className="header-group_content-details">
                            <p>Organization Name</p>
                            <p>43 licenses balance</p>
                        </div>
                    </div>
                    <div className="badge-primary badge-primary--warning">
                        <div className="badge-primary_circle"></div>
                        <p className="badge-primary_text">Requesting</p>
                    </div>
                </div>
                <div>
                    <div className="st-accordion__group">
                        <div className="st-accordion__group-header">
                            <div className="st-accordion__group-header__text">
                                <p>Total Licenses</p>
                                <p>Three (3)</p>
                            </div>
                            <button className='st-accordion__group-header__button'>Add More</button>
                        </div>
                    </div>
                    <div className="st-accordion__group">
                        <div className="st-accordion__group-header">
                            <div className="st-accordion__group-header__text">
                                <p>Total Departments</p>
                                <p>Two (2)</p>
                            </div>
                            <button className='st-accordion__group-header__button'>Add More</button>
                        </div>
                    </div>
                    <div className="st-accordion__group">
                        <div className="st-accordion__group-header">
                            <div className="st-accordion__group-header__text">
                                <p>Total Users</p>
                                <p>Eight (8)</p>
                            </div>
                            <button className='st-accordion__group-header__button'>Manage Users</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}