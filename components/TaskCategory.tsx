import Task from './Task'
import styles from '../styles/Todo.module.scss'
import { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'

const TaskCategory = ({ tasks, category, onDelete, onSetStatus }) => {
    const [showList, setShowList] = useState(true)
    const filtered = tasks.filter((task) => {
        return task.category === category;
    });

    let showCategory = true
    function toggleCategory() {
        console.log(showCategory)
        showCategory = !showCategory
    }

    return (
        <>
            <h3 className={`${styles.task_category} ${showList ? '' : 'hide'}`}>{category} <FaChevronDown onClick={() => setShowList(!showList)} /></h3>
            <hr />
            {filtered.map((task: { id: number, text: string; status: string, category: string }) => (
                <Task key={task.id} task={task} onDelete={onDelete} onSetStatus={onSetStatus} />
            ))}
        </>
    )
}

export default TaskCategory