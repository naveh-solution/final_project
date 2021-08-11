import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import './painDairy.css'


//eventDate, startT, endT, painLoc, painTriger, selfT, envStatus, physHelp, medHelp, otherHelp, activeUId


function PainDairyComp({ events, userActive, setShowOrNot }) {
    return (
        <div>
            {events.map(event => <div className="mainDairyComp" key={event.id} onClick= {() => console.log(event.id)}>
                <Col>
                    <div className="colDiv">
                        <h6>Day of Event:</h6>
                        <p>{event.eventDate}</p>
                        <h6>Start Time:</h6>
                        <p>{event.startT}</p>
                        {event.endT !== "" ? <><h6>End Time:</h6>
                            <p>{event.endT}</p></> : null} 
                    </div>
                    <div className="colDiv">
                        <h6>Place of the Pain:</h6>
                        <p>{event.painLoc}</p>
                    </div>
                </Col>
                <Col md={2} className="painDcol">
                    <h6>Self Thoughts:</h6>
                    <p>{event.selfT} </p>
                </Col>
                <Col md={2} className="painDcol">
                    <h6>Physical Trigger:</h6>
                    <p>{event.painTriger}</p>
                </Col>
                <Col md={2} className="painDcol">
                    <h6>What Helped:</h6>
                    <p> <span>{event.physHelp ? <>Physical: {event.physHelp} </> : null }</span> <span>{event.medHelp ? <>Meds:  {event.medHelp} </> : null }  </span>  <span>{event.otherHelp ? <> Other:  {event.otherHelp} </> : null }  </span></p>
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