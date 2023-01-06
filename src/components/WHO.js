import { Link } from "react-router-dom"

import './WHO.css'



const WHO = () => {

    return (
        <div className="whoweare">

            <div className="whoweare1">
                <div className="whoweare-text">
                    <h1>WHO WE ARE</h1>
                    <p>We are your delivery partner and we are able to deliver Shipments of any kind, to any Preferred Place of your destination it being via air, ocean, road (both International and Local). Our shipping Abilities give you our valued customers, the personalised attention you need as our systems are track able and traceable and are available 24/7.</p>
                    <ul className="b1">
                        <li>
                            <Link to='/about-us'>
                                <button className="whowearebutton">Learn More <i className='fa-solid fa-arrow-right'></i></button>
                            </Link>
                        </li>
                    </ul>
                </div>

               
            </div>


            <div className="Parcels">
            <i className="fa-solid fa-users"></i>
            <h1>3M+</h1>
            <p>Parcels Delivered</p>
            </div>

            <div className="Cities">
            <i className="fa-solid fa-city"></i>
            <h1>72+</h1>
            <p>Cities Covered</p>
            </div>

            <div className="Registered">
            <i className="fa-solid fa-award"></i>
            <h1>153+</h1>
            <p>Registered Customers</p>
            </div>

            <div className="Pick">
            <i className="fa-solid fa-suitcase"></i>
            <h1>10K+</h1>
            <p>Pick and Packs</p>
            </div>
        </div>
    )


}

export default WHO