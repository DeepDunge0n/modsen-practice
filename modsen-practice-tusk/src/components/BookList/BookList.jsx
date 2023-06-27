import BookCard from "../BookCard/BookCard";
import styles from "./BookList.module.css"

const BookList = ({ totalItems, books }, props)=>{ 

    const notFoundImage = './src/assets/no-image.jpg'
    return(
        <div >
            <div className={styles.totalItems}>Total items: {totalItems}</div>
            <div className={styles.list}>
            {
                books.map((book, i)=>{
                    const {imageLinks, title, authors, categories} = book.volumeInfo;
                    return <BookCard 
                                    key = {i}
                                    image = {imageLinks? imageLinks.thumbnail : notFoundImage}
                                    title={title}
                                    author={authors}
                                    category={categories}
                                    id = {book.id}
                    />
                    
                })
            }</div>
            {totalItems !== 0 && (
            <button className={totalItems} onClick={props.addMore}>
                Add more
            </button>)}        
        </div>
    )
}

export default BookList;