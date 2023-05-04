import styles from '../../styles/Players.module.scss'
import AttacksSection from './AttacksSection';
import SpellsSection from './SpellsSection';


const FirepowerSection = ({ pb, attributes, attacks, spellcasting, type }) => {

    var spellSection;
    var attacksSection;
    if (type == 'caster') {
        attacksSection = (
            <>
                <h3>Attacks & Cantrips</h3>
                <AttacksSection pb={pb} attributes={attributes} attacks={attacks} />
            </>
        )
        spellSection = (
            <>
                <h3>Spells</h3>
                <SpellsSection pb={pb} attributes={attributes} spellcasting={spellcasting} />
            </>
        )
    } else if (type == 'hybrid-caster') {
        attacksSection = (
            <>
                <h3>Attacks & Cantrips</h3>
                <AttacksSection pb={pb} attributes={attributes} attacks={attacks} />
            </>
        )
        spellSection = (
            <>
                <h3>Spells</h3>
                <SpellsSection pb={pb} attributes={attributes} spellcasting={spellcasting} />
            </>
        )
    } else if (type == 'martial') {
        attacksSection = (
            <>
                <h3>Attacks</h3>
                <AttacksSection pb={pb} attributes={attributes} attacks={attacks} />
            </>
        )
    }

    return (
        <div className={styles.firepower}>
            <div>{attacksSection}</div>
            <div>{spellSection}</div>
        </div>
    )
}

export default FirepowerSection