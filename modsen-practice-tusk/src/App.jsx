import React from "react";
import Header from "./components/header";
import BookList from "./components/BookList";


import {Route, Routes, BrowserRouter} from 'react-router-dom'
import BookPage from "./components/BookPage";


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        bookId: '',
        books: [],
        searchField: '',
        isLoaded: false,
        totalItems: 0,
        index: 0,
        sort: 'Relevance',
        categori: '',
    }
}

handleSearch = (e) =>{
    this.setState({searchField: e.target.value}) 
}
handleCategori = (e) =>{
  this.setState({categori: e.target.value})
}
handleSort = (e) =>{
  this.setState({sort: e.target.value});
}
searchBook=(e)=>{
  
  e.preventDefault();
  console.log(this.state.searchField);
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.searchField}+intitle:${this.state.searchField}+subject:${this.state.categori}&startIndex=0&maxResults=30&orderBy=${this.state.sort}`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      this.setState({isLoaded: true});
      this.setState({books: [...data.items]});
      this.setState({totalItems: data.totalItems});
      this.setState({index: 0})
    })
    
}

addMore=(e)=>{
  e.preventDefault();
  console.log(this.state.searchField);
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.searchField}+intitle:${this.state.searchField}+subject:${this.state.categori}&startIndex=${this.state.index+30}&maxResults=30&orderBy=${this.state.sort}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      this.setState({index: this.state.index+30})
      this.setState({isLoaded: true});
      this.setState({books: this.state.books.concat([...data.items])});
    })
}

 render(){
    return (
    <BrowserRouter>
    <div className="App">
      <Header searchBook = {this.searchBook}
                handleSearch={this.handleSearch}
                handleSort = {this.handleSort}
                handleCategori = {this.handleCategori} />
      <Routes>
        <Route path="/" Component={()=><BookList books={this.state.books}
                  totalItems = {this.state.totalItems}
                  addMore = {this.addMore}
                  isLoaded = {this.state.isLoaded}
                  handleBookId = {this.handleBookId}/>}/>
        <Route exact path='/:id' element={<BookPage />}/>
           
      </Routes>
    </div>
    </BrowserRouter>
  );
 }
}

export default App;
