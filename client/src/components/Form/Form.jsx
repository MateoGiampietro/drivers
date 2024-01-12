import { useState } from 'react';
import Validation from '../Validation/Validation.jsx';
import "./Form.css"
import axios from 'axios';

export default function Form() {

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
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {

            const response = await axios.post('http://localhost:3001/drivers', userData, {
                headers: {
                    'Content-Type': 'application/json'
                },
            });

            if (response.status === 200) {
                console.log("Se ha subido tu driver a la base de datos.")
            } else {
                console.log("Algo ha salido mal.")
            }

        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div>
            <form className='userForm'>
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
        </div>
    )
}