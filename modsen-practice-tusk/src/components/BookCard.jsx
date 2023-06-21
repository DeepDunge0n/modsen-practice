import { Link } from 'react-router-dom';
import styles from './BookCard.module.css'

const BookCard = (props)=>{  
    return(
        
        <div className={styles.container}>
           <img className={styles.image} src={props.image} alt="no image" />
           <div>
          
            <Link to={`/${props.id}`}>{props.title}</Link>
            
                <h3>{props.categori}</h3>
                <p>{props.author}</p>
           </div>

        </div>
    )
}

export default BookCard;