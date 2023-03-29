import styles from '../../styles/Players.module.scss'
import CoreStats from './CoreStats'
import Feature from './Feature'
import Effects from './Effects'
import SecondaryStats from './SecondaryStats'
import PlayerProfile from './PlayerProfile'
import InitiativeBox from './InitiativeBox'

const Player = ({ player }) => {

    const expertSkills = Object.entries(player.proficiencies.skills).filter(([key, value]) => value > 1);
    const proficientSkills = Object.entries(player.proficiencies.skills).filter(([key, value]) => value == 1);
    const trainingSkills = Object.entries(player.proficiencies.skills).filter(([key, value]) => value == 0.5);

    const resistances = Object.entries(player.effects.resistances);
    var resistances_section = '';
    if (resistances.length > 0) {
        resistances_section = 'Resistances';
        resistances_section += resistances.map(([key,value]) => {
            return <div>value</div>
        })
    }

    return (
        <div className={styles.player} key={player.name}>
            <InitiativeBox initiative={player.initiative} />
            <PlayerProfile name={player.name} race={player.race} classes={player.classes} colour={player.colour} image_path={player.image_path} />
            <CoreStats hp={player.hp} ac={player.ac} />
            <SecondaryStats spellsave={player.spellsave} passive_perception={player.passive_perception} speed={player.speed} />
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
                    <div className={styles.strength}>{player.attributes.str}</div>
                    <div className={styles.dexterity}>{player.attributes.dex}</div>
                    <div className={styles.constitution}>{player.attributes.con}</div>
                    <div className={styles.intelligence}>{player.attributes.int}</div>
                    <div className={styles.wisdom}>{player.attributes.wis}</div>
                    <div className={styles.charisma}>{player.attributes.cha}</div>
                </div>
                <div className={styles.saves}>
                    <div className={styles.save}>Save</div>
                    <div className={styles.save}>Save</div>
                    <div className={styles.save}>Save</div>
                    <div className={styles.save}>Save</div>
                    <div className={styles.save}>Save</div>
                    <div className={styles.save}>Save</div>
                </div>
                <h3>Skill Proficiencies</h3>
                <div className={styles.skill_list}>
                    {expertSkills.map(([skill, value]) => (
                        <div className={styles.expert_skill}>{skill}</div>
                    ))}
                </div>
                <div className={styles.skill_list}>
                    {proficientSkills.map(([skill, value]) => (
                        <div className={styles.proficient_skill}>{skill}</div>
                    ))}
                </div>
                <div className={styles.skill_list}>
                    {trainingSkills.map(([skill, value]) => (
                        <div className={styles.half_proficient_skill}>{skill}</div>
                    ))}
                </div>
            </div>
            <div className={styles.firepower}>
                <h3>Firepower</h3>
                <div className={styles.firepower_section}>
                    
                </div>
            </div>
            <div className={styles.features_section}>
                <h3>Features</h3>
                <div className={styles.features_list}>
                    {player.features.map((feature) => {
                        return <Feature feature={feature} key={player.name + '_' + feature.name} />
                    })}
                </div>
            </div>
            <Effects effects={player.effects} />
        </div>
    )
}

export default Player