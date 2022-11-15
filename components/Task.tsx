import styles from '../styles/Todo.module.scss'
import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onSetStatus }) => {
  return (
    <div
      className={`
        ${styles.task}
        ${task.status === 'done' ? styles.done : ''}
        ${task.status === 'incomplete' ? styles.incomplete : ''}
        ${task.status === 'progressing' ? styles.progressing : ''}`}
      id={task.id}
      onClick={() => onSetStatus(task.id)}>
        {task.text}
        {/* <label className={styles.label}>
            {task.text}
            <input type="checkbox" checked={task.done} />
            <span className={styles.checkmark}></span>
        </label> */}
        <FaTimes style={{ color: 'red', cursor: 'pointer' }} onDoubleClick={() => onDelete(task.id)} />
    </div>
  )
}

export default Task