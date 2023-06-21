
import styles from './header.module.css'


const Header =(props)=>{
    const categories = ['All', 'Art', 'Biography', 'Computers', 'History', 'Medical', 'Poetry'];
    return(
        <div className={styles.header}>
            <h1>Search for books</h1>
            <form onSubmit={props.searchBook}
                className={styles.search} action="">
                <input
                    onChange={props.handleSearch} 
                    type='text' >
                </input>
                <button type='submit'><i className='bx bx-search-alt-2'></i></button>
            </form>
            <div className={styles.sorting}>
                <div>Categories</div>
                <select defaultValue='All' onChange={props.handleCategori}>
                    {categories.map((item, key) => {return (<option key = {key} value = {item}>{item}</option>)})}
                </select>
                <div>Sorting by</div>
                <select defaultValue='Newest' onChange={props.handleSort} >
                    <option value='Newest'>Relevance</option>
                    <option value='Relevance'>Newest</option>   
                </select>
            </div>
        </div>

    )
    
}



export default Header;