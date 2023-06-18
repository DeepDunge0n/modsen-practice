import BookCard from "./BookCard";
import styles from "./BookList.module.css"

const BookList = (props)=>{  
    return(
        <div >
            <div className={styles.totalItems}>Total items: {props.totalItems}</div>
            <div className={styles.list}>
            {
                props.books.map((book, i)=>{
                    return <BookCard 
                                    key = {i}
                                    {...(book.volumeInfo.imageLinks===undefined ?
                                         {image : 'https://main-cdn.sbermegamarket.ru/hlr-system/14/33/42/20/23/73/100026854151b0.jpg'} 
                                         : {image : book.volumeInfo.imageLinks.thumbnail})}
                                    title={book.volumeInfo.title}
                                    author={book.volumeInfo.authors}
                                    categori={book.volumeInfo.categories}
                    />
                    
                })
            }</div>
            <button className={styles.totalItems} onClick={props.addMore}>Add more</button>
        </div>
    )
}

export default BookList;