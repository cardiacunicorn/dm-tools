import styles from '../../styles/Players.module.scss'

const Player = ({ player }) => {

    const expertSkills = Object.entries(player.proficiencies.skills).filter(([key, value]) => value > 1);
    const proficientSkills = Object.entries(player.proficiencies.skills).filter(([key, value]) => value == 1);
    const trainingSkills = Object.entries(player.proficiencies.skills).filter(([key, value]) => value == 0.5);

  return (
    <div className={styles.player}>
      {/* Must render exact line items, not an object */}
      <div className={styles.initiative_box}>
        <h3>Init</h3>
        <div className={styles.current_init}>XX</div>
      </div>
      <div className={styles.profile}>
        <img src={player.image_path} className={styles.profile_image} />
        <h1 className={styles.name} style={{color: player.colour}}>{player.name}</h1>
        <h3 className={styles.race} style={{color: player.colour}}>{player.race}</h3>
        <h3 className={styles.classes} style={{color: player.colour}}>{player.classes}</h3>
      </div>
      <div className={styles.core_stats}>
        <div className={styles.health}>
            <div className={styles.health_pool}>
                <div className={styles.hp}>
                    <img className={styles.number_icon} src="images/icons/heart-red.png" alt="HP" />
                    <div className={styles.hp_current}>{player.hp.current}</div>
                </div>
                <div className={styles.pool_modifiers}>
                    <div className={styles.temp}>+ {player.hp.temp}</div>
                    <div className={styles.max}><span>MAX:&nbsp;</span>{player.hp.current_max}</div>
                </div>
            </div>
        </div>
        <div className={styles.armor}>
            <div className={styles.ac}>
                <img className={styles.ac_shield} src="images/icons/shield.png" alt="Armor" />
                <div className={styles.ac_current}>{player.ac.current}</div>
            </div>
            <div className={styles.armor_note}>{player.ac.note}</div>
        </div>
      </div>
      <div className={styles.secondary_stats}>
        <h3>Spell DC</h3>
        <div className={styles.spellsave}>
            {player.spellsave}
        </div>
        <h3>Pass. Per.</h3>
        <div className={styles.passive_perception}>
            {player.passive_perception}
        </div>
        <h3>Speed</h3>
        <div className={styles.speed}>
            {player.speed}
        </div>
      </div>
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
      </div>
      <div className={styles.features_section}>
        <h3>Features</h3>
        <div className={styles.features_list}>
            {
                Object.keys(player.features).map((feature) => {
                    return (
                        <div>
                            <div>{feature}</div>
                        </div>
                        // Object.keys(feature).map((item, value)=>{
                        //     return (
                        //         <div>
                        //             <div>{value}</div>
                        //         </div>
                        //     )
                        // })
                    )
                })
            }
        </div>
      </div>
      <div className={styles.conditions}>
        <h3>Conditions</h3>
      </div>
    </div>
  )
}

export default Player