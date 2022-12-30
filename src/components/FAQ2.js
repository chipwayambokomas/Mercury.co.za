import React from 'react'

function FAQ2({faq1,index1,toggleFAQ1}) {
  return (
    <div 
    className={'faq1 ' + (faq1.open ? 'open' : '')}
    key={index1}
    onClick={() => toggleFAQ1(index1)}
    >
        <div className='faq-question1'>
            {faq1.question}
        </div>
        <div className='faq-answer1'>
            {faq1.answer}
        </div>
      
    </div>
  )
}

export default FAQ2
