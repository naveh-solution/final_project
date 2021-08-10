import React from 'react';
import {Link, Redirect} from "react-router-dom";
import PainDairyComp from '../../Components/painDairy-cp/PainDairyComp';
import PainEventComp from '../../Components/painEvent-cp/PainEventComp';
import EventData from '../../Data/EventData.json'
import EventModel from '../../model/EventModel.js'

function DairyPage({userActvie}) {
    console.log(userActvie)
    const [events, setEvents] = React.useState(EventData.map(plainEvent => new EventModel(plainEvent)))

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
            <h1>Dairy Page</h1>
            <PainDairyComp events={events} userActvie={userActvie}/>
            {/* <PainEventComp currentTime={currentTime}/> */}
            <Link to="/">to Home Page</Link>
        </div>
    );
}

export default DairyPage;