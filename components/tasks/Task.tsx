import styles from '../../styles/Tasks.module.scss'
import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onSetStatus }) => {
  return (
    <div
      className={`
        ${styles.task}
        ${task.status === 'done' ? styles.done : ''}
        ${task.status === 'incomplete' ? styles.incomplete : ''}
        ${task.status === 'progressing' ? styles.progressing : ''}`}
      id={task.id}>
        <div className={styles.task_text} onClick={() => onSetStatus(task.id)}>{task.text}</div>
        <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(task.id)} />
    </div>
  )
}

export default Task