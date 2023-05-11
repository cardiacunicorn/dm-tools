import styles from '../../styles/Players.module.scss'
import SpellLevelDisplay from './SpellLevel'

const SpellsSection = ({ pb, attributes, spellcasting }) => {

    console.log(spellcasting)

    var featuredSpells: JSX.Element = <></>;
    if (spellcasting.spells) {
        featuredSpells = spellcasting.spells.map((spell) => {
            return (
                <div>{spell.name}</div>
            )
        })
    }

    return (
        <div className={styles.spellcasting}>
            <div className={styles.spells}>
                {featuredSpells}
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