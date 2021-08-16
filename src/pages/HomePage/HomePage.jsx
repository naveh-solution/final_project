import React from 'react';
import { Link, Redirect } from "react-router-dom";
import LoginComp from '../../Components/Login-cp/LoginComp';
import CardComp from '../../Components/cardHome-cp/CardComp';
import './homePage.css'
import BackgroundComp from '../../Components/background-cp/BackgroundComp';




function HomePage({ users, login, userActive }) {


    return (
        <div className="home-p">
            <h1>Pain Diary</h1>
            <div className="cardsDiv">
                <CardComp imgSrc="https://static.thenounproject.com/png/3968708-200.png" titel="Physical" text="The physical pain is reale and you can feel it some where in your body" />
                <CardComp imgSrc="https://i.dlpng.com/static/png/6331675_preview.png" titel="Psychological" text="We are what we think our thogut affect our life"/>
                <CardComp imgSrc="https://image.flaticon.com/icons/png/128/2821/2821176.png" titel="Environmental" text="How the Environment is reacting is part of what we think about our self"/>
            </div>
            <div className="login-div">
                {!userActive ? <LoginComp users={users} login={login} userActive={userActive} /> : null}
            </div>
            <section class="my-Buble">
                <div class="bubbles">
                    <div class="bubble"></div>
                    <div class="bubble"></div>
                    <div class="bubble"></div>
                    <div class="bubble"></div>
                    <div class="bubble"></div>
                    <div class="bubble"></div>
                    <div class="bubble"></div>
                    <div class="bubble"></div>
                    <div class="bubble"></div>
                    <div class="bubble"></div>
                </div>
            </section>
        </div>

    )
}
export default HomePage