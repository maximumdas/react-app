
// import { useState } from "react";
import {Link} from 'react-router-dom'
const BlogList = ({data, title}) => {

    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {data.map(blog => (
                <div key={blog.id} className="blog-preview">
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>{blog.author}</p>
                    </Link>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;