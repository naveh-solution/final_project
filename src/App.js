import React from 'react'
import { Switch, Route, HashRouter} from "react-router-dom";
import './App.css';
import NavbarComp from './Components/Nav-cp/Navbar';
import DairyPage from './pages/DiarysPage/DiaryPage';
import HomePage from './pages/HomePage/HomePage';
import userData from './Data/UserData.json'
import UserModel from './model/UserModel';
import PainEventModal from './Components/painEventModal-cp/PainEventModal';
import EventData from './Data/EventData.json'
import EventModel from './model/EventModel.js'
import EventManageModalComp from './Components/eventManageModal-cp/EventManageModalComp';
import SignUpPage from './pages/sign-upPage/SignUpPage'

function App() {

  const [users, setUsers] = React.useState(userData.map(justUser => new UserModel(justUser)));
  const [userActive, setUserActive] = React.useState(null);
  const [showOrNot, setShowOrNot] = React.useState(false);
  const [manageShowOrNot, setManageShowOrNot] = React.useState(false);
  const [events, setEvents] = React.useState(EventData.map( plainEvent => new EventModel(plainEvent)))
  const [selectedEvent, setSelectedEvent] = React.useState(null)
 const [manageIndex, setManageIndex] = React.useState(null)

  const userActiveEvents = userActive ? events.filter(plainEvent => plainEvent.activeUId === userActive.id) : [] ;

  function addEvent(newEvent) {
    const activeUId = userActive ? userActive.id : null ;
    newEvent.activeUId = activeUId;
    newEvent = new EventModel(newEvent);
    console.log(newEvent);
    setEvents(events.concat(newEvent));
    setShowOrNot(false);
  }


  const  saveEvent = (newEvent, index) => {

    console.log("seve event", index)
    const activeUId = userActive ? userActive.id : null ;
    newEvent.activeUId = activeUId;
    const newEvents = [...events];
    newEvents[index] = newEvent;
    setManageShowOrNot(false);
    setEvents(newEvents)
    setSelectedEvent("")
    setManageIndex("")
  }

  const handelCloseModal = () => {
    setSelectedEvent(null)
    setManageShowOrNot(false)
}


  function login(newUserActive) {
    setUserActive(newUserActive);
  }

  function logOut() {
    setUserActive(null)
  }

  return (
    <HashRouter>
      <NavbarComp  userActive={userActive} logOut={logOut} setShowOrNot={setShowOrNot}/>
      <PainEventModal show={showOrNot} onHide={() => setShowOrNot(false)} addEvent={addEvent}  />
      <EventManageModalComp show={manageShowOrNot} onHide={() => handelCloseModal()} selectedEvent={selectedEvent} saveEvent={saveEvent}  manageIndex={manageIndex}/>
      <Switch>
        <Route exact path="/"><HomePage users={users} login={login} userActive={userActive} /></Route>
        <Route exact path="/dairys"><DairyPage userActvie={userActive} setShowOrNot={setShowOrNot} events={userActiveEvents} setSelectedEvent={setSelectedEvent} setManageShowOrNot={setManageShowOrNot} selectedEvent={selectedEvent} setManageIndex={setManageIndex}/></Route>
         <Route exact path="/sign-up"><SignUpPage/> </Route>
      </Switch>
    </HashRouter>

  );
}

export default App;
