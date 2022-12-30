import './FAQ.css'
import React, { useState } from 'react'
import FAQ1 from './FAQ1'
import FAQ2 from './FAQ2'


function FAQpagequestions() {
    const [faqs, setfaqs] = useState([

        {
            question: 'How do I track my recent local packages?',
            answer: 'GOOGLE IT ;P',
            open: false
        },
        {
            question: 'When will my shipment arrive?',
            answer: 'GOOGLE IT ;P',
            open: false
        },
        {
            question: 'Do you offer customs clearance?',
            answer: 'GOOGLE IT ;P',
            open: false
        },
        {
            question: 'What is the range of services for export?',
            answer: 'GOOGLE IT ;P',
            open: false
        },
        {
            question: 'What is the range of services for Import?',
            answer: 'GOOGLE IT ;P',
            open: false
        }
       

    ]);

    const [faqs1, setfaqs1] = useState([

        {
            question: 'How do I track my recent local packages?',
            answer: 'GOOGLE IT ;P',
            open: false
        },
        {
            question: 'When will my shipment arrive?',
            answer: 'GOOGLE IT ;P',
            open: false
        },
        {
            question: 'Do you offer customs clearance?',
            answer: 'GOOGLE IT ;P',
            open: false
        },
        {
            question: 'What is the range of services for export?',
            answer: 'GOOGLE IT ;P',
            open: false
        },
        {
            question: 'What is the range of services for Import?',
            answer: 'GOOGLE IT ;P',
            open: false
        }

    ]);

    const toggleFAQ = index  => {

        setfaqs(faqs.map((faq, i) => {

            if (i === index) {
                faq.open = !faq.open
            }
            else {
                faq.open = false;
            }

            return faq;
     }))

    }

    const toggleFAQ1 = index1  => {

        setfaqs1(faqs1.map((faq1, i1) => {

            if (i1 === index1) {
                faq1.open = !faq1.open
            }
            else {
                faq1.open = false
            }

            return faq1
     }))

    }

    return (
        <div className='Accordion'>
           
            <div className='container'>
                <div className='faqs' >
                    {faqs.map((faq, i) => (

                   <FAQ1 faq={faq} index={i} toggleFAQ={toggleFAQ}/>

                ))}
                </div>
                <div className='faqs1' >
                    {faqs1.map((faq1, i1) => (

                   <FAQ2 faq1={faq1} index1={i1} toggleFAQ1={toggleFAQ1}/>

                ))}
                </div>
            </div>
            

        </div>
    )
}

export default FAQpagequestions

