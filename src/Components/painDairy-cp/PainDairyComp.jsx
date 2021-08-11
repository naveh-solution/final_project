import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import './painDairy.css'

function PainDairyComp({ events, userActive, setShowOrNot }) {
    return (
        <div>
            {events.map(event => <div className="mainDairyComp">
                <Col>
                    <div className="colDiv">
                        <h6>Day of Event:</h6>
                        <p>{event.date}</p>
                        <h6>Start Time:</h6>
                        <p>{event.sTime}</p>
                        {event.eTime !== "" ? <><h6>End Time:</h6>
                            <p>{event.eTime}</p></> : null} 
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
                    <p> <span>{event.physHelp ? <>Physical {event.physHelp} </> : null }</span> <span>{event.medHelp ? <>Meds  {event.medHelp} </> : null }  </span>  <span>{event.otherHelp ? <> <h6>Other:</h6>  {event.otherHelp} </> : null }  </span></p>
                </Col>
            </div>)}
            <div className="eventsBtns">
                <Button variant="success" onClick={() => setShowOrNot(true)}>Create new Event</Button>
                <Button variant="success">Manage Event</Button>
                <Button variant="success">Sheare Event</Button>
            </div>
        </div>
    );
}

export default PainDairyComp;