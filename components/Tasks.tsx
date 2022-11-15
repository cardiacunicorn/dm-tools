import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react'
import Task from './Task'
import styles from '../styles/Todo.module.scss'

const Tasks = ({ tasks, onDelete }) => {
  return (
    <>
        {tasks.map((task: { id: number, text: string; done: boolean }) => (
            <Task key={task.id} task={task} onDelete={onDelete} />
        ))}
    </>
  )
}

export default Tasks