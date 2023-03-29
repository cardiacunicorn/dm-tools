import styles from '../../styles/Players.module.scss'
import Feature from './Feature'

const FirepowerSection = ({ firepower, type }) => {

    var customSection;
    if (type == 'caster') {
        customSection = 'Spells go here';
    } else if (type == 'hybrid-caster') {
        customSection = 'Spells and attacks go here';
    } else if (type == 'martial') {
        customSection = 'Attacks go here';
    }

    return (
        <div className={styles.firepower}>
            <h3>Core Actions</h3>
            <div>{customSection}</div>
            <div className={styles.firepower_section}>
                {firepower.map((item) => {
                    return <Feature feature={item} key={item.name} />
                })}
            </div>
        </div>
    )
}

export default FirepowerSection