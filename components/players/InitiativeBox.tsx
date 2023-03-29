import styles from '../../styles/Players.module.scss'

const InitiativeBox = ({ initiative }) => {

    return (
        <div className={styles.initiative_box}>
            <h3>Init</h3>
            <div className={styles.current_init}>{initiative.current}</div>
        </div>
    )
}

export default InitiativeBox