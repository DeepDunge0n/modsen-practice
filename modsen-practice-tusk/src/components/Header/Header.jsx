import SortSelect from 'components/SortSelect/SortSelect';
import styles from './header.module.css';
import { categories, categoriesStr, sortingStr, sortingBy } from './config';

const Header = ({ handleIndex, handleSearch, handleCategory, handleSort }) => {
  return (
    <div className={styles.header}>
      <h1>Search for books</h1>
      <form onSubmit={handleIndex} className={styles.search} action="">
        <input onChange={handleSearch} type="text"></input>
        <button type="submit">
          <i className="bx bx-search-alt-2"></i>
        </button>
      </form>
      <div className={styles.sorting}>
        <SortSelect
          handleSort={handleCategory}
          categories={categories}
          categoriesStr={categoriesStr}
        />
        <SortSelect
          handleSort={handleSort}
          categories={sortingBy}
          categoriesStr={sortingStr}
        />
      </div>
    </div>
  );
};

export default Header;
