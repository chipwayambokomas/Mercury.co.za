import React from 'react'
import Navbar from '../Navbar'
import Navbar1 from '../Navbar1'
import RegularHero from 'C:/Users/Sabo/OneDrive/Pictures/Documents/Tigmoo/mercuryv3/src/components/RegularHero'
import homeimage from 'C:/Users/Sabo/OneDrive/Pictures/Documents/Tigmoo/mercuryv3/src/assests/regular.png'
import Footer from '../Footer'
import timeline1 from "C:/Users/Sabo/OneDrive/Pictures/Documents/Tigmoo/mercuryv3/src/assests/timeline1.png"
import Chip from "C:/Users/Sabo/OneDrive/Pictures/Documents/Tigmoo/mercuryv3/src/components/Chip"
import './BlogPages.css'
import { Link } from 'react-router-dom'

const BlogPage1 = () => {

    const chips = [
        'Ocean Freight', 'Ocean Travel', 'Import Tax'
      ]

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

            <div className='TheFinalFrontier'>
                <header>
                    <h1 className='BlogTitle-A'>How does Covid-19 affect import tax today?</h1>
                    <p className='Blog-Date'>Published January 25, 2021</p>
                    <p className='Blog-Author'>By: Cristofer Westervelt</p>
                    
                    <div className='Blog-TagsB'>
                    {chips.map((chips,index)=> {return(<div><Chip key={index} label={chips}/></div>)})}
                    
                    </div>

                </header>

                <img src={timeline1} alt='cover'/>
                <p className='blogItem-desA'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices facilisi sed tincidunt mauris duis pulvinar convallis eu. Lobortis scelerisque aliquam massa arcu, eget. Sociis odio quis eget lacus. Dolor at enim viverra laoreet molestie amet cursus et. Sed lacus, viverra lacinia scelerisque cras aliquam blandit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices facilisi sed tincidunt mauris duis pulvinar convallis eu. Lobortis scelerisque aliquam massa arcu, eget. Sociis odio quis eget lacus. Dolor at enim viverra laoreet molestie amet cursus et. Sed lacus, viverra lacinia scelerisque cras aliquam blandit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices facilisi sed tincidunt mauris duis pulvinar convallis eu. Lobortis scelerisque aliquam massa arcu, eget. Sociis odio quis eget lacus. Dolor at enim viverra laoreet molestie amet cursus et. Sed lacus, viverra lacinia scelerisque cras aliquam blandit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices facilisi sed tincidunt mauris duis pulvinar convallis eu. Lobortis scelerisque aliquam massa arcu, eget. Sociis odio quis eget lacus. Dolor at enim viverra laoreet molestie amet cursus et. Sed lacus, viverra lacinia scelerisque cras aliquam blandit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices facilisi sed tincidunt mauris duis pulvinar convallis eu. Lobortis scelerisque aliquam massa arcu, eget. Sociis odio quis eget lacus. Dolor at enim viverra laoreet molestie amet cursus et. Sed lacus, viverra lacinia scelerisque cras aliquam blandit.</p>


            </div> 
            <ul className="b1">
                    <li>
                        <Link to='/blog/page=1'>
                            <button className='Gobackbutton'><i className='fa-solid fa-arrow-left'></i>Go Back</button>
                        </Link>
                    </li>
                </ul>


            <Footer />
        </>
    )
}

export default BlogPage1
