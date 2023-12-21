/* import './Card.css' */

export default function Card(props) {
   
   return (
        <div className="card-container">
            <Link to={`/detail/${props.id}`}>
                <h2>{props.name.forename + ' ' + props.name.surname}</h2>
            </Link>
            <h4>Escuderías: {props.teams}</h4>
            <img src={props.image.url} alt={props.id} />
        </div>
   );
}