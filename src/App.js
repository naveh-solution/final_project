import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import DairyPage from './pages/DairysPage/DairyPage';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/"><HomePage/></Route>
        <Route exact path="/dairys"><DairyPage/></Route>
        </Switch> 
    </HashRouter>

  );
}

export default App;
