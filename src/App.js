import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Schedule from './pages/Schedule';
import AddTime from './pages/AddTime';

function App() {
  return (
    <div>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/schedule" element={<Schedule/>}/>
          <Route path="/addtime" element={<AddTime/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
      
}

export default App;
