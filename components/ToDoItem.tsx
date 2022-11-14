import styles from '../styles/Todo.module.scss'

const ToDoItem = ( props ) => {
  return (
    <label className={styles.label}>
        {props.item}
        <input type="checkbox" />
        <span className={styles.checkmark}></span>
    </label>
  )
}

export default ToDoItem