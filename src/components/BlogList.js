import React from 'react'
import BlogItem from './BlogItem'
import './BlogList.css'


const BlogList = ({blogs}) => (
  
    <div className='BlogList-Wrap'>

        {blogs.map(blog=>(<BlogItem blog={blog} key={blog.id}/>))}

    </div>
  
);

export default BlogList
