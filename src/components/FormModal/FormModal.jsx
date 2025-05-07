import Form from '../Form/Form'
import styles from './FormModal.module.css'

const FormModal = ({ closeExpenseForm, setExpenses, itemToEdit }) => {
    return (
        <div className={styles.formModal}>
            <Form closeExpenseForm={ closeExpenseForm } setExpenses={ setExpenses } itemToEdit={ itemToEdit } />
        </div>
    )
}

export default FormModal;