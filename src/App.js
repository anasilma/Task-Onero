import React from 'react';
import './App.css';
import AppHeader from './Components/CompHeader/AppHeader';
import AppTrip from './Components/CompTrip/AppTrip';
import AppRooms from './Components/CompRooms/AppRooms';
import AppFacilities from './Components/CompFacilities/AppFacilities';
import AppDinning from './Components/CompDinning/AppDinning';
import AppOffers from './Components/CompOffers/AppOffers';

function App() {
  return (
    <div>
    <AppHeader/>
    <AppTrip/>
    <AppRooms/>
    <AppFacilities/>
    <AppDinning/>
    <AppOffers/>
    </div>
  );
}

export default App;
