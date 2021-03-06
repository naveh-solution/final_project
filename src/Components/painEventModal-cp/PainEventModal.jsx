import React from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import './painEventComp.css'

function PainEventModal({ addEvent, show, onHide }) {

    const [painLoc, setPainLoc] = React.useState("");
    const [painTriger, setPainTriger] = React.useState("");
    const [startT, setStartT] = React.useState("");
    const [eventDate, setEventDate] = React.useState("")
    const [selfT, setSelfT] = React.useState("")
    const [envStatus, setEnvStatus] = React.useState("")
    const [painLevel, setPainLevel] = React.useState("1")


    React.useEffect(() => {
        if (show === false) {
            setPainLoc("")
            setPainTriger("")
            setStartT("")
            setEventDate("")
            setSelfT("")
            setEnvStatus("")
        }
    }, [show]);

    const createEvent = () => {
        const newEvn = {
            eventDate,
            startT,
            endT: "",
            painLoc,
            painTriger,
            painLevel,
            selfT,
            envStatus,
            physHelp: "",
            medHelp: "",
            otherHelp: ""
        }
        addEvent(newEvn);
    }

    return (
        <div>
            <Modal show={show} onHide={onHide} size="xl" aria-labelledby="cont-for-adding_manage-event" centered >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Crate new Event
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="eventDiv-cp">
                        <Row>
                            <Col className="leftPenEvent">
                                <Form>
                                    <div className="mb-3 dateTimeRow">
                                        <Form.Group as={Col} controlId="formPainEventStartT:" className="dateTimeInput">
                                            <Form.Label>Date of Event</Form.Label>
                                            <Form.Control type="date" className="dateTime" value={eventDate} onChange={e => setEventDate(e.target.value)} ></Form.Control>
                                        </Form.Group>
                                        <Form.Group as={Col} controlId="formPainEventStartT:" className="dateTimeInput">
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
                                        <div className="myRange">
                                        <Form.Label>Level of the Pain</Form.Label>
                                        <Form.Range min={1} max={10} value={painLevel} onChange={ e => setPainLevel(e.target.value)}></Form.Range>
                                        <p className="painLevelText">{painLevel}</p>
                                    </div>
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
                        </Row>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="createBtn" onClick={() => createEvent()}>Create Event</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default PainEventModal;