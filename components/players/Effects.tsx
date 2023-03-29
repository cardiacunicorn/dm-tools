import styles from '../../styles/Players.module.scss'
import Tag from '../Tag';

const Effects = ({ effects }) => {

    var advantage_list;
    if (effects.advantage.length > 0) {
        advantage_list = effects.advantage.map((element) => {
            return <Tag name={element} symbol={'Advantage'} color={'green'} />
        })
    }

    var disadvantage_list;
    if (effects.disadvantage.length > 0) {
        disadvantage_list = effects.disadvantage.map((element) => {
            return <Tag name={element} symbol={'Disadvantage'} color={'red'} />
        })
    }

    var resistance_list;
    if (effects.resistances.length > 0) {
        resistance_list = effects.resistances.map((element) => {
            return <Tag name={element} symbol={'Resistance'} color={'blue'} />
        })
    }

    var vulnerabilities_list;
    if (effects.vulnerabilities.length > 0) {
        vulnerabilities_list = effects.vulnerabilities.map((element) => {
            return <Tag name={element} symbol={'Vulnerability'} color={'red'} />
        })
    }

    var immunities_list;
    if (effects.immunities.length > 0) {
        immunities_list = effects.immunities.map((element) => {
            return <Tag name={element} symbol={'Immunity'} color={'green'} />
        })
    }

    return (
        <div className={styles.effects_section}>
            <h3>Advantages & Disadvantages</h3>
            <div className={styles.vantages}>
                <div className={styles.advantages}>
                    <div className={styles.tags_list}>
                        {advantage_list}
                    </div>
                </div>
                <div className={styles.disadvantages}>
                    <div className={styles.tags_list}>
                        {disadvantage_list}
                    </div>
                </div>
            </div>
            <h3>Resist, Immun. & Vuln.</h3>
            <div className={styles.multipliers}>
                <div className={styles.resistances}>
                    <div className={styles.tags_list}>
                        {resistance_list}
                    </div>
                </div>
                <div className={styles.vulnerabilities}>
                    <div className={styles.tags_list}>
                        {vulnerabilities_list}
                    </div>
                </div>
                <div className={styles.immunities}>
                    <div className={styles.tags_list}>
                        {immunities_list}
                    </div>
                </div>
            </div>
            <div className={styles.conditions_section}>
                <h3>Active Conditions</h3>
                <div className={styles.conditions}>
                    <Tag name={'Add'} symbol={'Add'} color={'grey'}/>
                </div>
            </div>
        </div>
    )
}

export default Effects