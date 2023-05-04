import styles from '../../styles/Players.module.scss'
import Attack from './Attack'

const AttacksSection = ({ pb, attacks }) => {

    return (
        <div className={styles.attacks_section}>
            <div className={styles.attacks}>
                {attacks.map((attack) => {
                    return <Attack key={attack.name} pb={pb} attack={attack} />
                })}
            </div>
        </div>
    )
}

export default AttacksSection