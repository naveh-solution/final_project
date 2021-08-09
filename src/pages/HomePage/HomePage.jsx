import React from 'react';
import {Link, Redirect} from "react-router-dom";
import LoginComp from '../../Components/Login-cp/LoginComp';
import CardComp from '../../Components/cardHome-cp/CardComp';
import './homePage.css'




function HomePage({users, login, userActive}) {

   

    return (
        <div className="home-p">
            <h1>Pain Dairy</h1>
            <div className="cardsDiv">
                <CardComp/>
                <CardComp/>
                <CardComp/>
            </div>
            <div className="login-div">
             <LoginComp  users={users} login={login} userActive={userActive}/> 
             </div>
        </div>
    )   
    }
export default HomePage