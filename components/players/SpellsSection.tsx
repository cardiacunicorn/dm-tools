import styles from '../../styles/Players.module.scss'
import SpellLevelDisplay from './SpellLevel'

const SpellsSection = ({ pb, spellcasting }) => {

    return (
        <div className={styles.spellcasting}>
            <div className={styles.key_spells}>

            </div>
            <div className={styles.spell_levels}>
                {spellcasting.slots.map((spellLevel) => {
                    return <SpellLevelDisplay key={spellLevel.level} spellLevel={spellLevel} />
                })}
            </div>
        </div>
    )
}

export default SpellsSection