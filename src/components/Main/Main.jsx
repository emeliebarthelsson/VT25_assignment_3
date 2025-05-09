import ExpenseList from '../ExpenseList/ExpenseList';
import Filter from '../Filter/Filter';
import TotalExpenses from '../TotalExpenses/TotalExpenses';
import styles from './Main.module.css'

const Main = ({ expenses, setExpenses, setItemToEdit, openExpenseForm, filterMonth, setFilterMonth }) => {
    return(
        <>
            <main className={styles.main}>
                <section className={styles.summary}>
                    <TotalExpenses expenses={ expenses } />
                </section>
                <section className={styles.filter}>
                    <Filter filterMonth={ filterMonth } setFilterMonth={ setFilterMonth }/>
                </section>
                <section className={styles.expenses}>
                    <ExpenseList expenses={ expenses } setExpenses={ setExpenses } setItemToEdit={ setItemToEdit } openExpenseForm={ openExpenseForm } />
                </section>
            </main>
        </>
    )
}

export default Main;