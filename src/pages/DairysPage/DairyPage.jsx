import React from 'react';
import {Link, Redirect} from "react-router-dom";
import PainEventComp from '../../Components/painEvent-cp/PainEventComp';


function DairyPage({userActvie}) {

    if( !userActvie ) {
        return <Redirect to="/"/>
    }


    return (
        <div>
            <h1>Dairy Page</h1>
            <PainEventComp/>
            <Link to="/">to Home Page</Link>
        </div>
    );
}

export default DairyPage;