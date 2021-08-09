import React from 'react';
import {Link, Redirect} from "react-router-dom";


function DairyPage({userActvie}) {

    if( !userActvie ) {
        return <Redirect to="/"/>
    }

    
    return (
        <div>
            <h1>Dairy Page</h1>
            <Link to="/">to Home Page</Link>
        </div>
    );
}

export default DairyPage;