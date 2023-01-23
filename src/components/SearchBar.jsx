
import React from 'react'
import './SearchBar.css'

const SearchBar = ({value, handleSearchKey, clearSearch, formSubmit}) => {
  return (
    <div className='SearchBar-wrap'>
        <form onSubmit={formSubmit}>
            <input type='text' onChange={handleSearchKey}  placeholder='Search By Category' value={value} className='SearchBar-Style' />

            {value && <span onClick={clearSearch}>X</span>}

            <button className='GoButton-Style'>Go</button>
        </form>


      
    </div>
  )
}

export default SearchBar
