import React from 'react';
import {Link, Redirect} from "react-router-dom";
import PainDairyComp from '../../Components/painDairy-cp/PainDairyComp';
import PainEventComp from '../../Components/painEventModal-cp/PainEventComp';
import PainEventModal from '../../Components/painEventModal-cp/PainEventModal';


function DairyPage({userActvie, setShowOrNot, events, setSelectedEvent, setManageShowOrNot, selectedEvent, manageIndex}) {
    console.log(userActvie)
    

    if( !userActvie ) {
        return <Redirect to="/"/>
    }

    console.log(events);

    // const hours = new Date().getHours(); 
    // const min = new Date().getMinutes();
    // const currentTime = hours + ":" + min
    // console.log(currentTime)


    return (
        <div>
            <h1>Diary Page</h1>
            <PainDairyComp events={events} userActvie={userActvie} setShowOrNot={setShowOrNot} setSelectedEvent={setSelectedEvent} setManageShowOrNot={setManageShowOrNot} selectedEvent={selectedEvent} manageIndex={manageIndex} />
            <Link to="/">to Home Page</Link>
        </div>
    );
}

export default DairyPage;