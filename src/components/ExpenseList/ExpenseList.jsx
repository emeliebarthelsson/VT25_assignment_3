import ExpenseItem from '../ExpenseItem/ExpenseItem';
import styles from './ExpenseList.module.css'

const ExpenseList = ({ expenses, setExpenses, setItemToEdit, openExpenseForm }) => {
    const handleDelete = (id) => {
        const updatedExpenses = expenses.filter(item => item.id !== id)
        localStorage.setItem("expenses", JSON.stringify(updatedExpenses))
        setExpenses(updatedExpenses)
    }

    return (
        <div className={styles.listContainer}>
            {expenses.length === 0 ? (
                <p className={styles.emptyMessage}>No expenses in this month</p>
            ) : (
                <ul className={styles.list}>
                    {expenses.map((item) => (
                        <ExpenseItem key={item.id} item={item} handleDelete={handleDelete} setItemToEdit={ setItemToEdit } openExpenseForm={ openExpenseForm } />
                    ))}
                </ul>
            )}
        </div>
    )
}

export default ExpenseList;