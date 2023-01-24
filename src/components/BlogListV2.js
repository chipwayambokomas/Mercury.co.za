import React from 'react'
import BlogItemV2 from './BlogItemV2.JS'
import './BlogListV2.css'

const BlogListV2 = ({blogs}) => (
 
    <div className='BlogListV2-Wrap'>

        {blogs.map((blog) => (<BlogItemV2 blog={blog} key={blog.id} />))}
      
    </div>
  
);

export default BlogListV2
