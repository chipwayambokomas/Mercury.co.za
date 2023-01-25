
import React from 'react'
import { useState } from 'react'
import './SearchBar.css'

const SearchBar = ({ value, handleSearchKey, clearSearch, formSubmit }) => {

  const suggest = [
    'Shipment', 'Roadway', 'Airway'
  ]

  const [isFocus, setIsFocus] = useState(false)
  const [inputValue, setInputValue] = useState(value)

  function wholeLot(e) {
    handleSearchKey()
    setInputValue(e.target.value)
  }

  return (
    <div className='SearchBar-wrap'>
      <form onSubmit={formSubmit}>
        <input 
        type='text' 
        onChange={handleSearchKey}
        placeholder='Search' 
        value={value} className='SearchBar-Style' 
        onFocus={() => 
        setIsFocus(true)}/> 
        
        {value && <span onClick={clearSearch}>x</span>}

        <button className='GoButton-Style'><p>Go</p></button>
       {/* {isFocus && ( 
        <div className='Suggestions'>
          {suggest.map((suggest, index) => {

              const isMatch = suggest.indexOf(inputValue) > -1;

            return (

              <div key={index} >

              {isMatch && (<div className='TheAutoOnes'>
                {suggest}
              </div>)}

              </div>
            )
          })}
        </div>
        )}*/}
      </form>





    </div>
  )
}

export default SearchBar
