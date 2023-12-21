import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

export default function Landing(props) {
    return (
        <div className='landing'>
            <h3>Bienvenido/a a mi pagina acerca de pilotos de F1.</h3>
            <Link to='/home'>
                <button>Home</button>
            </Link>
        </div>
    )
}