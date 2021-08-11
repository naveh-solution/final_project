import React from 'react'
import { Switch, Route, HashRouter} from "react-router-dom";
import './App.css';
import NavbarComp from './Components/Nav-cp/Navbar';
import DairyPage from './pages/DairysPage/DairyPage';
import HomePage from './pages/HomePage/HomePage';
import userData from './Data/UserData.json'
import UserModel from './model/UserModel';
import PainEventModal from './Components/painEvent-cp/PainEventModal';
import EventData from './Data/EventData.json'
import EventModel from './model/EventModel.js'

function App() {

  const [users, setUsers] = React.useState(userData.map(justUser => new UserModel(justUser)));
  const [userActive, setUserActive] = React.useState(null);
  const [showOrNot, setShowOrNot] = React.useState(false);
  const [events, setEvents] = React.useState(EventData.map( plainEvent => new EventModel(plainEvent)))

  const userActiveEvents = userActive ? events.filter(plainEvent => plainEvent.userId === userActive.id) : [] ;

  function addEvent(painLoc, painTriger, startT, eventDate, selfT, envStatus, endT, physHelp, medHelp, otherHelp) {
    const activeUId = userActive ? userActive.id : null ;
    const newEvent = new EventModel({ eventDate, startT, endT, painLoc, painTriger, selfT, envStatus, physHelp, medHelp, otherHelp, activeUId})
    console.log(newEvent)
    // setEvents(events.concat(newEvent))
    setShowOrNot(false);
  }


  function login(newUserActive) {
    setUserActive(newUserActive);
  }

  function logOut() {
    setUserActive(null)
  }

  return (
    <HashRouter>
      <NavbarComp logOut={logOut} setShowOrNot={setShowOrNot} showOrNot={showOrNot} />
      <PainEventModal show={showOrNot} onHide={() => setShowOrNot(false)} addEvent={addEvent} />
      <Switch>
        <Route exact path="/"><HomePage users={users} login={login} userActive={userActive} /></Route>
        <Route exact path="/dairys"><DairyPage userActvie={userActive} setShowOrNot={setShowOrNot} events={userActiveEvents} /></Route>
      </Switch>
    </HashRouter>

  );
}

export default App;
