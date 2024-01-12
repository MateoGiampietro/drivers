import React from "react"
import { useLocation } from 'react-router-dom'

export default function Detail({ drivers }) {
    const location = useLocation();
    const regex = /\d+/;
    const id = location.pathname.match(regex)[0];
    const driver = drivers.filter((driver) => driver.id === Number(id));
    
    const imageUrl = driver[0].image === "default"
        ? "/logo_default.png"
        : driver[0].image.url

    if (driver[0].name.forename) {
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
                    <img src={imageUrl} alt={driver[0].id}/>
                </div>
            </div>
        )
    } else {
        return (
            <div className='details-container'>
                <div className='details'>
                    <h2>ID: {driver[0].id}</h2>
                    <h4>Nombre: {driver[0].name + ' ' + driver[0].lastName}</h4>
                    <h4>Nacionalidad: {driver[0].nationality}</h4>
                    <h4>Descripcion: {driver[0].description}</h4>
                    <h4>Fecha de Nacimiento: {driver[0].bornDate}</h4>
                    <h4>Escuderias: {driver[0].teams}</h4>
                </div>
    
                <div className="photo-container">
                    <img src={imageUrl} alt={driver[0].id}/>
                </div>
            </div>
        )
    }
}