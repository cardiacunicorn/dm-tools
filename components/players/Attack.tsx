import styles from '../../styles/Players.module.scss'

const Attack = ({ pb, ab, attack }) => {

  const hit = pb + ab + attack.hit_bonus
  let hitSection: JSX.Element = <></>;
  if (hit > -5) {
    hitSection = (
      <div className={styles.hit}>
        +{hit} to hit;&nbsp;
      </div>
    )
  }

  const damageDies = attack.damage_die_quantity+'d'+attack.damage_die
  const damageBonus = ab + attack.damage_bonus
  var damage: string;
  if (damageBonus != 0) {
    damage = damageDies+' +'+damageBonus
  } else {
    damage = damageDies
  }
  let damageSection = (
    <div className={styles.damage}>
      {damage} dmg
    </div>
  )

  return (
      <div className={styles.attack} key={attack.name}>
        <div className={styles.attack_name+' '+attack.rarity}>
            {attack.name}:&nbsp;
        </div>
        {hitSection}
        {damageSection}
      </div>
  )
}

export default Attack