import React, { } from 'react';
import { Link } from 'react-router-dom';
import './App.scss';
import HomePage from './components/Pages/HomePage';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Client from "./components/SupportEngine/Client";
import AboutPage from './components/Pages/AboutPage';
import { Navbar } from 'react-bootstrap';
import NavBar from './components/NavBar/NavBar';
import Projects from './components/Pages/Projects';


function App() {
  return (
    <div className="App" >
      <NavBar/>
      <div className='position-fixed'>
        <Client />
      </div>
      <HomePage />
      <AboutPage/>
      <Projects/>
    </div>
  );
}


export default App;
