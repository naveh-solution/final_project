import React from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import './eventManageModalComp.css'

function EventManageModalComp({ show, onHide, selectedEvent, saveEvent, manageIndex }) {

    const [painLoc, setPainLoc] = React.useState("");
    const [painTriger, setPainTriger] = React.useState("");
    const [startT, setStartT] = React.useState("");
    const [eventDate, setEventDate] = React.useState("")
    const [selfT, setSelfT] = React.useState("")
    const [envStatus, setEnvStatus] = React.useState("")
    const [endT, setEndT] = React.useState("")
    const [medHelp, setMedHelp] = React.useState("")
    const [physHelp, setPhysHelp] = React.useState("")
    const [otherHelp, setOtherHelp] = React.useState("")
    const [painLevel, setPainLevel] = React.useState("1")


    React.useEffect(() => {
       if(!show && !selectedEvent) {
            setPainLoc("")
            setPainTriger("")
            setStartT("")
            setEventDate("")
            setSelfT("")
            setEnvStatus("")
            setEndT("")
            setMedHelp("")
            setPhysHelp("")
            setOtherHelp("")
            setPainLevel("1")
        }
    }, [show]);

    React.useEffect(() => {
        if (selectedEvent) {
            setPainLoc(selectedEvent.painLoc)
            setPainTriger(selectedEvent.painTriger)
            setStartT(selectedEvent.startT)
            setEventDate(selectedEvent.eventDate)
            setSelfT(selectedEvent.selfT)
            setEnvStatus(selectedEvent.envStatus)
            setEndT(selectedEvent.endT)
            setMedHelp(selectedEvent.medHelp)
            setPhysHelp(selectedEvent.physHelp)
            setOtherHelp(selectedEvent.otherHelp)
            setPainLevel(selectedEvent.painLevel)
        }
    }, [selectedEvent])

    const createEvent = () => {
        const newEvn = { 
            id: selectedEvent.id,
            eventDate,
            startT,
            endT,
            painLoc,
            painTriger,
            selfT,
            envStatus, 
            physHelp,
            medHelp,
            otherHelp
        }
        saveEvent(newEvn, manageIndex);
    }

    return (
        <div>
            <Modal show={show} onHide={onHide} size="xl" aria-labelledby="cont-for-adding_manage-event" centered >
                <Modal.Header closeButton>
                    <Modal.Title id="cont-for-adding_manage-event">
                        Manage Event
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="eventDiv-cp">
                        <Row className="mainRowModal">
                            <Col className="leftPenEvent" md={5}>
                                <Form>
                                    <Row className="mb-3 dateTimeRow">
                                        <Form.Group as={Col} sm={4}controlId="formPainEventStartT:" className="dateTimeInput">
                                            <Form.Label>Date of Event</Form.Label>
                                            <Form.Control type="date" className="dateTime" value={eventDate} onChange={e => setEventDate(e.target.value)} ></Form.Control>
                                        </Form.Group>
                                        <Form.Group as={Col} sm={4} controlId="formPainEventStartT:" className="dateTimeInput">
                                            <Form.Label>Start Time:</Form.Label>
                                            <Form.Control type="time" className="dateTime" value={startT} onChange={e => setStartT(e.target.value)} ></Form.Control>
                                        </Form.Group>
                                        <Form.Group as={Col} sm={4} controlId="formPainEventStartT:" className="dateTimeInput">
                                            <Form.Label>End Time:</Form.Label>
                                            <Form.Control type="time" className="dateTime" value={endT} onChange={e => setEndT(e.target.value)} ></Form.Control>
                                        </Form.Group>
                                    </Row>
                                    <Form.Group className="mb-3" controlId="formPainEventLoc">
                                        <Form.Label>Location of the Pain</Form.Label>
                                        <Form.Control as="textarea" rows={2} className="textarea" value={painLoc} onChange={e => setPainLoc(e.target.value)} ></Form.Control>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formPainEventTrigger:">
                                        <Form.Label>Physical Trigger:</Form.Label>
                                        <Form.Control as="textarea" rows={2} className="textarea" value={painTriger} onChange={e => setPainTriger(e.target.value)}></Form.Control>
                                        <div className="myRange">
                                        <Form.Label>Level of the Pain</Form.Label>
                                        <Form.Range min={1} max={10} value={painLevel} onChange={ e => setPainLevel(e.target.value)}></Form.Range>
                                        <p className="painLevelText">{painLevel}</p>
                                    </div>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formPainEventSelfT">
                                        <Form.Label>Self Thoughts:</Form.Label>
                                        <Form.Control as="textarea" rows={2} className="textarea" value={selfT} onChange={e => setSelfT(e.target.value)}></Form.Control>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formPainEventSelfT">
                                        <Form.Label>Environment Status:</Form.Label>
                                        <Form.Control as="textarea" rows={2} className="textarea" value={envStatus} onChange={e => setEnvStatus(e.target.value)}></Form.Control>
                                    </Form.Group>
                                </Form>
                            </Col>
                            <Col className="rightPenEvent" md={6}>
                                <Form>
                                    <h4 className="rightPenTitle">What HELPED</h4>
                                    <Form.Group className="mb-3" controlId="formPainEventSelfT">
                                        <Form.Label>Medicines: </Form.Label>
                                        <Form.Control as="textarea" rows={3} className="textarea" value={medHelp} onChange={e => setMedHelp(e.target.value)}></Form.Control>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formPainEventSelfT">
                                        <Form.Label>Physical: <span className="note">(e.g physicalTheropy ex)</span></Form.Label>
                                        <Form.Control as="textarea" rows={3} className="textarea" value={physHelp} onChange={e => setPhysHelp(e.target.value)}></Form.Control>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formPainEventSelfT">
                                        <Form.Label>Other: <span className="note">(e.g Mentor, Psychologist etc.)</span></Form.Label>
                                        <Form.Control as="textarea" rows={3} className="textarea" value={otherHelp} onChange={e => setOtherHelp(e.target.value)}></Form.Control>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="cancelBtn" onClick={() => onHide()}>Cancel</Button>
                    <Button className="createBtn" onClick={() => createEvent()}>Save</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default EventManageModalComp;