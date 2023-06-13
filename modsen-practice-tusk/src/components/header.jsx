import  {Component} from 'react';
import styles from './header.module.css'
import request from 'superagent'

class Header extends Component{
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
                this.setState({books: [...data.body.items]})
            })
    }

    handleSearch = (e) =>{
        this.setState({searchField: e.target.value})
    }
    render(){
    return(
        <div className={styles.header}>
            <h1>Search for books</h1>
            <form onSubmit={this.searchBook}
                className={styles.search} action="">
                <input
                    onChange={this.handleSearch} 
                    type='text' 
                    placeholder='react'>
                </input>
                <button type='submit'><i className='bx bx-search-alt-2'></i></button>
            </form>
            <div className={styles.sorting}>
                <div>Categories</div>
                <input placeholder='all'></input>
                <div>Sorting by</div>
                <input placeholder='relevance'></input>
            </div>
        </div>

    )}
}

export default Header;