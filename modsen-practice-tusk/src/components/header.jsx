
import styles from './header.module.css'


const Header =(props)=>{

    return(
        <div className={styles.header}>
            <h1>Search for books</h1>
            <form onSubmit={props.searchBook}
                className={styles.search} action="">
                <input
                    onChange={props.handleSearch} 
                    type='text' 
                    placeholder='react'>
                </input>
                <button type='submit'><i className='bx bx-search-alt-2'></i></button>
            </form>
            <div className={styles.sorting}>
                <div>Categories</div>
                <input placeholder='all'></input>
                <div>Sorting by</div>
                <select defaultValue='Relevance'>
                    
                </select>
            </div>
        </div>

    )
    
}



export default Header;