import { categories } from './config';
import styles from './Sort.module.css'

const Sort = ({handleCategory, handleSort}) =>{
return(
    <div className={styles.sorting}>
                <div>Categories</div>
                <select defaultValue='All' onChange={handleCategory}>
                    {categories.map((item, key) => {
                        return (
                            <option key = {key} value = {item}>
                                {item}
                            </option>
                        );
                    })}
                </select>
                <div>Sorting by</div>
                <select defaultValue='Newest' onChange={handleSort} >
                    <option value='Newest'>Relevance</option>
                    <option value='Relevance'>Newest</option>   
                </select>
            </div>
)}

export default Sort