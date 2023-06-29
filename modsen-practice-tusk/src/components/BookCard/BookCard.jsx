import { Link } from 'react-router-dom';
import styles from './BookCard.module.css'

const BookCard = ({image, id, title, category, author})=>{  
    return(        
        <div className={styles.container}>
           <img className={styles.image} src={image} alt="no image" />
           <div> 
            <Link to={`/${id}`}>{title}</Link>   
                <h3>{category}</h3>
                <p>{author}</p>
           </div>
        </div>
    )
}

export default BookCard;