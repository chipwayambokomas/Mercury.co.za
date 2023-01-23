
import React from 'react'
import './BlogItem.css'
import { Link } from 'react-router-dom'
import './Timeline.css'
import Chip from './Chip'

const BlogItem = ({blog:{category,image,date,title,preview,Aname,readMore}}) => {
  return (
    <div>

<img alt='image1-t' className='image1-t' src={image} />

<div className='postinformation'>
    <p><i className="fa-solid fa-clock"></i>{date}</p>
    <p><i className="fa-solid fa-user"></i>{Aname}</p>
   
</div>

<h1 className='BlogItem-Title'>{title}</h1>

<p className='postpre'>{preview}</p>

<Chip label={category}/>

<ul className="b1">
    <li>
        <Link to={readMore}>
            <button className='readmore'>Read More <i className='fa-solid fa-arrow-right'></i></button>
        </Link>
    </li>
</ul>
      
    </div>
  )
}

export default BlogItem
