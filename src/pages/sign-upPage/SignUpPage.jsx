import React from 'react';
import { Button, Form } from 'react-bootstrap';
import SignUpComp from '../../Components/SignUp-cp/SignUpComp';
import { Redirect } from 'react-router-dom';
import './signUpPage.css'

function SignUpPage({addUser, userActive}) {

    if(userActive){
       return <Redirect to="/diarys"/>
    }

    return (
        <div className="signUpMain-p">
            <SignUpComp addUser={addUser} userActive={userActive}/>
        </div>
    );
}

export default SignUpPage