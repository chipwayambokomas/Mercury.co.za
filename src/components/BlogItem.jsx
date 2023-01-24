
import Chip from './Chip'
import React from 'react'
import './BlogItem.css'
import { Link } from 'react-router-dom'


const BlogItem = ({ blog: { id, image, tags, date, Aname, title, preview, readMore } }) => (
        <div className='BlogItem-Wrap'>

            <img src={image} alt='cover' className='BlogItem-Cover'/>

        <div className='chipWrapB'>
            {tags.map((tags, index) => {
                return (
                    <Chip label={tags} key={index} />
                )
            })}
            
        </div>

            <h3>{title}</h3>

            <p className='blogItem-des'>{preview}</p>

            <footer>
                <div className='BlogItemAuther'>
                    <div>
                        <h6>{Aname}</h6>
                        <p>{date}</p>
                    </div>
                </div>
                <Link className='BlogItem-Link' to={readMore}><i className='fa-solid fa-arrow-right'></i></Link>
            </footer>


        </div>

)

export default BlogItem
