import styles from '../../styles/Players.module.scss'
import AttacksSection from './AttacksSection';
import SpellsSection from './SpellsSection';


const FirepowerSection = ({ pb, attributes, attacks, spellcasting, type }) => {

    var spellSection;
    var attacksSection;
    if (type == 'caster') {
        attacksSection = (
            <div className={styles.attacks_section}>
                <h3>Attacks & Cantrips</h3>
                <AttacksSection pb={pb} attributes={attributes} attacks={attacks} />
            </div>
        )
        spellSection = (
            <div className={styles.spells_section}>
                <h3>Spells</h3>
                <SpellsSection pb={pb} attributes={attributes} spellcasting={spellcasting} />
            </div>
        )
    } else if (type == 'hybrid-caster') {
        attacksSection = (
            <div className={styles.attacks_section}>
                <h3>Attacks & Cantrips</h3>
                <AttacksSection pb={pb} attributes={attributes} attacks={attacks} />
            </div>
        )
        spellSection = (
            <div className={styles.spells_section}>
                <h3>Spells</h3>
                <SpellsSection pb={pb} attributes={attributes} spellcasting={spellcasting} />
            </div>
        )
    } else if (type == 'martial') {
        attacksSection = (
            <div className={styles.attacks_section}>
                <h3>Attacks</h3>
                <AttacksSection pb={pb} attributes={attributes} attacks={attacks} />
            </div>
        )
    }

    return (
        <div className={styles.firepower_section}>
            <div>{attacksSection}</div>
            <div>{spellSection}</div>
        </div>
    )
}

export default FirepowerSection