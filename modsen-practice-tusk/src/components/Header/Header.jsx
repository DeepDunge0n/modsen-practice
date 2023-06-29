import Sort from '../Sort/Sort';
import styles from './header.module.css'


const Header =({handleIndex, handleSearch, handleCategory, handleSort})=>{
    
    return(
        <div className={styles.header}>
            <h1>Search for books</h1>
            <form onSubmit={handleIndex}
                className={styles.search} action="">
                <input
                    onChange={handleSearch} 
                    type='text' >
                </input>
                <button type='submit'><i className='bx bx-search-alt-2'></i></button>
            </form>
            <Sort handleCategory={handleCategory} handleSort = {handleSort}/>
        </div>

    )
    
}



export default Header;