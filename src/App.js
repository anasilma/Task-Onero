import React from 'react';
import './App.css';
import AppHeader from './Components/CompHeader/AppHeader';
import AppTrip from './Components/CompTrip/AppTrip';
import AppRooms from './Components/CompRooms/AppRooms';
import AppFacilities from './Components/CompFacilities/AppFacilities';
import AppDinning from './Components/CompDinning/AppDinning';
import AppOffers from './Components/CompOffers/AppOffers';
import AppMeeting from './Components/CompMeeting/AppMeeting';
import AppFooter from './Components/CompFooter/AppFooter';

function App() {
  return (
    <div>
    <AppHeader/>
    <AppTrip/>
    <AppRooms/>
    <AppFacilities/>
    <AppDinning/>
    <AppMeeting/>
    <AppOffers/>
    {/* <AppFooter/> */}
    </div>
  );
}

export default App;
