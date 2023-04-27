import styles from '../../styles/Players.module.scss'
import Attack from './Attack'

const AttacksSection = ({ attacks }) => {

    return (
        <div className={styles.attacks_section}>
            <div className={styles.attacks}>
                {attacks.map((attack) => {
                    return <Attack attack={attack} />
                })}
            </div>
        </div>
    )
}

export default AttacksSection