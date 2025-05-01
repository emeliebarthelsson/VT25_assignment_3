import ExpenseList from '../ExpenseList/ExpenseList';
import styles from './Main.module.css'

const Main = ({ expenses }) => {
    return(
        <>
            <main className={styles.main}>
                <section className={styles.main__section}>
                    <ExpenseList expenses={ expenses } />
                </section>
            </main>
        </>
    )
}

export default Main;