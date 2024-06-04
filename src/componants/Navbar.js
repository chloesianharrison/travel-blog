import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'
import "../stylesheets/Navbar.css"

export default function Navbar(){
  return (
    <div className="navbar">
      <FontAwesomeIcon icon={faEarthAmericas} />
      <h1>my travel journal</h1>
    </div>
  )
}
