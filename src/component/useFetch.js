import { useEffect, useState } from "react";


const useFetch = (url) => {

    const [data, setBlogs] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
            .then(response => response.json())
            .then(result => {
                setLoading(false);
                setBlogs(result);
            }).catch(error => {
                setLoading(false);
                setError(error.message);
                console.log(error)
            })
        }, 1000)
    }, [url]);

    return {data, loading, error};
}

export default useFetch;