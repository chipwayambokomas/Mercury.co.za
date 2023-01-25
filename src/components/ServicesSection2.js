import { useState } from 'react'
import './ServicesSection2.css'
import pic1 from '../assests/servicePage1.png'
import pic2 from '../assests/planepicture.jpg'
import pic3 from '../assests/shippicture.png'
import pic4 from '../assests/truckpicture.png'
import { Link } from 'react-router-dom'
import './ServicesSection.css'
function ServicesSection2() {

    const [data, setData] = useState('Air Transport Services')
    const [serviceData, setServiceData] = useState('We offer a global and cost effective solution to all of your air freight needs. Through a worldwide network, the industry professionals provide global services and local expertise to ensure complete door-to-door transportation and smooth customs clearance at all times. The state-of-the-art technology and network of offices that are around the world to allow total trace ability and visibility of your shipments from the moment a job is booked until it is delivered at the final destination.')

    const [picData, setPicData] = useState(pic2)


    function airtransport() {

        setData('Air Transport Services')
        setPicData(pic2)
        setServiceData('We offer a global and cost effective solution to all of your air freight needs. Through a worldwide network, the industry professionals provide global services and local expertise to ensure complete door-to-door transportation and smooth customs clearance at all times. The state-of-the-art technology and network of offices that are around the world to allow total trace ability and visibility of your shipments from the moment a job is booked until it is delivered at the final destination.')

    }
    function shipment() {

        setData('Shipment')
        setPicData(pic3)
        setServiceData("Whether it's Full Container Loads (FCL), Less Than Container Loads (LCL), import or export, consolidated or project cargo whatever your requirements may be, we provide comprehensive ocean freight forwarding services. It is a low cost option for sending large loads long distances, which don't require immediate delivery. This can be a highly economical solution. Door-to-door or door-to-port delivery options in full or part container loads are available. We are able to deal with all the export and import clearance details too!")


    }
    function roadtransport() {

        setData('Road Transport Services')
        setPicData(pic4)
        setServiceData("We have one of the largest and most advanced land freight networks in Zambia. Modern truck fleets equipped with technology, scheduled services and strategically-located terminal hubs; combined to make our land freight services a smart and cost-effective shipping alternative. We help our customers to constantly improve their transportation networks and gain a competitive advantage by helping them get their products to market faster and more efficiently. We collect large goods such as raw materials, bulk stationary or office furniture directly from your premises, transport them to your destination of choice while effectively managing and updating you on the whole process.")


    }

    const [selected, setSelected] = useState(1);

    const handleColor = (row) => {
        setSelected(row.id);
    };

    function both(list) {

        if(list.id ===1)
        {airtransport()}
        else if (list.id ===2) {
            shipment()
        } else {
            roadtransport()
        }
        
        handleColor(list)
    }

    const lists = [
        { id: 1, title: "Air Transport", presentation: 'ShiftingButtonsb1' },
        { id: 2, title: "Shipment", presentation: 'ShiftingButtonsb2' },
        { id: 3, title: "Road Transport", presentation: 'ShiftingButtonsb3' }
    ];

    return (

        <>
            <div className='ServiceSection2'>

                <img className='pic1' alt='pic1' src={pic1} width={995} height={620} />

                <div className='serviceDetailCard'>
                    <h2 className='serviceDetailCardTitle'>SERVICES</h2>
                    <p className='serviceDetailCardDetail'>Mercury Logistics are your freight partner, we are able to deliver freight of any kind, to any place via air, ocean, road or multi modal shipping, but capable of giving you, our valued customers, the personal attention you need. We help you constantly improve your transportation networks and gain a competitive advantage, by giving you the means to get products to the market faster and more efficiently.</p>
                    <ul className="b1">
                        <li>
                            <Link to='/'>
                                <button>Learn More <i className='fa-solid fa-arrow-right'></i></button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='ServiceSection2-1-'>

                <img className='pic2' alt='pic2' src={picData} width={995} height={620} />

                <div className='serviceDetailCard1'>
                    <h2 className='serviceDetailCardTitle1'>{data}</h2>
                    <p className='serviceDetailCardDetail1'>{serviceData}</p>
                    <ul className="b1">
                        <li>
                            <Link to='/'>
                                <button>Learn More <i className='fa-solid fa-arrow-right'></i></button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='ShiftingButtons'>
                {lists.map((list) => (
                    <button
                        key={list.id}
    
                        onClick={() => both(list)}
                        style={{ backgroundColor: list.id === selected ? "#013A6B" : "transparent" }}
                        className={list.presentation}
                    >
                        {list.title}
                    </button>
                ))}
            </div>
        </>






    )


}

export default ServicesSection2

