import { useState } from 'react'
import Form from '../Form/Form'
import styles from './FormModal.module.css'

const FormModal = ({ closeExpenseForm, setExpenses }) => {
    return (
        <div className={styles.formModal}>
            <Form closeExpenseForm={ closeExpenseForm } setExpenses={ setExpenses } />
        </div>
    )
}

export default FormModal;