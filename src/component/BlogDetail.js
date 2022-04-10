import useFetch from "./useFetch";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";


const BlogDetail = () => {
    const {id} = useParams();
    const history = useHistory();
    const {data: blog, loading, error} = useFetch("http://localhost:8000/blogs/"+id);

    const handleDelete = (blogId) => {
        fetch("http://localhost:8000/blogs/"+id, {
            method: "DELETE"
        }).then(response => {
            if (response.ok) { 
                history.push('/');
            }
        }).catch(error => {
            console.log(error.message)
        });
    }

    return ( 
        <div className="blog-details">
            {error && <div>{error}</div>}
            {loading && <div>Loading...</div>}
            {blog && <article>
                <h2>{blog.title}</h2>
                <p>Writen by - {blog.author}</p>
                <div>{blog.body}</div>
                </article>}
            <button onClick={(blogId) => {
                handleDelete(blogId = blog.id)
            }}>Delete</button>
        </div>
     );
}
 
export default BlogDetail;