import React, { useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import Cards from '../Cards/Cards';
import axios from 'axios';

export default function Home({ drivers, setDrivers, onSearch }) {

    useEffect(() => {
        const fetchDrivers = async () => {
          try {
            const { data } = await axios.get('http://localhost:5000/drivers');
            setDrivers(data);
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
            <SearchBar onSearch={onSearch} />
            <Cards drivers={drivers} />
        </div>
    );
}
