import React, {  } from 'react';
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import HomePage from './components/HomePage/HomePage';

import Client from "./components/SupportEngine/Client";


function App() {
  return (
    <div className="App" >
      {/* <NavBar /> */}
      <div className='position-fixed'>
        <Client/>
      </div>
      <HomePage />
      
    </div>
  );
}

export default App;
