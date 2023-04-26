import styles from '../../styles/Players.module.scss'
import SpellLevel from './SpellLevel'

const SpellsSection = ({ spellcasting }) => {

    return (
        <div className={styles.spellcasting}>
            <h3>Spellcasting</h3>
            <div className={styles.spellslots}>
                {spellcasting.slots.map((spellLevel) => {
                    return <SpellLevel spellLevel={spellLevel} />
                })}
            </div>
        </div>
    )
}

export default SpellsSection