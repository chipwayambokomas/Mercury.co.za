import React, {useState} from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Navbar1 from '../components/Navbar1'
import RegularHero from '../components/RegularHero'
import homeimage from '../assests/regular.png'
import SearchBar from '../components/SearchBar'
import BlogList from '../components/BlogList'
import EmptyList from '../components/EmptyList'
import { TimelineDatapg1 } from '../components/TimelineData'
import './BlogPageDemo.css'


const BlogPageDemo = () => {

  const [blogs, setBlogs] = useState(TimelineDatapg1)
  const [searchKey, setSearchKey] = useState('')

  const handleSearchSubmit = event => {
    event.preventDefault()
    handleSearchResults()

  }

  const handleSearchResults = () => {
    const allBlogs = TimelineDatapg1
    const filteredBlogs = allBlogs.filter(blog=>blog.title.toLowerCase().includes(searchKey.toLowerCase().trim()))

    setBlogs(filteredBlogs)
  }

  const handleClearSearch = () => {
      setBlogs(TimelineDatapg1)
      setSearchKey('')
  }


  return (
    <div>
      <Navbar1 />
      <Navbar />
      <RegularHero

        cName="Regularhero"
        RegularheroImg={homeimage}
        title='Our Blog'
        sub='Home - Blog Page'
        des1='In publishing and graphic design, Lorem ipsum is a'
        des2='placeholder text commonly used to demonstrate'
        backgroundTitle='BLOG'
      />

      <SearchBar value={searchKey} clearSearch={handleClearSearch} formSubmit={handleSearchSubmit} handleSearchKey={(e) => setSearchKey(e.target.value)}       />
      <h4 className='SerachResults'>Search Reuslts Found: {blogs.length}</h4>

      {!blogs.length ? <EmptyList/> :<BlogList blogs={blogs}/>}


     



      



      <Footer />

    </div>
  )
}

export default BlogPageDemo
