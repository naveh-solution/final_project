import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './painDairy.css'

function PainDairyComp({events, userActive}) {
    return (
        <div>
            {events.map(event => <div className="mainDairyComp">
                <Col>
                    <div className="colDiv">
                        <h6>Day of Event:</h6>
                        <p>{event.date}</p>
                        <h6>Start Time:</h6>
                        <p>{event.sTime}</p>
                    </div>
                    <div className="colDiv">
                        <h6>Place of the Pain:</h6>
                        <p>{event.painLoc}</p>
                    </div>
                </Col>
                <Col md={2} className="painDcol">
                    <h6>Self Thoughts:</h6>
                    <p>{event.selfThou} </p>
                </Col>
                <Col md={2} className="painDcol">
                    <h6>Physical Trigger:</h6>
                    <p>{event.physTriger}</p>
                </Col>
                <Col md={2} className="painDcol">
                    <h6>What Helped:</h6>
                    <p>{event.physHelp}, Meds: {event.medHelp}</p>
                </Col>
            </div> )}
        </div>
    );
}

export default PainDairyComp;