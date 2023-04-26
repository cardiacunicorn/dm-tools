import styles from '../../styles/Players.module.scss'

export interface SecondaryStats {
    spellsave?: number,
    passive_perception: number,
    speed: number
}

const SecondaryStats = ({ ...props }) => {

    return (
        <div className={styles.secondary_stats}>
            <h3>Spell DC</h3>
            <div className={styles.spellsave}>
                {props.spellsave}
            </div>
            <h3>Pass. Per.</h3>
            <div className={styles.passive_perception}>
                {props.passive_perception}
            </div>
            <h3>Speed</h3>
            <div className={styles.speed}>
                {props.speed}
            </div>
        </div>
    )
}

export default SecondaryStats