import './FeedbackAttributes.css'

import React from 'react'

function FeedbackAttributes() {
    return (
        <div className='dualcontainer'>
            <div className='attributes'>
                <h1>WHAT MAKES US SPECIAL?</h1>
                <h1 className='line'>_________</h1>
                <p className='p21'>Working in 17 regional clusters to deliver operational</p>
                <p className='p22'>excellence.</p>
                <div className='q1'>
                <i class="fa-solid fa-truck"></i>
                <h4>EXPORT EXPRESS</h4>
                </div >
                <div className='q2'>
                <i class="fa-solid fa-cart-arrow-down"></i>
                <h4>IMPORT EXPRESS</h4>
                </div>
                <div className='q3'>
                <i class="fa-solid fa-plane-departure"></i>
                <h4>DOMESTIC EXPRESS</h4>
                </div>
                <div className='q4'>
                <i class="fa-solid fa-road"></i>
                <h4>ROAD EXPRESS</h4>
                </div>
            </div>
            <div className='form-container'>
                <h1>YOUR FEEDBACK FOR US</h1>
                <form>
                 
                    <input placeholder='First name'/>
                    <input placeholder='Last name'/>
                    <input placeholder='Email'/>
                    
                    
                    <input placeholder='Telephone (optionl)'/>
                    <input placeholder='Subject'/>
                   
                    <textarea placeholder='How can we help you?' rows='4'></textarea>
                    <button>I AM NOT A ROBOT (Requires site to be live)</button>
                    <button className='b21'>Submit </button>
                   
                   
                </form>
            </div>

        </div>
    )
}

export default FeedbackAttributes