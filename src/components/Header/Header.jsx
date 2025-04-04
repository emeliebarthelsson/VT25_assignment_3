import styles from './Header.module.css'

const Header = () => {
    return(
        <>
            <header className={styles.header}>
                <h1 className={styles.headerTitle}>Expense Tracker</h1>
                <div>
                    <button className='primary-button'>Add expense</button>
                </div>
            </header>
        </>
    )
}

export default Header;