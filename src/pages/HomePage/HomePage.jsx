import React from 'react';
import {Link} from "react-router-dom";
function HomePage() {
    return (
        <div>
            <h1>Home page</h1>
            <Link to="/login">log-in</Link>
        </div>
    )
    }
export default HomePage