import { useEffect, useState } from 'react';
import styles from './Form.module.css'
import { v4 as uuidv4 } from 'uuid';

const Form = ({ closeExpenseForm, setExpenses, itemToEdit }) => {
    const [errorMessages, setErrorMessages] = useState({});
    const [formData, setFormData] = useState({
        title: "",
        amount: "", 
        date: "", 
        category: ""
    });
    const [formIsValid, setFormIsValid] = useState(true);
    const [isTyping, setIsTyping] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    // validation
    const validateInput = (inputName, inputValue) => {
        const errorsObj = { ...errorMessages };

        if (inputName === "title") {
            if (!inputValue.trim()) {
                errorsObj.title = "Please enter expense title"
            } else {
                errorsObj.title = "";
            }
        }

        if (inputName === "amount") {
            if (!inputValue.trim()) {
                errorsObj.amount = "Please enter expense amount"
            } else if (inputValue <= 0) {
                errorsObj.amount = "Amount must be more than 0"
            } else {
                errorsObj.amount = "";
            }
        }

        if (inputName === "date") {
            if (!inputValue) {
                errorsObj.date = "Please enter date for expense"
            } else {
                errorsObj.date = "";
            }
        }

        if (inputName === "category") {
            if (!inputValue) {
                errorsObj.category = "Please enter expense category"
            } else {
                errorsObj.category = "";
            }
        }
        setErrorMessages(errorsObj);
    }

    const handleChange = (e) => {
        setIsTyping(true);
        const { name, value } = e.target;
        setFormData(prev => ({...prev, [name]: value}))
    }

    const handleValidation = (e) => {
        const { name, value } = e.target;
        validateInput(name, value);
    }

    useEffect(() => {
        if (itemToEdit) {
            const { date, ...rest} = itemToEdit;
            const formattedDate = date.slice(0, 10);
            setFormData({...rest, date: formattedDate});
        } else {
            setFormData({
                title: "",
                amount: "",
                date: "",
                category: ""
            })
        }
    }, [itemToEdit])

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsTyping(false);

        const hasEmptyFields = Object.values(formData).some(value => !value.trim());
        const hasErrors = Object.values(errorMessages).some(value => value.trim());
        if (hasEmptyFields || hasErrors) {
            setFormIsValid(false);
            return;
        }

        setFormIsValid(true)
        
        // convert date to ISO 8601 format
        const isoDate = new Date(formData.date).toISOString();

        const existingExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
        let updatedExpenses;

        if (itemToEdit) {
            updatedExpenses = existingExpenses.map((expense) => (
                expense.id === itemToEdit.id ? {...itemToEdit, ...formData, date: isoDate} : expense
            ))
        } else {
            const newExpense = {
                id: uuidv4(),
                ...formData,
                date: isoDate
            }
            updatedExpenses = [...existingExpenses, newExpense];
        }

        localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
        setExpenses(updatedExpenses);

        if (itemToEdit) {
            setSuccessMessage("Edited successfully");
            setTimeout(() => {
                closeExpenseForm()
            }, 2000);
        } else {
            setSuccessMessage("Expense added successfully");
        }

        setTimeout(() => {
            setSuccessMessage("");
        }, 3000);

        // clear form
        setFormData({
            title: "",
            amount: "",
            date: "",
            category: ""
        })
    }

    return(
        <div className={styles.formContainer}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h2>{itemToEdit ? "Edit Expense" : "Add New Expense"}</h2>
                <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="title">Title</label>
                    <input className={styles.formInput} type="text" name='title' id='title' maxLength={50} placeholder='Enter title' onChange={handleChange} onBlur={handleValidation} value={formData.title}/>
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
                    {!formIsValid && !isTyping && <p className={styles.formErrorMessage}>Please fill out the form</p>}
                    {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
                    <button type='button' className='secondary-button' onClick={closeExpenseForm}>Cancel</button>
                    <button type='submit' className='primary-button'>{itemToEdit ? "Confirm" : "Add"}</button>
                </div>
            </form>
        </div>
    )
}

export default Form;