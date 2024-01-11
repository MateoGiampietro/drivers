import './Card.css'
import { Link } from "react-router-dom";

export default function Card(props) {

    return (
        <div className="card-container">
            <Link to={`/detail/${props.id}`}>
                <h2>{props.name}</h2>
            </Link>
            <h4>Escuderías: {props.teams}</h4>
            <img src={props.image} alt={props.id}/>
        </div>
    );
}