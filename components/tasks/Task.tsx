import styles from '../../styles/Tasks.module.scss'
import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onSetStatus }) => {
  return (
    <div
      className={`
        ${styles.task}
        ${task.status === 'Complete' ? styles.done : ''}
        ${task.status === 'Not started' ? styles.incomplete : ''}
        ${task.status === 'In progress' ? styles.progressing : ''}`}
      id={task.id}>
        <div className={styles.task_text} onClick={() => onSetStatus(task.id)}>{task.text}</div>
        <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(task.id)} />
    </div>
  )
}

export default Task