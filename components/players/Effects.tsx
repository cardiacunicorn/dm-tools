import styles from '../../styles/Players.module.scss'
import Tag from '../Tag';

const Effects = ({ effects }) => {

    var advantage_heading;
    var advantage_list;
    if (effects.advantage.length > 0) {
        advantage_heading = <h3>Advantages</h3>
        advantage_list = effects.advantage.map((element) => {
            return <Tag name={element} symbol={'Advantage'} />
        })
    }

    var disadvantage_heading;
    var disadvantage_list;
    if (effects.disadvantage.length > 0) {
        disadvantage_heading = <h3>Disdvantages</h3>
        disadvantage_list = effects.disadvantage.map((element) => {
            return <Tag name={element} symbol={'Disadvantage'} />
        })
    }

    var resistance_heading;
    var resistance_list;
    if (effects.resistances.length > 0) {
        resistance_heading = <h3>Resistances</h3>
        resistance_list = effects.resistances.map((element) => {
            return <Tag name={element} symbol={'Resistance'} />
        })
    }

    var vulnerabilities_heading;
    var vulnerabilities_list;
    if (effects.vulnerabilities.length > 0) {
        vulnerabilities_heading = <h3>Vulnerabilities</h3>
        vulnerabilities_list = effects.vulnerabilities.map((element) => {
            return <Tag name={element} symbol={'Vulnerability'} />
        })
    }

    var immunities_heading;
    var immunities_list;
    if (effects.immunities.length > 0) {
        immunities_heading = <h3>Immunities</h3>
        immunities_list = effects.immunities.map((element) => {
            return <Tag name={element} symbol={'Immunity'} />
        })
    }

    return (
        <div className={styles.effects_section}>
            <div className={styles.vantages}>
                <div className={styles.advantages}>
                    {advantage_heading}
                    <div className={styles.tags_list}>
                        {advantage_list}
                    </div>
                </div>
                <div className={styles.disadvantages}>
                    {disadvantage_heading}
                    <div className={styles.tags_list}>
                        {disadvantage_list}
                    </div>
                </div>
            </div>
            <div className={styles.multipliers}>
                <div className={styles.resistances}>
                    {resistance_heading}
                    <div className={styles.tags_list}>
                        {resistance_list}
                    </div>
                </div>
                <div className={styles.vulnerabilities}>
                    {vulnerabilities_heading}
                    <div className={styles.tags_list}>
                        {vulnerabilities_list}
                    </div>
                </div>
                <div className={styles.immunities}>
                    {immunities_heading}
                    <div className={styles.tags_list}>
                        {immunities_list}
                    </div>
                </div>
            </div>
            <div className={styles.conditions_section}>
                <h3>Conditions</h3>
                <div className={styles.conditions}>

                </div>
            </div>
        </div>
    )
}

export default Effects