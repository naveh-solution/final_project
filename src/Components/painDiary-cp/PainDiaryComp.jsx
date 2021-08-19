import React from 'react';
import { Col, Row, Button, ThemeProvider } from 'react-bootstrap';
import './painDiary.css'




function PainDairyComp({ events, userActive, setShowOrNot, setSelectedEvent, setManageShowOrNot, selectedEvent, setManageIndex }) {


    //function that get the selected event from the list and will open it in the modal for editing
    function eventToModal(selectedEvent, index) {
        setSelectedEvent(selectedEvent);
        setManageIndex(index);
    }

    function manageClick() {
        // setSelectedEvent(inSelected);
        setManageShowOrNot(true);
    }
   
    const selectedClass = ""

    return (
        <div>
            {events.map((event, index) =>
            <div className={event === selectedEvent ? "mainDairyComp selectedClass" : "mainDairyComp"} key={event.id} onClick={() => eventToModal(event, index)}>
                <Col md={5} sm={12}>
                    <div className="colDiv">
                        <h6>Day of Event:</h6>
                        <p className="innerText">{event.eventDate}</p>
                        <h6>Start Time:</h6>
                        <p>{event.startT}</p>
                        {event.endT !== "" ? <><h6>End Time:</h6>
                            <p>{event.endT}</p></> : null}
                    </div>
                    <div className="colDiv">
                        <h6>Place of the Pain:</h6>
                        <p>{event.painLoc}</p>
                        <h6>Pain Level:</h6>
                        <p>{event.painLevel}</p>
                    </div>

                </Col>
                <Col md={2} sm={12} className="painDcol">
                    <h6>Self Thoughts:</h6>
                    <p>{event.selfT} </p>
                </Col>
                <Col md={2} sm={12} className="painDcol">
                    <h6>Physical Trigger:</h6>
                    <p>{event.painTriger}</p>
                </Col>
                <Col md={2} sm={12} className="painDcol">
                    <h6>What Helped:</h6>
                    <p> <span>{event.physHelp ? <>Physical: {event.physHelp} </> : null}</span> <span>{event.medHelp ? <>Meds:  {event.medHelp} </> : null}  </span>  <span>{event.otherHelp ? <> Other:  {event.otherHelp} </> : null}  </span></p>
                </Col>
            </div>)}
            <div className="eventsBtns">
            <ThemeProvider prefixes={{ btn: 'my-btn' }}>
                <Button variant="success" onClick={() => setShowOrNot(true)}>Create new Event</Button>
                <Button variant="success" disabled={!selectedEvent} onClick={() => manageClick()}>Manage Event</Button>
                <Button variant="success">Sheare Event</Button>
                </ThemeProvider>{' '}
            </div>
        </div>
            );
}

export default PainDairyComp;