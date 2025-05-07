import styles from './DeleteModal.module.css'

const DeleteModal = ({ onCancel, onConfirm }) => {
  return (
    <div className={styles.deleteModal}>
      <div className={styles.deleteContainer}>
        <p className={styles.deleteText}>Are you sure you want to delete this expense?</p>
        <div className={styles.buttonContainer}>
          <button onClick={onCancel} className='secondary-button'>Cancel</button>
          <button onClick={onConfirm} className='primary-button'>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default DeleteModal;