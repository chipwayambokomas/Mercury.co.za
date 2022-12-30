import './ServicesSection.css'
import {Link} from 'react-router-dom'

function ServicesSectionData(props) {
    return (
        <div className='section-card'>
            <div className='s-image'>
                <img alt='simg1' src={props.image} />
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
            <ul className="b1">
                <li>
                    <Link to={props.linkto}>
                        <button className='b1'>Learn More <i className='fa-solid fa-arrow-right'></i></button>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default ServicesSectionData