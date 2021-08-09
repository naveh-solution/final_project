import React from 'react';
import {Link} from "react-router-dom";
import LoginComp from '../../Components/Login-cp/LoginComp';
function HomePage({users, login, userActive}) {
    return (
        <div>
            <h1>Home page</h1>
             <LoginComp  users={users} login={login} userActive={userActive}/>
        </div>
    )
    }
export default HomePage