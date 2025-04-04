import { useState } from 'react';
import styles from './Form.module.css'

const Form = () => {
    const [errorMessages, setErrorMessages] = useState({});
    // validation
    const validateInput = (inputName, inputValue) => {
        let isValid = true;
        const errorsObj = { ...errorMessages };

        if (inputName === "title") {
            if (!inputValue.trim()) {
                errorsObj.title = "Please enter expense title"
                isValid = false;
            } else {
                errorsObj.title = "";
            }
        }

        if (inputName === "amount") {
            if (!inputValue.trim()) {
                errorsObj.amount = "Please enter expense amount"
                isValid = false;
            } else if (inputValue <= 0) {
                errorsObj.amount = "Amount must be more than 0"
                isValid = false;
            } else {
                errorsObj.amount = "";
            }
        }

        if (inputName === "date") {
            if (!inputValue) {
                errorsObj.date = "Please enter date for expense"
                isValid = false;
            } else {
                errorsObj.date = "";
            }
        }

        if (inputName === "category") {
            if (!inputValue) {
                errorsObj.category = "Please enter expense category"
                isValid = false;
            } else {
                errorsObj.category = "";
            }
        }
        setErrorMessages(errorsObj);
        isValid = true;
    }

    const handleChange = (e) => {

    }

    const handleValidation = (e) => {
        const { name, value } = e.target;
        validateInput(name, value);
    }

    const handleSubmit = (e) => {

    }

    return(
        <>
            <form className={styles.form}>
                <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="title">Title</label>
                    <input className={styles.formInput} type="text" name='title' id='title' placeholder='Enter title'  onBlur={handleValidation}/>
                    <p className={styles.formErrorMessage}>{errorMessages.title}</p>
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="amount">Amount</label>
                    <input className={styles.formInput} type="number" name='amount' id='amount' placeholder='Enter amount'  onBlur={handleValidation}/>
                    <p className={styles.formErrorMessage}>{errorMessages.amount}</p>
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="date">Date</label>
                    <input className={styles.formInput} type="date" name='date' id='date'  onBlur={handleValidation}/>
                    <p className={styles.formErrorMessage}>{errorMessages.date}</p>
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="category">Category</label>
                    <select className={styles.formSelect} name='category' id='category' onBlur={handleValidation}>
                        <option value="">Select category</option>
                        <option value="housing">Housing</option>
                        <option value="utilities">Utilities</option>
                        <option value="grocery">Grocery</option>
                        <option value="transportation">Transportation</option>
                        <option value="clothing">Clothing</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="other">Other</option>
                    </select>
                    <p className={styles.formErrorMessage}>{errorMessages.category}</p>
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