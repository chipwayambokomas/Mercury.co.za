import React, { useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Navbar1 from '../components/Navbar1'
import RegularHero from '../components/RegularHero'
import homeimage from '../assests/regular.png'
import SearchBar from '../components/SearchBar'
import BlogList from '../components/BlogList'
import { TimelineDatapg1 } from '../components/TimelineData'
import BlogSideSection from '../components/BlogSideSection'
import EmptyList from '../components/EmptyList'

const  BlogPageDemo = () => {

  const [blogs,setblogs] = useState(TimelineDatapg1)
  const [searchKey,setSearchKey] = useState('')
  
  const handleSearchSubmit = event => {
    event.preventDefault();
    handleSearchResults();

  }

  const handleSearchResults=()=>{
    const allBlogs=TimelineDatapg1;
    const filteredBlogs=allBlogs.filter(blog=>blog.category.toLowerCase().includes(searchKey.toLowerCase().trim()));

    setblogs(filteredBlogs)
  }

  const handleClearSearch = () =>{
    setblogs(TimelineDatapg1)
    setSearchKey('')
  
  }
  return (
    <div>
      <Navbar1/>
      <Navbar/>
      <RegularHero
        
        cName="Regularhero"
        RegularheroImg={homeimage}
        title='Our Blog'
        sub='Home - Blog Page'
        des1='In publishing and graphic design, Lorem ipsum is a'
        des2='placeholder text commonly used to demonstrate'
        backgroundTitle='BLOG'
        />

        <SearchBar  value={searchKey} clearSearch={handleClearSearch}  formSubmit={handleSearchSubmit} handleSearchKey={(e) => setSearchKey(e.target.value)}/>
        
       { !blogs.length ? <EmptyList/> : <BlogList blogs={blogs}/>}
        

        <BlogSideSection/>




      <Footer/>
      
    </div>
  )
}

export default BlogPageDemo
