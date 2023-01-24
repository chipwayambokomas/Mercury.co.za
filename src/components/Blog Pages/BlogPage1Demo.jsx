import React from 'react'
import Navbar from '../Navbar'
import Navbar1 from '../Navbar1'
import RegularHero from 'C:/Users/Sabo/OneDrive/Pictures/Documents/Tigmoo/mercuryv3/src/components/RegularHero'
import homeimage from 'C:/Users/Sabo/OneDrive/Pictures/Documents/Tigmoo/mercuryv3/src/assests/regular.png'
import Footer from '../Footer'
import './BlogPages.css'


const BlogPage1Demo = () => {
  return (
    <>
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
    <div>
      
    </div>
    <Footer/>
    
    </>
  )
}

export default BlogPage1Demo
