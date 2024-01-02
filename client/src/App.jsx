import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './components/Home/Home.jsx'
import Landing from './components/Landing/Landing.jsx';
import { useState } from 'react';
import Detail from './components/Detail/Detail.jsx';

function App() {
  const [ drivers, setDrivers ] = useState([]);
  const navigate = useNavigate();

  async function onSearch(name) {
    try {
      const originalDrivers = [...drivers];
      const filteredDrivers = originalDrivers.filter(driver => driver.name.forename.toLowerCase() === name.toLowerCase() || driver.name.surname.toLowerCase() === name.toLowerCase());
  
      if (filteredDrivers.length > 0) {
        setDrivers(filteredDrivers);
        navigate("/home");
      } else {
        alert("No existe piloto con ese nombre.");
      }
    } catch (error) {
      console.log(error.message);
      alert("Hubo un error al buscar el piloto.");
    }
  };
  

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home onSearch={onSearch} drivers={drivers} setDrivers={setDrivers} />}/>
        <Route path='/detail/:id' element={<Detail drivers={drivers}/>}/>
      </Routes>
    </div>
  )
}

export default App
