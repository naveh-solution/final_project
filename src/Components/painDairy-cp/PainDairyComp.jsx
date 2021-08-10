import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './painDairy.css'

function PainDairyComp() {
    return (
        <div>
            <div className="mainDairyComp">
                <Col>
                    <div className="colDiv">
                        <h6>Day of Event:</h6>
                        <p>10/8/2021</p>
                        <h6>Start Time:</h6>
                        <p>12:15 PM</p>
                    </div>
                    <div className="colDiv">
                        <h6>Place of the Pain:</h6>
                        <p>Some text or all of it will go here</p>
                    </div>
                </Col>
                <Col md={2} className="painDcol">
                    <h6>Self Thoughts:</h6>
                    <p>Some text will be here </p>
                </Col>
                <Col md={2} className="painDcol">
                    <h6>Physical Trigger:</h6>
                    <p>Some text gose here</p>
                </Col>
                <Col md={2} className="painDcol">
                    <h6>What Helped:</h6>
                    <p>Some text gose here</p>
                </Col>
            </div>
        </div>
    );
}

export default PainDairyComp;