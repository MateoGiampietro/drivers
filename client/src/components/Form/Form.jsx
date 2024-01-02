import { useState } from 'react';
import Validation from '../Validation/Validation.jsx';

export default function Form({ login }) {

    const [ userData, setUserData ] = useState({
        name: '' ,
        lastName: '',
        nationality: '',
        image: '',
        bornDate: '',
        description: '',
        teams: []
    });
    const [ errors, setErrors ] = useState({
        name: '' ,
        lastName: '',
        nationality: '',
        image: '',
        bornDate: '',
        description: '',
        teams: []
    });

    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setUserData({...userData, [property]: value});
        Validation({...userData, [property]: value}, errors, setErrors);
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData); // acomodar handleSubmit ya que el login es del rickandmorty y aca no es necesario.
    }

    return (
        <form>
            <label htmlFor='name'>Nombre:</label>
            <input type='text' name='name' value={userData.name} onChange={handleChange}/>

            <label htmlFor='lastName'>Apellido:</label>
            <input type='text' name='lastName' value={userData.lastName} onChange={handleChange}/>

            <label htmlFor='nationality'>Nacionalidad:</label>
            <input type='text' name='nationality' value={userData.nationality} onChange={handleChange}/>

            <label htmlFor='image'>Imagen:</label>
            <input type='text' name='image' value={userData.image} onChange={handleChange}/>

            <label htmlFor='bornDate'>Fecha de Nacimiento:</label>
            <input type='text' name='bornDate' value={userData.bornDate} onChange={handleChange}/>

            <label htmlFor='description'>Descripcion:</label>
            <input type='text' name='description' value={userData.description} onChange={handleChange}/>

            <label htmlFor='teams'>Escuderias:</label>
            <input type='text' name='teams' value={userData.teams} onChange={handleChange}/>

            <button onClick={handleSubmit}>Submit</button>
        </form>
    )
}