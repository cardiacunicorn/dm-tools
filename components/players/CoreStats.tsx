import styles from '../../styles/Players.module.scss'

const CoreStats = ({ hp, ac }) => {

    return (
        <div className={styles.core_stats}>
            <div className={styles.health}>
                <div className={styles.health_pool}>
                    <div className={styles.hp}>
                        <img className={styles.number_icon} src="images/icons/heart-red.png" alt="HP" />
                        <div className={styles.hp_current}>{hp.current}</div>
                    </div>
                    <div className={styles.pool_modifiers}>
                        <div className={styles.temp}>+ {hp.temp}</div>
                        <div className={styles.max}><span>MAX:&nbsp;</span>{hp.current_max}</div>
                    </div>
                </div>
            </div>
            <div className={styles.armor}>
                <div className={styles.ac}>
                    <img className={styles.ac_shield} src="images/icons/shield.png" alt="Armor" />
                    <div className={styles.ac_current}>{ac.current}</div>
                </div>
                <div className={styles.armor_note}>{ac.note}</div>
            </div>
        </div>
    )
}

export default CoreStats