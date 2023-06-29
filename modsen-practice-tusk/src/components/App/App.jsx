import { useState } from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom'
import Header from "../Header/Header";
import BookList from "../BookList/BookList";
import BookPage from "../BookPage/BookPage";
import ErrorPage from "../ErrorPage";

const App =()=>{
  const [books, setBooks] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [totalItems, setTotalItems] = useState(0);
  const [index, setIndex] = useState(0);
  const [sort, setSort] = useState('Relevance');
  const [category, setCategory] = useState('');
  const navigate = useNavigate();

const handleSearch = (e) => {setSearchField(e.target.value)}
const handleIndex = (e) =>{
  searchBook(e);
  navigate('/');
  setBooks([]);
  setIndex(0);
}
const handleCategory = (e) =>{
  setCategory(e.target.value);
}
const handleSort = (e) =>{
  setSort(e.target.value);
}

const searchBook = (e)=>{ 
  e.preventDefault(); 
  console.log(searchField);
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchField}+intitle:${searchField}+subject:${category}&startIndex=${index}&maxResults=30&orderBy=${sort}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setIsLoaded(true);
      setBooks(books.concat([...data.items]));
      setTotalItems(data.totalItems);
      setIndex(index+30);
    }),(error) => {
      if (error) {
        navigate('/errorPage');
      }
    }
    
}



    return (
    
    <div className="App">
      <Header handleIndex = {handleIndex}
                handleSearch={handleSearch}
                handleSort = {handleSort}
                handleCategory = {handleCategory} />
      <Routes>
        
        <Route path="/" Component={()=><BookList books={books}
                  totalItems = {totalItems}
                  addMore = {searchBook}
                  isLoaded = {isLoaded}/>}/>
        <Route exact path='/:id' element={<BookPage />}/>
        <Route exact path='/errorPage' element={<ErrorPage/>}/>  
      </Routes>
    </div>
  );
 

}
export default App;
