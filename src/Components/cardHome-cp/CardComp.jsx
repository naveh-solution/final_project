import React from 'react';
import { Row } from 'react-bootstrap';
import './cardComp.css'

function CardComp({imgSrc, titel, text, animation}) {
    return (
        <div className={"cardDiv"+ " " + animation}>
            <div className="cardImg">
            <img className="Img" src={imgSrc} alt="headace" />
            </div>
            <div className="cardTitel">
            <h5>{titel}</h5>
            </div>
            <div className="cardText">
            <p>{text}</p>
            </div>
        </div>
    );
}

export default CardComp;