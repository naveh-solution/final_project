import React from 'react'
import {
  Switch,
  Route,
  Link,
  HashRouter
} from "react-router-dom";
import './App.css';
import NavbarComp from './Components/Nav-cp/Navbar';
import DairyPage from './pages/DairysPage/DairyPage';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <HashRouter>
      <NavbarComp/>
      <Switch>
        <Route exact path="/"><HomePage/></Route>
        <Route exact path="/dairys"><DairyPage/></Route>
        </Switch> 
    </HashRouter>

  );
}

export default App;
