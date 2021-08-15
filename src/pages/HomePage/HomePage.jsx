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
                <CardComp />
                <CardComp />
                <CardComp />
            </div>
            <div className="login-div">
                {!userActive ? <LoginComp users={users} login={login} userActive={userActive} /> : null}
            </div>
            {/* <section class="my-Buble">
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
            </section> */}
        </div>

    )
}
export default HomePage