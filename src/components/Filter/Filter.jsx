import styles from './Filter.module.css'

const Filter = ({ filterCategory, setFilterCategory }) => {
  return (
    <div className={styles.filterContainer}>
        <select className={styles.filter} name="filter" id="filter" value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)}>
            <option value="">Filter by</option>
            <option value="housing">Housing</option>
            <option value="utilities">Utilities</option>
            <option value="grocery">Grocery</option>
            <option value="transportation">Transportation</option>
            <option value="clothing">Clothing</option>
            <option value="entertainment">Entertainment</option>
            <option value="other">Other</option>
        </select>
    </div>
  )
}

export default Filter;