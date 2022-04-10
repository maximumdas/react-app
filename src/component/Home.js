import useFetch from "./useFetch";
import BlogList from "./BlogList";

const Home = () => {

    const {data: blogs, loading, error} = useFetch("http://localhost:8000/blogs");
    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {loading && <div>Loading...</div>}
            {blogs && <BlogList data={blogs} title="All Blog"/>}
        </div>
     );
}
 
export default Home;