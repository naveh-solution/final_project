import React from 'react';
import {Link, Redirect} from "react-router-dom";
import PainDairyComp from '../../Components/painDairy-cp/PainDairyComp';
import PainEventComp from '../../Components/painEvent-cp/PainEventComp';


function DairyPage({userActvie}) {

    if( !userActvie ) {
        return <Redirect to="/"/>
    }

    const hours = new Date().getHours(); 
    const min = new Date().getMinutes();
    const currentTime = hours + ":" + min
    console.log(currentTime)


    return (
        <div>
            <h1>Dairy Page</h1>
            <PainDairyComp/>
            <PainEventComp currentTime={currentTime}/>
            <Link to="/">to Home Page</Link>
        </div>
    );
}

export default DairyPage;