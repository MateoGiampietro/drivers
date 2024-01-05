import React, { useEffect } from 'react';
import Nav from '../Nav/Nav.jsx';
import Cards from '../Cards/Cards';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { filterDriversByTeam, setAllDrivers } from '../../redux/actions.js';

export default function Home() {
    const dispatch = useDispatch();
    const drivers = useSelector((state) => state.drivers);
    
    const handleFilter = event => {
      dispatch(filterDriversByTeam(event.target.value));
     }

    useEffect(() => {
        const fetchDrivers = async () => {
          try {
            const { data } = await axios.get('http://localhost:5000/drivers');
            dispatch(setAllDrivers(data));
          } catch (error) {
            console.log(error.message);
            alert("Error al cargar los pilotos.")
          }
        };
    
        fetchDrivers();
      }, []);

    return (
        <div className='home'>
            <h3>Este es el home</h3>
            <Nav/>
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
            <Cards drivers={drivers}/>
        </div>
    );
}
