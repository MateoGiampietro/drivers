import { useState } from 'react';
import './SearchBar.css'

export default function SearchBar(props) {

   const [ name, setName ] = useState('');

   const handleChange = (event) => {
      setName(event.target.value);
   };

   const handleClick = (event) => {
      event.preventDefault();
      props.onSearch(name);
      setName('');
   }

   return (
      <div className='searchBar'>
         <input type='search' onChange={handleChange} value={name}/>
         <button onClick={handleClick}>Agregar</button>
      </div>
   );
}