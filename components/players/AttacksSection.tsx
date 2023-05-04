import styles from '../../styles/Players.module.scss'
import Attack from './Attack'

const AttacksSection = ({ pb, attributes, attacks }) => {

    // const trainingSkills = Object.entries(proficiencies.skills).filter(([key, value]) => value == 1);

    return (
        <div className={styles.attacks_section}>
            <div className={styles.attacks}>
                {attacks.map((attack) => {

                    if (attack.attribute) {
                        var ab;
                        Object.entries(attributes).map(([key, val]) => {
                            if(key == attack.attribute) {
                                ab = val
                            }
                    })
                        console.log(ab)
                    }

                    return <Attack key={attack.name} pb={pb} ab={ab} attack={attack} />
                })}
            </div>
        </div>
    )
}

export default AttacksSection