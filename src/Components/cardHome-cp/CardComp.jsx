import React from 'react';
import './cardComp.css'

function CardComp({imgSrc, titel, text}) {
    return (
        <div className="cardDiv">
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