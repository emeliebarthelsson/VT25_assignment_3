import { useEffect, useState } from 'react';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import styles from './ExpenseList.module.css'

const ExpenseList = ({ expenses, setExpenses }) => {
    const handleDelete = (id) => {
        const updatedExpenses = expenses.filter(item => item.id !== id)
        localStorage.setItem("expenses", JSON.stringify(updatedExpenses))
        setExpenses(updatedExpenses)
    }

    return (
        <div className={styles.listContainer}>
            <ul className={styles.list}>
                {expenses.map((item) => (
                    <ExpenseItem key={item.id} item={item} handleDelete={handleDelete}/>
                ))}
            </ul>
        </div>
    )
}

export default ExpenseList;