import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import "../stylesheets/Footer.css"

export default function Footer(){
  return (
    <div className="footer">
      <div className='links'>
        <a href='https://www.linkedin.com/in/chloesian-harrison1/'>
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href='https://github.com/chloesianharrison'>
          <FontAwesomeIcon icon={faSquareGithub} />
        </a>
      </div>
      <small>Chloe Harrison 2024</small>
    </div>
  )
}
