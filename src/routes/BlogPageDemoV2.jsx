import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Navbar1 from '../components/Navbar1'
import RegularHero from '../components/RegularHero'
import homeimage from '../assests/regular.png'
import SearchBar from '../components/SearchBar'
import BlogListV2 from '../components/BlogListV2'
import { TimelineDatapg1 } from '../components/TimelineData'




const BlogPageDemoV2 = () => {

  

  
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

      <SearchBar />

      <BlogListV2 blogs={TimelineDatapg1}/>





      <Footer />

    </div>
  )
}

export default BlogPageDemoV2
