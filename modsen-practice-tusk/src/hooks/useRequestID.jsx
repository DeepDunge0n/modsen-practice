import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const useRequestID = () => {
  const [imageLinks, setImageLinks] = useState(null);
  const [title, setTitle] = useState(null);
  const [authors, setAuthors] = useState(null);
  const [categories, setCategories] = useState(null);
  const [description, setDescription] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setAuthors(data.volumeInfo.authors);
        setCategories(data.volumeInfo.categories);
        setDescription(data.volumeInfo.description);
        setImageLinks(data.volumeInfo.imageLinks);
        setTitle(data.volumeInfo.title);
      });
  }, [id]);
  return [imageLinks, title, authors, categories, description];
};

export default useRequestID;
