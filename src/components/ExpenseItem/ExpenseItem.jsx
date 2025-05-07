import { useState } from 'react';
import styles from './ExpenseItem.module.css'
import DeleteModal from '../DeleteModal/DeleteModal';

const ExpenseItem = ({ item, handleDelete, setItemToEdit, openExpenseForm }) => {
  const [displayDeleteModal, setDisplayDeleteModal] = useState(false);

  return (
    <li className={styles.listItem}>
        <div className={`${styles.itemContentGroup} ${styles.titleGroup}`}>
            <p className={styles.itemContentHeading}>Title:</p>
            <p className={styles.itemContentText}>{item.title}</p>
        </div>
        <div className={`${styles.itemContentGroup} ${styles.amountGroup}`}>
            <p className={styles.itemContentHeading}>Amount:</p>
            <p className={styles.itemContentText}>{item.amount}</p>
        </div>
        <div className={`${styles.itemContentGroup} ${styles.dateGroup}`}>
            <p className={styles.itemContentHeading}>Date:</p>
            <p className={styles.itemContentText}>{item.date.slice(0, 10)}</p>
        </div>
        <div className={`${styles.itemContentGroup} ${styles.categoryGroup}`}>
            <p className={styles.itemContentHeading}>Category:</p>
            <p className={styles.itemContentText}>{item.category}</p>
        </div>
        <div className={styles.itemButtonContainer}>
            <button className='icon-button' onClick={() => setDisplayDeleteModal(true)}>
                <img src="/assets/icons/delete_FILL0.svg" alt="Delete icon" />
            </button>
            {displayDeleteModal && (
                <DeleteModal
                    onCancel={() => setDisplayDeleteModal(false)}
                    onConfirm={() => handleDelete(item.id)}
                />
            )}
            <button className='icon-button' onClick={() => {
                setItemToEdit(item)
                openExpenseForm()
            }}>
                <img src="/assets/icons/edit_FILL0.svg" alt="Edit icon" />
            </button>
        </div>
    </li>
  )
}

export default ExpenseItem;