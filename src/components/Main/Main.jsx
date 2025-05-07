import ExpenseList from '../ExpenseList/ExpenseList';
import Filter from '../Filter/Filter';
import TotalExpenses from '../TotalExpenses/TotalExpenses';
import styles from './Main.module.css'

const Main = ({ expenses, setExpenses, setItemToEdit, openExpenseForm, filterCategory, setFilterCategory }) => {
    return(
        <>
            <main className={styles.main}>
                <section className={styles.summary}>
                    <TotalExpenses expenses={ expenses } />
                </section>
                <section className={styles.filter}>
                    <Filter filterCategory={ filterCategory } setFilterCategory={ setFilterCategory }/>
                </section>
                <section className={styles.expenses}>
                    <ExpenseList expenses={ expenses } setExpenses={ setExpenses } setItemToEdit={ setItemToEdit } openExpenseForm={ openExpenseForm } />
                </section>
            </main>
        </>
    )
}

export default Main;