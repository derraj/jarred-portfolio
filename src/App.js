import logo from './logo.svg';
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import HomePage from './components/HomePage/HomePage';
import Avatar from './components/SupportEngine/Avatar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Avatar/>
      <HomePage/>
    </div>
  );
}

export default App;
