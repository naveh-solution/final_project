import React from 'react';
import {Form} from 'react-bootstrap'
import './painEventComp.css'


function PainEventComp({currentTime}) {

    const [painLoc, setPainLoc] = React.useState("");
    const [painTriger, setPainTriger] = React.useState("");
    const [startT, setStartT] = React.useState(currentTime)
    return (
        <div className="eventDiv-cp">
            <Form>
                <Form.Group className="mb-3" controlId="formPainEventLoc">
                    <Form.Label>Location of the Pain</Form.Label>
                    <Form.Control as="textarea" rows={3} className="textarea" value={painLoc} onChange={e => setPainLoc(e.target.value)} ></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPainEventTrigger:">
                    <Form.Label>Physical Trigger:</Form.Label>
                    <Form.Control as="textarea" rows={3}  className="textarea" value={painTriger} onChange={e => setPainTriger(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPainEventStartT:">
                    <Form.Label>Start Time:</Form.Label>
                    <Form.Control as="textarea" rows={3}  className="textarea" value={startT} onChange={e => setStartT(e.target.value)} ></Form.Control>
                </Form.Group>
            </Form>
            
        </div>
    );
}

export default PainEventComp;