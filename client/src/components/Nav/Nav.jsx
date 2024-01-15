import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
    return (
        <div className='nav'>
            
            <Link to='/home'>
                <button>Home</button>
            </Link>

            <Link to='/form'>
                <button>Add Driver</button>
            </Link>
            
            <Link to='/about'>
                <button>About Me</button>
            </Link>

            <SearchBar/>
        </div>
    )
}