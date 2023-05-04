import styles from '../../styles/Players.module.scss'

const Attack = ({ pb, attack }) => {

  var hit = pb + attack.hit_bonus
  let hitSection: JSX.Element = <></>;
  if (hit > -5) {
    hitSection = (
      <div className={styles.hit}>
            Hit: {attack.attribute} {attack.hit_bonus == 0 ? '+ '+pb : '+ '+(pb+attack.hit_bonus)}
      </div>
    )
  }

  return (
      <div className={styles.attack} key={attack.name}>
        <div className={styles.attack_name + ' ' + attack.rarity}>
            {attack.name}:&nbsp;
        </div>
        {hitSection}
        <div className={styles.damage}>
            Damage: {attack.attribute} {attack.damage_bonus == 0 ? '' : '+ '+(attack.damage_bonus)}
        </div>
      </div>
  )
}

export default Attack