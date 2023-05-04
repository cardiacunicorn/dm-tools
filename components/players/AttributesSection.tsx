import styles from '../../styles/Players.module.scss'

const AttributesSection = ({ attributes, proficiencies }) => {

    const expertSkills = Object.entries(proficiencies.skills).filter(([key, value]) => value > 1);
    const proficientSkills = Object.entries(proficiencies.skills).filter(([key, value]) => value == 1);
    const trainingSkills = Object.entries(proficiencies.skills).filter(([key, value]) => value == 0.5);
    
    const saves = Object.entries(proficiencies.saves);

    return (
        <div className={styles.attributes}>
            <div className={styles.attribute_names}>
                <div>STR</div>
                <div>DEX</div>
                <div>CON</div>
                <div>INT</div>
                <div>WIS</div>
                <div>CHA</div>
            </div>
            <div className={styles.attribute_scores}>
                <div className={styles.strength}>{attributes.str}</div>
                <div className={styles.dexterity}>{attributes.dex}</div>
                <div className={styles.constitution}>{attributes.con}</div>
                <div className={styles.intelligence}>{attributes.int}</div>
                <div className={styles.wisdom}>{attributes.wis}</div>
                <div className={styles.charisma}>{attributes.cha}</div>
            </div>
            <div className={styles.saves}>
                {saves.map(([atr, prof]) => {
                    let proficient;
                    if (prof == 1) {
                        proficient = styles.proficient
                    }
                    return (
                        <div className={`${styles.save} ${proficient}`}>Save</div>
                    )
                })}
            </div>
            <h3>Skill Proficiencies</h3>
            <div className={styles.skill_list}>
                {expertSkills.map(([skill, value]) => (
                    <div key={skill} className={styles.expert_skill}>{skill}</div>
                ))}
            </div>
            <div className={styles.skill_list}>
                {proficientSkills.map(([skill, value]) => (
                    <div key={skill} className={styles.proficient_skill}>{skill}</div>
                ))}
            </div>
            <div className={styles.skill_list}>
                {trainingSkills.map(([skill, value]) => (
                    <div key={skill} className={styles.half_proficient_skill}>{skill}</div>
                ))}
            </div>
        </div>
    )
}

export default AttributesSection