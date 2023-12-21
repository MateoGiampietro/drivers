import './App.css';
import axios from "axios";
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './components/Home/Home.jsx'
import Landing from './components/Landing/Landing.jsx';
import { useState } from 'react';

function App() {
  const [ drivers, setDrivers ] = useState([]);
  const navigate = useNavigate();

  async function onSearch(name) {
    try {
       const driverName = drivers.filter(driver => driver.id === Number(name));

       if (driverName.length) {
          return alert(`${driverName[0].name} ya existe!`);
       }
       
       const { data } = await axios(`http://localhost:3001/drivers/${name}`);
       if (data) {
          setDrivers([...drivers, data]);
          navigate("/home");
       } else {
          alert("No existe piloto con ese nombre, o esta mal escrito.");
       }
    } catch (error) {
      console.log(error.message)
      alert("No existe piloto con ese nombre, o esta mal escrito.");
    }
 };

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home onSearch={onSearch} drivers={drivers} setDrivers={setDrivers} />}/>
      </Routes>
    </div>
  )
}

export default App
