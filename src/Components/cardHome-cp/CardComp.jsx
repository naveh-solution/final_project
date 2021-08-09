import React from 'react';
import { Card } from 'react-bootstrap';
import './cardComp.css'

function CardComp() {
    return (
        <div className="cardDiv">
            <Card>
                <Card.Img variant="top" src="https://image.flaticon.com/icons/png/512/387/387630.png" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default CardComp;