import React, { useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import Cards from '../Cards/Cards';

export default function Home(props) {

    const { drivers, setDrivers } = props;

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:3001/drivers');
            const data = await response.json();
            setDrivers(data);
        } catch (error) {
            console.error('Error al cargar los datos:', error);
        }
        };
        fetchData();
    }, []);

    return (
        <div className='landing'>
            <h3>Este es el home</h3>
            <SearchBar onSearch={props.onSearch} />
            <Cards drivers={drivers} />
        </div>
    );
}
