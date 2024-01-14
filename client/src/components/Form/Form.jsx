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
                <div className="form-group">
                    <label htmlFor='name'>Nombre:</label>
                    <input type='text' name='name' value={userData.name} onChange={handleChange}/>
                    {errors.name && <span className="error-message">{errors.name}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor='lastName'>Apellido:</label>
                    <input type='text' name='lastName' value={userData.lastName} onChange={handleChange}/>
                    {errors.lastName && <span className="error-message">{errors.lastName}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor='nationality'>Nacionalidad:</label>
                    <input type='text' name='nationality' value={userData.nationality} onChange={handleChange}/>
                    {errors.nationality && <span className="error-message">{errors.nationality}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor='image'>Imagen:</label>
                    <input type='text' name='image' value={userData.image} onChange={handleChange}/>
                    {errors.image && <span className="error-message">{errors.image}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor='bornDate'>Fecha de Nacimiento:</label>
                    <input type='text' name='bornDate' value={userData.bornDate} onChange={handleChange}/>
                    {errors.bornDate && <span className="error-message">{errors.bornDate}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor='description'>Descripcion:</label>
                    <input type='text' name='description' value={userData.description} onChange={handleChange}/>
                    {errors.description && <span className="error-message">{errors.description}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor='teams'>Escuderias:</label>
                    <input type='text' name='teams' value={userData.teams} onChange={handleChange}/>
                </div>

                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}
