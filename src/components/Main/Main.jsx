import ExpenseList from '../ExpenseList/ExpenseList';
import TotalExpenses from '../TotalExpenses/TotalExpenses';
import styles from './Main.module.css'

const Main = ({ expenses }) => {
    return(
        <>
            <main className={styles.main}>
                <section className={styles.summary}>
                    <TotalExpenses expenses={ expenses } />
                </section>
                <section className={styles.expenses}>
                    <ExpenseList expenses={ expenses } />
                </section>
            </main>
        </>
    )
}

export default Main;