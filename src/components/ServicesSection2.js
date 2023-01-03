import { Component } from 'react'
import './ServicesSection2.css'
import pic1 from '../assests/servicePage1.png'
import pic2 from '../assests/servicePage2.png'
import { Link } from 'react-router-dom'

class ServicesSection2 extends Component {

    state = {clicked: false}

    handleClick = () =>{
      this.setState({clicked: !this.state.clicked})
    }

    render() {

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

                    <img className='pic2' alt='pic2' src={pic2} width={995} height={620} />

                    <div className='serviceDetailCard1'>
                        <h2 className='serviceDetailCardTitle1'>Air Transport Services</h2>
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

                <div className='ShiftingButtons' >

                    <button className='ShiftingButtonsb1'>Air Transport</button>

                    <button className='ShiftingButtonsb2' >Shipment</button>

                    <button className='ShiftingButtonsb3'>Road Transport</button>

                </div>

            </>






        )
    }

}

export default ServicesSection2

