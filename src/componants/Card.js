import '../stylesheets/Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

export default function Card(props){
  console.log(props.item.imageURL)
  return (
    <div className="card">
      <img src={props.item.imageUrl} alt={"picture of" + props.item.title} />
      <div className="content">
        <div className="flex">
          <FontAwesomeIcon icon={faLocationDot} className="icon"/>
          <h2>{props.item.location.toUpperCase()}</h2>
          <a href={props.item.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h1>{props.item.title}</h1>
        <h3>{props.item.startDate} - {props.item.endDate}</h3>
        <p>{props.item.description}</p>
        <div className="tip-list">
          <h3>Top tips</h3>
          <ul>
            <li>{props.item.topTips.one}</li>
            <li>{props.item.topTips.two}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
