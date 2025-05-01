import { useEffect, useState } from 'react';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import styles from './ExpenseList.module.css'

const ExpenseList = ({ expenses }) => {
    return (
        <div className={styles.listContainer}>
            <ul className={styles.list}>
                {expenses.map((item) => (
                    <ExpenseItem key={item.id} item={item}/>
                ))}
            </ul>
        </div>
    )
}

export default ExpenseList;