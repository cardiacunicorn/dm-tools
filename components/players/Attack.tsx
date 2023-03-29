import styles from '../../styles/Players.module.scss'

const Attack = ({ attack }) => {

  return (
      <div className={styles.attack} key={attack.name}>
        <div className={styles.attack_name + ' ' + attack.rarity}>
            {attack.name}
        </div>
        <div className={styles.hit}>
            Hit: {attack.attribute} {attack.hit_bonus == 0 ? '' : '+ '+(attack.proficiency+attack.hit_bonus)}
        </div>
        <div className={styles.damage}>
            Damage: {attack.attribute} {attack.damage_bonus == 0 ? '' : '+ '+(attack.damage_bonus)}
        </div>
      </div>
  )
}

export default Attack