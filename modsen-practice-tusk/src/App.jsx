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
        totalItems: 0,
        index: 30,
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
      this.setState({totalItems: data.totalItems});
    })
    
}

addMore=(e)=>{
  e.preventDefault();
  console.log(this.state.searchField);
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.searchField}&startIndex=${this.state.index}&maxResults=30`)
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
    <div className="App">
        <ErrorBoundary>
        <Header searchBook = {this.searchBook} handleSearch={this.handleSearch} />
        <BookList books={this.state.books} totalItems = {this.state.totalItems} addMore = {this.addMore}/>
        </ErrorBoundary>
    </div>
  );
 }
}

export default App;
