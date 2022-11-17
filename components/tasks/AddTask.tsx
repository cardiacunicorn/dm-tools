import { useState } from 'react'
import styles from '../../styles/Tasks.module.scss'
import Button from '../Button'

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [category, setCategory] = useState('General')
    const [status, setStatus] = useState('incomplete')

    const onSubmit = (e: Event) => {
        e.preventDefault()
        if(!text) {
            alert('Please add task text')
            return
        }
        onAdd({ text, category, status })
        setText('')
    }

    return (
        <form className={styles.add_form} onSubmit={onSubmit}>
            <div className={styles.text_input}>
                <input type="text" placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className={styles.select_input}>
                <select name="category" id="category" onChange={(e) => setCategory(e.target.value)}>
                    <option value="General">General</option>
                    <option value="Party View">Party View</option>
                    <option value="Encounter View">Encounter View</option>
                    <option value="Economics">Economics</option>
                    <option value="Maps">Maps</option>
                    <option value="Tools">Tools</option>
                    <option value="Organisation">Organisation</option>
                    <option value="Practical">Practical</option>
                    <option value="Custom Rules">Custom Rules</option>
                    <option value="Story">Story</option>
                    <option value="Hardcore">Hardcore</option>
                </select>
            </div>
            <div className={styles.select_input}>
                <select name="status" id="status" onChange={(e) => setStatus(e.target.value)}>
                    <option value="incomplete">Incomplete</option>
                    <option value="progressing">Progressing</option>
                    <option value="done">Done</option>
                    <option value="long-term">Long Term</option>
                </select>
            </div>
            <Button color={'green'} text={'Save'} type={'submit'} />
        </form>
    )
}

export default AddTask