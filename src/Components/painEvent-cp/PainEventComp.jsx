import React from 'react';
import {Form} from 'react-bootstrap'


function PainEventComp() {
    return (
        <div className="eventDiv">
            <Form>
                <Form.Group className="mb-3" controlId="formPainEventLoc">
                    <Form.Label>Location of the Pain</Form.Label>
                    <Form.Control as="textarea" rows={3} ></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPainEventTrigger:">
                    <Form.Label>Physical Trigger:</Form.Label>
                    <Form.Control as="textarea" rows={3} ></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPainEventStartT:">
                    <Form.Label>Start Time:</Form.Label>
                    <Form.Control as="textarea" rows={3} ></Form.Control>
                </Form.Group>
            </Form>
            
        </div>
    );
}

export default PainEventComp;