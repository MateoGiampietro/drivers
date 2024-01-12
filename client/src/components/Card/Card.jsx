import './Card.css'
import { Link } from "react-router-dom";

export default function Card(props) {

    const imageUrl = props.image === "default"
        ? "/logo_default.png"
        : props.image

    return (
        <div className="card-container">
            <Link to={`/detail/${props.id}`}>
                <h2>{props.name}</h2>
            </Link>
            <h4>Escuderías: {props.teams}</h4>
            <img src={imageUrl} alt={props.id}/>
        </div>
    );
}