import Task from './Task'
import styles from '../../styles/Tasks.module.scss'

const TaskCategory = ({ tasks, category, onDelete, onSetStatus }) => {
    const filtered = tasks.filter((task) => {
        return task.category === category;
    });

    return (
        <div className={styles.category}>
            <h3 className={styles.category_title}>{category}</h3>
            <hr />
            <div className={styles.category_list}>
                {filtered.map((task: { id: number, text: string; status: string, category: string }) => (
                    <Task key={task.id} task={task} onDelete={onDelete} onSetStatus={onSetStatus} />
                ))}
            </div>
        </div>
    )
}

export default TaskCategory