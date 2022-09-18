import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import Pageend from './components/Pageend';
import JumbleWords from './components/JumbleWords';
import Wordle from './components/Wordle';
import HangMan from './components/HangMan';
function App() {
  const width = window.screen.width
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/jumblewords' element={<JumbleWords />}/>
        <Route path='/wordle' element={<Wordle/>}/>
        <Route path='/hangman' element={<HangMan/>}/>
      </Routes>
      <Pageend width={width}/>
      </Router>
    </div>
  );
}

export default App;
