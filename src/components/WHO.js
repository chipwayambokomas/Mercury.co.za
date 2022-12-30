import { Link } from "react-router-dom"
import parcels from '../assests/parcels.png'
import covered from '../assests/covered.png'
import registered from '../assests/registered.png'
import pick from '../assests/pick.png'
import './WHO.css'



const WHO = () => {

    return (
        <div className="whoweare">

            <div className="whoweare1">
                <div className="whoweare-text">
                    <h1>Who We Are</h1>
                    <p>We are your delivery partner and we are able to deliver Shipments of any kind, to any Preferred Place of your destination it being via air, ocean, road (both International and Local). Our shipping Abilities give you our valued customers, the personalised attention you need as our systems are track able and traceable and are available 24/7.</p>
                    <ul className="b1">
                    <li>
                        <Link to='/about-us'>
                            <button>Learn More <i className='fa-solid fa-arrow-right'></i></button>
                        </Link>
                    </li>
                    </ul>
                </div>

                <div className="image-container">
                    <div className="section-1">
                        <img alt="img1" src={parcels} />
                        <img alt="img2" src={covered} />

                    </div>
                    <div className="section-2">                       <img alt="img3" src={registered} />
                        <img alt="img4" src={pick} />
                    </div>
                </div>
            </div>

        </div>
    )


}

export default WHO