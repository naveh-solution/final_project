import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  HashRouter
} from "react-router-dom";
import './App.css';
import Navbar from './Components/Nav-cp/Navbar';
import DairyPage from './pages/DairysPage/DairyPage';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
   
    <HashRouter>
       <Navbar/>
      <Switch>
        <Route exact path="/"><HomePage/></Route>
        <Route exact path="/dairys"><DairyPage/></Route>
        </Switch> 
    </HashRouter>

  );
}

export default App;
