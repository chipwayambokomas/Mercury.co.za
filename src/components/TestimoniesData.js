import './Testimonies.css'

function   TestimoniesData(props) {
    return (
        <div className='t-card'>
            <p>{props.text}</p>
            <div className='t-image'>
                <img alt='simg1' src={props.image} />
            </div>
            <h4>{props.heading}</h4>
            <h6>{props.position}</h6>
            
            
        </div>
    )
}

export default TestimoniesData