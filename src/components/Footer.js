import './Footer.css'

import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>

        

        <div className='bottom'>
        <div className='yolo'>
            <img src='https://www.mercury.co.zm/wp-content/uploads/2018/10/logo-300.png' alt='mercury logo' width={300} height={92} className="logo1" />
            <p>Effective, Efficient & Excellent - One</p>
            <p>stop solution for your logistics</p>
            <p>services. Globally, the company has</p>
             <p>access to over 200,000.</p>
            </div>

            <div className='yolo1'>
            <a href='https://web.facebook.com/MercuryExpressLogisticsZambia/?_rdc=1&_rdr'>
                    <i className='fa-brands fa-facebook-square'></i>
                </a>
                <a href='/'>
                    <i className='fa-brands fa-instagram-square'></i>
                </a>
                <a href='/'>
                    <i className='fa-brands fa-youtube-square'></i>
                </a>
                <a href='/'>
                    <i className='fa-brands fa-twitter-square'></i>
                </a>
            </div>
            
            <div>
            <h4>Company</h4>
            <a href='/'>Home</a>
            <a href='/about-us'>About Us</a>
            <a href='/services'>Services</a>
            <a href='/'>Our Team</a>
            </div>
            <div>
            <h4>Support</h4>
            <a href='/faq'>FAQs </a>
            <a href='/'>Private Policy</a>
            <a href='/'>Terms &  Conditions</a> 
            </div>
            <div>
            <h4>Contact Us</h4>
            <a href='/'>E.  enquiries@mercury.co.zm</a>
            <a href='/'>A.  Jalan Jayakatwang  No.301 Ngasem, Ukrain</a>
            <a href='/'>P.  +260971269390-29</a>
            </div>
        
        </div>

        <div className='me'>
            <h4>Copyright © 2022-2023 | All rights reserved. Designed by: Saul Chipwayambokoma</h4>
        </div>
      
    </div>
  )
}

export default Footer
