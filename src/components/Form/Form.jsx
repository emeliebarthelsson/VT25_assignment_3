import { useEffect, useState } from 'react';
import styles from './Form.module.css'
import { v4 as uuidv4 } from 'uuid';

const Form = ({ closeExpenseForm, setExpenses }) => {
    const [errorMessages, setErrorMessages] = useState({});
    const [formData, setFormData] = useState({
        title: "",
        amount: "", 
        date: "", 
        category: ""
    });

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
        const { name, value } = e.target;
        setFormData(prev => ({...prev, [name]: value}))
    }

    const handleValidation = (e) => {
        const { name, value } = e.target;
        validateInput(name, value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const hasEmptyFields = Object.values(formData).some(value => !value.trim());
        const hasErrors = Object.values(errorMessages).some(message => message !== "");
        if (hasEmptyFields || hasErrors) return;

        // convert date to ISO 8601 format
        const isoDate = new Date(formData.date).toISOString();

        const newExpense = {
            id: uuidv4(),
            ...formData,
            date: isoDate
        }

        const existingExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
        const updatedExpenses = [...existingExpenses, newExpense];
        localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
        setExpenses(updatedExpenses);

        // clear form
        setFormData({
            title: "",
            amount: "",
            date: "",
            category: ""
        })

        closeExpenseForm();
    }

    return(
        <div className={styles.formContainer}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="title">Title</label>
                    <input className={styles.formInput} type="text" name='title' id='title' placeholder='Enter title' onChange={handleChange} onBlur={handleValidation} value={formData.title}/>
                    <p className={styles.formErrorMessage}>{errorMessages.title}</p>
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="amount">Amount</label>
                    <input className={styles.formInput} type="number" name='amount' id='amount' placeholder='Enter amount' onChange={handleChange} onBlur={handleValidation} value={formData.amount}/>
                    <p className={styles.formErrorMessage}>{errorMessages.amount}</p>
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="date">Date</label>
                    <input className={styles.formInput} type="date" name='date' id='date' onChange={handleChange} onBlur={handleValidation} value={formData.date}/>
                    <p className={styles.formErrorMessage}>{errorMessages.date}</p>
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="category">Category</label>
                    <select className={styles.formSelect} name='category' id='category' onChange={handleChange} onBlur={handleValidation} value={formData.category}>
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
                    <button type='button' className='secondary-button' onClick={closeExpenseForm}>Cancel</button>
                    <button type='submit' className='primary-button'>Add</button>
                </div>
            </form>
        </div>
    )
}

export default Form;