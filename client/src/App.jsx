import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home.jsx'
import Landing from './components/Landing/Landing.jsx';
import { useState } from 'react';
import Detail from './components/Detail/Detail.jsx';
import Form from './components/Form/Form.jsx';
import { useSelector } from 'react-redux';

function App() {
  const [ dataBaseDrivers, setDrivers ] = useState([]);
  const drivers = useSelector((state) => state.drivers);

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/detail/:id' element={<Detail drivers={drivers}/>}/>
        <Route path='/form' element={<Form drivers={drivers}/>}/>
      </Routes>
    </div>
  )
}

export default App
