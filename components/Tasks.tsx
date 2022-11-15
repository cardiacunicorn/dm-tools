import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react'
import Task from './Task'
import styles from '../styles/Todo.module.scss'

const Tasks = ({ tasks }) => {
  return (
    <>
        {tasks.map((task: { id: number, text: string; done: boolean }) => (
            <Task key={task.id} task={task} />
        ))}
    </>
  )
}

export default Tasks