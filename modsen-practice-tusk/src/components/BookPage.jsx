import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const BookPage = ()=>{ 
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
    return(
        <div>
            {post && (
                <>
                    <img src={post.volumeInfo.imageLinks.thumbnail} alt="no image"></img>
                    <h1>{post.volumeInfo.title}</h1>
                    {post.volumeInfo.categories!==undefined ?
                     post.volumeInfo.categories.map((item, key) => { return <p key = {key}>{item}</p>}) : 
                     <p>No categories for this book</p>}
                    {post.volumeInfo.authors!==undefined ?
                     post.volumeInfo.authors.map((item, key) => { return <p key = {key}>{item}</p>}) : 
                     <p>No authors for this book</p>}
                     <p>{post.volumeInfo.description}</p>
                </>
            )}
        </div>
    )
}

export default BookPage;