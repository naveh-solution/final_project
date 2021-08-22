import React from 'react';
import { Col, Row } from 'react-bootstrap';
import CardComp from '../../Components/cardHome-cp/CardComp';
import './aboutPage.css'

function AboutPage() {
    return (
        <div className="about-p">
            <h1>About Us</h1>
            <Row className="cardsDiv">
                <Col md={4} className="colMd"> 
                    <CardComp className="aboutCard" imgSrc="https://static.thenounproject.com/png/3968708-200.png"
                        titel="Physical" text="The physical pain is reale and you can feel it some where in your body" animation="cardDivAni" />
                </Col>
                <Col md={4} className="colMd">
                    <CardComp className="aboutCard" imgSrc="https://image.flaticon.com/icons/png/128/2176/2176875.png"
                        titel="Psychological" text="We are what we think our thogut affect our life" animation="cardDivAni" />
                </Col>
                <Col md={4} className="colMd">
                    <CardComp className="aboutCard" imgSrc="https://image.flaticon.com/icons/png/128/2821/2821176.png"
                        titel="Environmental" text="How the Environment is reacting is part of what we think about our self" animation="cardDivAni" />
                </Col>
            </Row>
        </div>
    );
}

export default AboutPage;