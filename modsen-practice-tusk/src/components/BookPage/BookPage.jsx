import { Link } from 'react-router-dom';
import useRequestID from 'hooks/useRequestID';

const BookPage = () => {
  const post = useRequestID();
  console.log(post);
  return (
    <>
      {post && (
        <>
          <img src={post.volumeInfo.imageLinks.thumbnail} alt="no image"></img>
          <h1>{post.volumeInfo.title}</h1>
          {post.volumeInfo.categories !== undefined ? (
            post.volumeInfo.categories.map((item, key) => {
              return <p key={key}>{item}</p>;
            })
          ) : (
            <p>No categories for this book</p>
          )}
          {post.volumeInfo.authors !== undefined ? (
            post.volumeInfo.authors.map((item, key) => {
              return <p key={key}>{item}</p>;
            })
          ) : (
            <p>No authors for this book</p>
          )}
          <p>{post.volumeInfo.description}</p>
          <Link to="/">Back</Link>
        </>
      )}
    </>
  );
};

export default BookPage;
