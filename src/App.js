import React, { useRef, useEffect, useState } from 'react';
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import HomePage from './components/HomePage/HomePage';
import Avatar from './components/SupportEngine/Avatar';
import SupportWindow from './components/SupportEngine/SupportWindow/SupportWindow';


function App() {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);
  const [visible, setVisible] = useState(false)

  function useOutsideAlerter(ref) {
      useEffect(() => {
          function handleClickOutside(event) {
              if (ref.current && !ref.current.contains(event.target)) {
                  setVisible(false)
              }
          }
          document.addEventListener("mousedown", handleClickOutside);
          return () => {
              document.removeEventListener("mousedown", handleClickOutside);
          };
      }, [ref]);
  }

  return (
    <div className="App" >
      <NavBar />
      <div ref={wrapperRef}>
        <SupportWindow
          visible={visible}
        />
      </div>
      
      <Avatar
        onClick={() => setVisible(true)}
        style={{ bottom: '20px', right: '20px' }}
        className='position-fixed'
      />
      <HomePage />
    </div>
  );
}

export default App;
