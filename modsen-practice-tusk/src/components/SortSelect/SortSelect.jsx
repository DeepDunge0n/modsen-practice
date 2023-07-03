const SortSelect = ({ handleSort, categories, categoriesStr }) => {
  return (
    <>
      <div>{categoriesStr}</div>
      <select defaultValue={categories[0]} onChange={handleSort}>
        {categories.map((item, key) => {
          return (
            <option key={key} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default SortSelect;
