import React, { useEffect } from 'react';
import Nav from '../Nav/Nav.jsx';
import Cards from '../Cards/Cards';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { filterDriversByTeam, orderDrivers, setAllDrivers, setPage } from '../../redux/actions.js';

export default function Home() {
    const dispatch = useDispatch();
    const drivers = useSelector((state) => state.drivers);
    const currentPage = useSelector((state) => state.currentPage);
    const driversPerPage = useSelector((state) => state.driversPerPage);

    const indexOfLastDriver = currentPage * driversPerPage;
    const indexOfFirstDriver = indexOfLastDriver - driversPerPage;
    const currentDrivers = drivers.slice(indexOfFirstDriver, indexOfLastDriver);
    
    const handleFilter = event => {
      dispatch(filterDriversByTeam(event.target.value));
    };

    const handleOrder = event => {
      dispatch(orderDrivers(event.target.value));
    };

    const handlePage = event => {
      dispatch(setPage(event.target.value));
    };

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(drivers.length / driversPerPage); i++) {
        pageNumbers.push(i);
    }

    useEffect(() => {
      const fetchDrivers = async () => {
        try {
          const responseDB = await axios.get('http://localhost:3001/drivers', {
            headers: {
              'Cache-Control': 'no-cache',
            },
          });

          const responseAPI = await axios.get('http://localhost:5000/drivers');

          dispatch(setAllDrivers([...responseAPI.data, ...responseDB.data]));

        } catch (error) {
          console.log(error.message);
          alert("Error al cargar los pilotos.")
        }
      };
    
      fetchDrivers();
      }, []);
      
    return (
        <div className='home'>
            <select name="filter" onChange={handleFilter}>
              <option value="All">All</option>
              <option value="McLaren">McLaren</option>
              <option value="Mercedes">Mercedes</option>
              <option value="Prost">Prost</option>
              <option value="Sauber">Sauber</option>
              <option value="Jordan">Jordan</option>
              <option value="Renault">Renault</option>
              <option value="Williams">Williams</option>
              <option value="Minardi">Minardi</option>
              <option value="Ferrari">Ferrari</option>
              <option value="Alpine">Alpine</option>
              <option value="Lotus">Lotus</option>
              <option value="Caterham">Caterham</option>
              <option value="Toro Rosso">Toro Rosso</option>
              <option value="Alfa Romeo">Alfa Romeo</option>
              <option value="BMW">BMW</option>
              <option value="Toyota">Toyota</option>
              <option value="Virgin">Virgin</option>
              <option value="Marussia">Marussia</option>
              <option value="BAR">BAR</option>
              <option value="Super Aguri">Super Aguri</option>
              <option value="Red Bull">Red Bull</option>
              <option value="Spyker">Spyker</option>
              <option value="Porsche">Porsche</option>
              <option value="Force India">Force India</option>
            </select>
            <select name="order" onChange={handleOrder}>
              <option value="aNombre">Ascendente alfabetico</option>
              <option value="dNombre">Descendente alfabetico</option>
              <option value="dNacimiento">Edad ascendente</option>
              <option value="aNacimiento">Edad descendente</option>
            </select>
            <Cards drivers={currentDrivers}/>
            <select name="page" onChange={handlePage}>
              {pageNumbers.map((num, index) => (
                <option key={index} value={num}>{num}</option>
              ))}
            </select>
        </div>
    );
}
