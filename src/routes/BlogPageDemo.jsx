import React, { useState, Link } from 'react'
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
import { LatestData } from 'C:/Users/Sabo/OneDrive/Pictures/Documents/Tigmoo/mercuryv3/src/components/BlogSideSectionData.js'


const BlogPageDemo = () => {

  const [blogs, setBlogs] = useState(TimelineDatapg1)
  const [searchKey, setSearchKey] = useState('')

  const handleSearchSubmit = event => {
    event.preventDefault()
    handleSearchResults()

  }

  const handleSearchResults = () => {
    const allBlogs = TimelineDatapg1
    const filteredBlogs = allBlogs.filter(blog => blog.title.toLowerCase().includes(searchKey.toLowerCase().trim()))

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

      <div className='mainBlog-wrap'>
        <div className='mainBlog'>

        <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro optio quia reiciendis explicabo inventore, in totam ea sapiente eligendi provident ex officia beatae ipsum. Debitis rem ad cupiditate atque reprehenderit!</p>
        <button>Read More</button>
        
        </div>

      </div>



      <div className='TestBlogSection'>

        {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}

        <div className='SideBar'>
          <SearchBar value={searchKey} clearSearch={handleClearSearch} formSubmit={handleSearchSubmit} handleSearchKey={(e) => setSearchKey(e.target.value)} />
          <h4 className='SerachResults'>Search Reuslts Found: {blogs.length}</h4>
        
          <div className='latestPostNewSec'>
          <h3>Latest Post</h3>
          <div className='ThePosts'>
            {LatestData.map((data,index)  => {
              return(
                <div className='PostsWrap-ME' key={index}>
                  <img src={data.image} alt='postPic'></img>
                  <div className='PostsWrap-MEWORDS'>
                  <a href={data.link}>{data.preview}</a>
                  </div>
                </div>
              )
            })}
          </div>
          </div>

          <div className='SpcialMediaLinks'>

          <div className='instagram-Circle'>
          <a href='https://web.facebook.com/MercuryExpressLogisticsZambia/?_rdc=1&_rdr'>
                    <i className='fa-brands fa-facebook-square'></i>
                </a>
          </div>
          <div className='facebook-Circle'>
          <a href='https://web.facebook.com/MercuryExpressLogisticsZambia/?_rdc=1&_rdr'>
                    <i className='fa-brands fa-instagram-square'></i>
                </a>
          </div>
          <div className='linkedin-Circle'>
          <a href='https://web.facebook.com/MercuryExpressLogisticsZambia/?_rdc=1&_rdr'>
                    <i className='fa-brands fa-twitter-square'></i>
                </a>
          </div>
          <div className='youtube-Circle'>
          <a href='https://web.facebook.com/MercuryExpressLogisticsZambia/?_rdc=1&_rdr'>
                    <i className='fa-brands fa-youtube-square'></i>
                </a>
          </div>
          </div>



        </div>

      </div>







      <Footer />

    </div>
  )
}

export default BlogPageDemo
