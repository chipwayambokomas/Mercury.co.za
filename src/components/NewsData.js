import './MercuryLatestNews.css'

function   TestimoniesData(props) {
    return (
        <div className='t-card'>
            <div className='n-image'>
                <img alt='simg1' src={props.image} />
            </div>
            <h4>{props.heading}</h4>
            <h6>{props.position}</h6>
            <p>{props.text}</p>
            
        </div>
    )
}

export default TestimoniesData