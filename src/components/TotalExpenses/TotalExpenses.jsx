import styles from './TotalExpenses.module.css'

const TotalExpenses = ({ expenses }) => {
    const total = expenses.reduce((sum, item) => sum + Number(item.amount), 0);
    
    return (
        <div className={styles.summaryContainer}>
            <h2>Total Expenses:</h2>
            <p>{total} kr</p>
        </div>
    )
}

export default TotalExpenses;