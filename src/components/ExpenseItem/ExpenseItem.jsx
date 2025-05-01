import styles from './ExpenseItem.module.css'

const ExpenseItem = ({ item }) => {
  return (
    <li className={styles.listItem}>
        <div className={styles.itemContentGroup}>
            <p className={styles.itemContentHeading}>Title:</p>
            <p className={styles.itemContentText}>{item.title}</p>
        </div>
        <div className={styles.itemContentGroup}>
            <p className={styles.itemContentHeading}>Amount:</p>
            <p className={styles.itemContentText}>{item.amount}</p>
        </div>
        <div className={styles.itemContentGroup}>
            <p className={styles.itemContentHeading}>Date:</p>
            <p className={styles.itemContentText}>{item.date}</p>
        </div>
        <div className={styles.itemContentGroup}>
            <p className={styles.itemContentHeading}>Category:</p>
            <p className={styles.itemContentText}>{item.category}</p>
        </div>
        <div className={styles.itemButtonContainer}>
            <button className='icon-button'>
                <img src="/src/assets/icons/delete_FILL0.svg" alt="Delete icon" />
            </button>
            <button className='icon-button'>
                <img src="/src/assets/icons/edit_FILL0.svg" alt="Edit icon" />
            </button>
        </div>
    </li>
  )
}

export default ExpenseItem;