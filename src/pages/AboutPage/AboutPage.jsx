import React from 'react';
import CardComp from '../../Components/cardHome-cp/CardComp';
import './aboutPage.css'

function AboutPage() {
    return (
        <div className="about-p">
            <h1>About Us</h1>
            <div className="cardsDiv">
            <CardComp className="aboutCard" imgSrc="https://static.thenounproject.com/png/3968708-200.png" titel="Physical" text="The physical pain is reale and you can feel it some where in your body" />
            <CardComp className="aboutCard" imgSrc="https://i.dlpng.com/static/png/6331675_preview.png" titel="Psychological" text="We are what we think our thogut affect our life" />
            <CardComp className="aboutCard" imgSrc="https://image.flaticon.com/icons/png/128/2821/2821176.png" titel="Environmental" text="How the Environment is reacting is part of what we think about our self" />
            </div>
        </div>
    );
}

export default AboutPage;