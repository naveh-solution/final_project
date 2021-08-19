import React from 'react';
import { Link, Redirect } from "react-router-dom";
import LoginComp from '../../Components/Login-cp/LoginComp';
import CardComp from '../../Components/cardHome-cp/CardComp';
import './homePage.css'
import BackgroundComp from '../../Components/background-cp/BackgroundComp';
import { Col, Row } from 'react-bootstrap';




function HomePage({ users, login, userActive }) {


    return (
        <div className="home-p">
            <h1>Pain Diary</h1>
            <Row className="cardsDiv">
                <Col md={4}>
                    <CardComp imgSrc="https://static.thenounproject.com/png/3968708-200.png" titel="Physical" text="The physical pain is reale and you can feel it some where in your body" />
                </Col>
                <Col md={4}>
                    <CardComp imgSrc="https://image.flaticon.com/icons/png/128/2176/2176875.png" titel="Psychological" text="We are what we think our thogut affect our life" />
                </Col>
                <Col md={4}>
                    <CardComp imgSrc="https://image.flaticon.com/icons/png/128/2821/2821176.png" titel="Environment" text="How the Environment is reacting is part of what we think about our self" />
                </Col>
            </Row>
            <div className="login-div">
                {!userActive ? <LoginComp users={users} login={login} userActive={userActive} /> : null}
            </div>
            <section className="my-Buble">
                <div className="bubbles">
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                </div>
            </section>
        </div>

    )
}
export default HomePage