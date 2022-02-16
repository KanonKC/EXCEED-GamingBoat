import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
<<<<<<< HEAD
import Card from './components/Card';
=======
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Schedule from './pages/Schedule';
>>>>>>> 04802e1ff7f154238813212c0f0a974296c7158c

function App() {
  return (
    <div>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/schedule" element={<Schedule/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
      
}

export default App;
