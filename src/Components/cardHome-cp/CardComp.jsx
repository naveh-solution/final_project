import React from 'react';
import './cardComp.css'

function CardComp({imgSrc, titel, text}) {
    return (
        <div className="cardDiv">
            <img className="cardImg" src={imgSrc} alt="headace" />
            <h5>{titel}</h5>
            <p>{text}</p>
        </div>
    );
}

export default CardComp;