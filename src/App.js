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
import userData from './Data/UserData.json'
import UserModel from './model/UserModel';

function App() {

  const [users, setUsers] = React.useState(userData.map(justUser => new UserModel(justUser)));
  const [userActive, setUserActive] = React.useState(null);
  

  function login(newUserActive){
    setUserActive(newUserActive);
  }

  function logOut(){
    setUserActive(null)
  }

  return (
    <HashRouter>
      <NavbarComp logOut={logOut}/>
      <Switch>
        <Route exact path="/"><HomePage users={users} login={login} userActive={userActive}/></Route>
        <Route exact path="/dairys"><DairyPage userActvie={userActive}/></Route>
        </Switch> 
    </HashRouter>

  );
}

export default App;
