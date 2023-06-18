import React from "react";
import Header from "./components/header";

import BookList from "./components/BookList";
import ErrorBoundary from "./components/ErrorBoundary";




class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        books: [],
        searchField: '',
        isLoaded: false,
    }
}
handleSearch = (e) =>{
    this.setState({searchField: e.target.value}) 
}
searchBook=(e)=>{
  e.preventDefault();
  console.log(this.state.searchField);
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.searchField}&startIndex=0&maxResults=30`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      this.setState({isLoaded: true});
      this.setState({books: [...data.items]});
    })
    
}

 render(){
    return (
    <div className="App">
        <ErrorBoundary>
        <Header searchBook = {this.searchBook} handleSearch={this.handleSearch} />
        <BookList books={this.state.books}/>
        </ErrorBoundary>
    </div>
  );
 }
}

export default App;
