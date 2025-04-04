import styles from './Form.module.css'

const Form = () => {
    return(
        <>
            <form className={styles.form}>
                <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="title">Title</label>
                    <input className={styles.formInput} type="text" name='title' id='title' />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="amount">Amount</label>
                    <input className={styles.formInput} type="number" name='amount' id='amount' />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="date">Date</label>
                    <input className={styles.formInput} type="date" name='date' id='date' />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="category">Category</label>
                    <select className={styles.formSelect} name='category' id='category'>
                        <option value="">Select category</option>
                        <option value="housing">Housing</option>
                        <option value="utilities">Utilities</option>
                        <option value="grocery">Grocery</option>
                        <option value="transportation">Transportation</option>
                        <option value="clothing">Clothing</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className={styles.formButtonContainer}>
                    <button type='button' className='secondary-button'>Cancel</button>
                    <button type='submit' className='primary-button'>Add</button>
                </div>
            </form>
        </>
    )
}

export default Form;