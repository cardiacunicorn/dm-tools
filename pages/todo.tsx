import styles from '../styles/Todo.module.scss'

export default function Todo() {
    return (
        <div>
            <h1>My To Do List</h1>
            <hr></hr>
            <div className={styles.list}>
                <label className={styles.label}>
                    Finish the NextJS Crash Course Video
                    <input type="checkbox" />
                    <span className={styles.checkmark}></span>
                </label>
                <label className={styles.label}>
                    Convert the About Page to a To Do list
                    <input type="checkbox" />
                    <span className={styles.checkmark}></span>
                </label>
            </div>
        </div>
    )
}