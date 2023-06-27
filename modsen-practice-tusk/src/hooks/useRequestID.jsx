import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const useRequestID = ()=>{
    const [post, setPost] = useState(null);
    const {id} = useParams();
    useEffect(() =>{
        fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setPost(data);
            })
    }, [id])
    return post;
}

export default useRequestID