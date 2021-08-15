import React from 'react';
import { Link, Redirect } from "react-router-dom";
import PainDairyComp from '../../Components/painDiary-cp/PainDiaryComp';
import './diaryPage.css'

function DairyPage({ userActvie, setShowOrNot, events, setSelectedEvent, setManageShowOrNot, selectedEvent, setManageIndex }) {
    console.log(userActvie)


    // if (!userActvie) {
    //     return <Redirect to="/" />
    // }

    console.log(events);

    if(!userActvie){
      return   <Redirect to="/"/>
    }

    // const hours = new Date().getHours(); 
    // const min = new Date().getMinutes();
    // const currentTime = hours + ":" + min
    // console.log(currentTime)


    return (
        <div className="diaryMain-p">
            <h1>Diary Page</h1>
            <PainDairyComp events={events} userActvie={userActvie} setShowOrNot={setShowOrNot}
                setSelectedEvent={setSelectedEvent} setManageShowOrNot={setManageShowOrNot} 
                selectedEvent={selectedEvent} setManageIndex={setManageIndex} />    
        </div>
    );
}

export default DairyPage;