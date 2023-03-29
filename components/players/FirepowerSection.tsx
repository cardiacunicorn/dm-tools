import styles from '../../styles/Players.module.scss'
import AttacksSection from './AttacksSection';
import Feature from './Feature'
import SpellsSection from './SpellsSection';


const FirepowerSection = ({ attacks, spells, type }) => {

    var spellSection;
    var martialSection;
    if (type == 'caster') {
        martialSection = <AttacksSection attacks={attacks} />
        spellSection = <SpellsSection spells={spells} />;
    } else if (type == 'hybrid-caster') {
        martialSection = <AttacksSection attacks={attacks} />
        spellSection = <SpellsSection spells={spells} />;
    } else if (type == 'martial') {
        martialSection = <AttacksSection attacks={attacks} />
    }

    return (
        <div className={styles.firepower}>
            <div>{martialSection}</div>
            <div>{spellSection}</div>
        </div>
    )
}

export default FirepowerSection