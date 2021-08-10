import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap'
import './painEventComp.css'


function PainEventComp({ currentTime, addEvent }) {

    const [painLoc, setPainLoc] = React.useState("");
    const [painTriger, setPainTriger] = React.useState("");
    const [startT, setStartT] = React.useState(currentTime);
    const [eventDate, setEventDate] = React.useState("")
    const [selfT, setSelfT] = React.useState("")
    const [envStatus, setEnvStatus] = React.useState("")



    return (
        <div className="eventDiv-cp">
            <Row>
                <Col className="leftPenEvent">
                    <Form>
                        <div className="mb-3 dateTimeRow">

                            <Form.Group as={Col} controlId="formPainEventStartT:">
                                <Form.Label>Date of Event</Form.Label>
                                <Form.Control type="date" className="dateTime" value={eventDate} onChange={e => setEventDate(e.target.value)} ></Form.Control>
                            </Form.Group>


                            <Form.Group as={Col} controlId="formPainEventStartT:">
                                <Form.Label>Start Time:</Form.Label>
                                <Form.Control type="time" className="dateTime" value={startT} onChange={e => setStartT(e.target.value)} ></Form.Control>
                            </Form.Group>

                        </div>
                        <Form.Group className="mb-3" controlId="formPainEventLoc">
                            <Form.Label>Location of the Pain</Form.Label>
                            <Form.Control as="textarea" rows={3} className="textarea" value={painLoc} onChange={e => setPainLoc(e.target.value)} ></Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPainEventTrigger:">
                            <Form.Label>Physical Trigger:</Form.Label>
                            <Form.Control as="textarea" rows={3} className="textarea" value={painTriger} onChange={e => setPainTriger(e.target.value)}></Form.Control>
                        </Form.Group>
                    </Form>
                </Col>
                <Col className="rightPenEvent">
                    <Form>
                        <Form.Group className="mb-3" controlId="formPainEventSelfT">
                            <Form.Label>Self Thoughts:</Form.Label>
                            <Form.Control as="textarea" rows={3} className="textarea" value={selfT} onChange={e => setSelfT(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPainEventSelfT">
                            <Form.Label>Environment Status:</Form.Label>
                            <Form.Control as="textarea" rows={3} className="textarea" value={envStatus} onChange={e => setEnvStatus(e.target.value)}></Form.Control>
                        </Form.Group>
                    </Form>
                </Col>
                <Row>
                    <Button className="createBtn" onClick={addEvent}>Create</Button>
                </Row>
            </Row>
        </div>
    );
}

export default PainEventComp;