import { Link } from 'react-router-dom';
import useRequestID from 'hooks/useRequestID';

const BookPage = () => {
  const [imageLinks, title, categories, authors, description] = useRequestID();
  return (
    <>
      {imageLinks && (
        <>
          <img src={imageLinks.thumbnail} alt="no image"></img>
          <h1>{title}</h1>
          {categories !== undefined ? (
            categories.map((item, key) => {
              return <p key={key}>{item}</p>;
            })
          ) : (
            <p>No categories for this book</p>
          )}
          {authors !== undefined ? (
            authors.map((item, key) => {
              return <p key={key}>{item}</p>;
            })
          ) : (
            <p>No authors for this book</p>
          )}
          <p>{description}</p>
          <Link to="/">Back</Link>
        </>
      )}
    </>
  );
};

export default BookPage;
