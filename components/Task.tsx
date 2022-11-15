import styles from '../styles/Todo.module.scss'
import { FaTimes } from 'react-icons/fa'

const Task = ({ task }) => {
  return (
    <div className={styles.task} id={task.id}>
        <label className={styles.label}>
            {task.text}
            <input type="checkbox" checked={task.done} />
            <span className={styles.checkmark}></span>
        </label>
        <FaTimes style={{ color: 'red', cursor: 'pointer' }} />
    </div>
  )
}

export default Task