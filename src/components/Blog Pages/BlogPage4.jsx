import React from 'react'
import Navbar from '../Navbar'
import Navbar1 from '../Navbar1'
import RegularHero from 'C:/Users/Sabo/OneDrive/Pictures/Documents/Tigmoo/mercuryv3/src/components/RegularHero'
import homeimage from 'C:/Users/Sabo/OneDrive/Pictures/Documents/Tigmoo/mercuryv3/src/assests/regular.png'
import Footer from '../Footer'
import timeline4 from "C:/Users/Sabo/OneDrive/Pictures/Documents/Tigmoo/mercuryv3/src/assests/timeline4.png"
import './BlogPages.css'
import { Link } from 'react-router-dom'

const BlogPage1 = () => {
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

                <h3 className='DateOfPublish'>Published January 25, 2021</h3>

                <h1 className='TitleOfBlog'>35 Stellar Courier Blogs to Keep You Courier to your home.</h1>

                <div className='ChipWrap'>
                    <p className='Blogchip'>Ocean Freight</p>
                    <p className='Blogchip'>Sea Travel</p>
                    <p className='Blogchip'>Import Tax</p>
                </div>

                <img src={timeline4} alt='Timeline1' className='BlogMainImage'></img>
                <div className='BlogContentWrap'>

                    <p className='BlogContent'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices facilisi sed tincidunt mauris duis pulvinar convallis eu. Lobortis scelerisque aliquam massa arcu, eget. Sociis odio quis eget lacus. Dolor at enim viverra laoreet molestie amet cursus et. Sed lacus, viverra lacinia scelerisque cras aliquam blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices facilisi sed tincidunt mauris duis pulvinar convallis eu. Lobortis scelerisque aliquam massa arcu, eget. Sociis odio quis eget lacus. Dolor at enim viverra laoreet molestie amet cursus et. Sed lacus, viverra lacinia scelerisque cras aliquam blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices facilisi sed tincidunt mauris duis pulvinar convallis eu. Lobortis scelerisque aliquam massa arcu, eget. Sociis odio quis eget lacus. Dolor at enim viverra laoreet molestie amet cursus et. Sed lacus, viverra lacinia scelerisque cras aliquam blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices facilisi sed tincidunt mauris duis pulvinar convallis eu. Lobortis scelerisque aliquam massa arcu, eget. Sociis odio quis eget lacus. Dolor at enim viverra laoreet molestie amet cursus et. Sed lacus, viverra lacinia scelerisque cras aliquam blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices facilisi sed tincidunt mauris duis pulvinar convallis eu. Lobortis scelerisque aliquam massa arcu, eget. Sociis odio quis eget lacus. Dolor at enim viverra laoreet molestie amet cursus et. Sed lacus, viverra lacinia scelerisque cras aliquam blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices facilisi sed tincidunt mauris duis pulvinar convallis eu. Lobortis scelerisque aliquam massa arcu, eget. Sociis odio quis eget lacus. Dolor at enim viverra laoreet molestie amet cursus et. Sed lacus, viverra lacinia scelerisque cras aliquam blandit.</p>

                </div>

                <ul className="b1">
                    <li>
                        <Link to='/blog/page=1'>
                            <button className='Gobackbutton'><i className='fa-solid fa-arrow-left'></i>Go Back</button>
                        </Link>
                    </li>
                </ul>



            </div>


            <Footer />
        </>
    )
}

export default BlogPage1
