import React from "react"
import { useLocation } from 'react-router-dom'
/* import './Detail.css' */

export default function Detail({ drivers }) {
    const location = useLocation();
    const regex = /\d+/;
    const id = location.pathname.match(regex)[0];
    const driver = drivers.filter((driver) => driver.id === Number(id));

    return (
        <div className='details-container'>
            <div className='details'>
                <h2>ID: {driver[0].id}</h2>
                <h4>Nombre: {driver[0].name.forename + ' ' + driver[0].name.surname}</h4>
                <h4>Nacionalidad: {driver[0].nationality}</h4>
                <h4>Descripcion: {driver[0].description}</h4>
                <h4>Fecha de Nacimiento: {driver[0].dob}</h4>
                <h4>Escuderias: {driver[0].teams}</h4>
            </div>

            <div className="photo-container">
                <img src={driver[0].image.url} alt={driver[0].id}/>
            </div>
        </div>
    )
}