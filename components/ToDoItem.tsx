import styles from '../styles/Todo.module.scss'

const ToDoItem = ({ item }) => {
  return (
    <label className={styles.label}>
        {item}
        <input type="checkbox" />
        <span className={styles.checkmark}></span>
    </label>
  )
}

export default ToDoItem