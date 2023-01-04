import { useState } from 'react'
import './ServicesSection2.css'
import pic1 from '../assests/servicePage1.png'
import pic2 from '../assests/planepicture.jpg'
import pic3 from '../assests/shippicture.png'
import pic4 from '../assests/truckpicture.png'
import { Link } from 'react-router-dom'

function ServicesSection2() {

    const [data, setData] = useState('Services We Offer')

    const [picData, setPicData] = useState(pic2)


    function airtransport() {

        setData('Air Transport Services')
        setPicData(pic2)

    }
    function shipment() {

        setData('Shipment')
        setPicData(pic3)

    }
    function roadtransport() {

        setData('Road Transport Services')
        setPicData(pic4)

    }

    const [selected, setSelected] = useState(0);

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
                    <p className='serviceDetailCardDetail'>Globally known for our ability to handle every last</p>
                    <p className='serviceDetailCardDetail'>detail of our customers' particular logistics and</p>
                    <p className='serviceDetailCardDetail'>forwarding needs, Mercury Logistic's Special Services</p>
                    <p className='serviceDetailCardDetail'>team takes care of all your Logistics. Our services</p>
                    <p className='serviceDetailCardDetail'>extend beyond the walls of the warehouse. You can</p>
                    <p className='serviceDetailCardDetail'>rely on us for your distribution service.</p>
                    <ul className="b1">
                        <li>
                            <Link to='/'>
                                <button>Learn More <i className='fa-solid fa-arrow-right'></i></button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='ServiceSection2(1)'>

                <img className='pic2' alt='pic2' src={picData} width={995} height={620} />

                <div className='serviceDetailCard1'>
                    <h2 className='serviceDetailCardTitle1'>{data}</h2>
                    <p className='serviceDetailCardDetail1'>Globally known for our ability to handle every last</p>
                    <p className='serviceDetailCardDetail1'>detail of our customers' particular logistics and</p>
                    <p className='serviceDetailCardDetail1'>forwarding needs, Mercury Logistic's Special Services</p>
                    <p className='serviceDetailCardDetail1'>team takes care of all your Logistics. Our services</p>
                    <p className='serviceDetailCardDetail1'>extend beyond the walls of the warehouse. You can</p>
                    <p className='serviceDetailCardDetail1'>rely on us for your distribution service.</p>
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

