import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};
        setLoading(true);
        fetch("http://localhost:8000/blogs", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(response => response.json())
        .then(result => {
            setLoading(false);
            console.log(result);
            console.log('Blog added');
            history.push('/');
        }).catch(error => {
            console.log(error);
            setLoading(false);

        })
    }

    return ( 
        <div className="create">
            <h2>Add new blog</h2>
            <form onSubmit={handleSubmit}>
                <label >Blog title</label>
                <input type="text" required value={title} onChange={(e)=>{
                    setTitle(e.target.value)
                }}/>

                <label >Blog body</label>
                <textarea type="text" required value={body} onChange={(e)=>{
                    setBody(e.target.value);
                }}></textarea>

                <label >Blog author</label>
                <select value={author} onChange={(e)=>{
                    setAuthor(e.target.value);
                }}>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {!loading && <button>Add blog</button>}
                {loading && <button>Adding blog...</button>}
            </form>
        </div>
     );
}
 
export default Create;