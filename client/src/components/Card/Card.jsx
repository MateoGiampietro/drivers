/* import './Card.css' */
/* import { Link } from "react-router-dom"; */

export default function Card(props) {

    return (
        <div className="card-container">
            <h2>{props.name}</h2>
            <h4>Escuderías: {props.teams}</h4>
            <img src={props.image.url} alt={props.id} />
        </div>
    );
}