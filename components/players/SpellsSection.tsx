import styles from '../../styles/Players.module.scss'
import Feature from './Feature'

const SpellsSection = ({ spells }) => {

    // var customSection;
    // if (type == 'caster') {
    //     customSection = 'Spells go here';
    // } else if (type == 'hybrid-caster') {
    //     customSection = 'Spells and attacks go here';
    // } else if (type == 'martial') {
    //     customSection = 'Attacks go here';
    // }

    return (
        <div className={styles.spellcasting}>
            <h3>Spellcasting</h3>
            {/* <div className={styles.firepower_section}>
                {firepower.map((item) => {
                    return <Feature feature={item} key={item.name} />
                })}
            </div> */}
        </div>
    )
}

export default SpellsSection