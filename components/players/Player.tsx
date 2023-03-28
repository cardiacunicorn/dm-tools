import styles from '../../styles/Players.module.scss'

const Player = ({ player }) => {
  return (
    <div className={styles.player}>
      {/* Must render exact line items, not an object */}
      <div className={styles.profile}>
        <img src={player.image_path} className={styles.profile_image} />
        <h1 className={styles.name}>{player.name}</h1>
        <h3 className={styles.classes}>{player.classes}</h3>
      </div>
      <div className={styles.core_stats}>
        <div className={styles.health}>
            <div className={styles.current}>
                <span className={styles.hp}>{player.hp.current}</span>
                <span className={styles.temp}> +{player.hp.temp}</span></div>
            <div className={styles.max}>/{player.hp.current_max}</div>
        </div>
        <div className={styles.armor}>
            <div className={styles.ac}>{player.ac.current}</div>
            <div className={styles.armor_note}>Armor Note</div>
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
      </div>
    </div>
  )
}

export default Player