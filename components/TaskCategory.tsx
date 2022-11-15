import Task from './Task'
import styles from '../styles/Todo.module.scss'
import { FaChevronDown } from 'react-icons/fa'

const TaskCategory = ({ tasks, category, onDelete, onSetStatus }) => {

    const filtered = tasks.filter((task) => {
        return task.category === category;
    });

    return (
        <>
            <h3 className={styles.task_category}>{category} <FaChevronDown /></h3>
            <hr />
            {filtered.map((task: { id: number, text: string; status: string, category: string }) => (
                <Task key={task.id} task={task} onDelete={onDelete} onSetStatus={onSetStatus} />
            ))}
        </>
    )
}

export default TaskCategory