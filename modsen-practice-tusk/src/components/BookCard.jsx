import styles from './BookCard.module.css'

const BookCard = (props)=>{  
    return(
        <div className={styles.container}>
           <img className={styles.image} src={props.image} alt="no image" />
           <div>
                <h2>{props.title}</h2>
                <h3>{props.categori}</h3>
                <p>{props.author}</p>
           </div>

        </div>
    )
}

export default BookCard;