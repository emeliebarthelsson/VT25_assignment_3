import styles from './Header.module.css'

const Header = ({ openExpenseForm, setItemToEdit }) => {
    return(
        <>
            <header className={styles.header}>
                <h1 className={styles.headerTitle}>Expense Tracker</h1>
                <div>
                    <button className='primary-button' onClick={() => {
                            setItemToEdit(null)
                            openExpenseForm()
                        }}
                    >Add expense</button>
                </div>
            </header>
        </>
    )
}

export default Header;