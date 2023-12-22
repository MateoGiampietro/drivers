import React, { useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import Cards from '../Cards/Cards';
import axios from 'axios';

export default function Home({ drivers, setDrivers, onSearch }) {

    /* useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios('http://localhost:3001/drivers');
                setDrivers([...drivers, data]);
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchData();
    }, []); */

    return (
        <div className='home'>
            <h3>Este es el home</h3>
            <SearchBar onSearch={onSearch} />
            <Cards drivers={drivers} />
        </div>
    );
}
