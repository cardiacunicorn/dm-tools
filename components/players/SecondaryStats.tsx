import styles from '../../styles/Players.module.scss'

const SecondaryStats = ({ spellsave, passive_perception, speed }) => {

    return (
        <div className={styles.secondary_stats}>
            <h3>Spell DC</h3>
            <div className={styles.spellsave}>
                {spellsave}
            </div>
            <h3>Pass. Per.</h3>
            <div className={styles.passive_perception}>
                {passive_perception}
            </div>
            <h3>Speed</h3>
            <div className={styles.speed}>
                {speed}
            </div>
        </div>
    )
}

export default SecondaryStats