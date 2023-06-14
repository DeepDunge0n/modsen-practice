import React from "react";
import Header from "./components/header";
import request from 'superagent'
import BookList from "./components/BookList";



class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        books: [],
        seachField: ''
    }
}

searchBook = (e) =>{
    e.preventDefault();
    request
        .get("https://www.googleapis.com/books/v1/volumes")
        .query({q: this.state.searchField})
        .then((data)=> {
            console.log(data);
            this.setState({books: [...data.body.items]})
        })
}

handleSearch = (e) =>{
    this.setState({searchField: e.target.value})
}
 render(){
  return (
    <div className="App">
        <Header searchBook = {this.searchBook} handleSearch={this.handleSearch}/>
        <BookList books={this.state.books}/>
    </div>
  );
 }
}

export default App;
