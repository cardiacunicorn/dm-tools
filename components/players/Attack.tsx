import styles from '../../styles/Players.module.scss'

const Attack = ({ pb, ab, attack }) => {

  var hitSection: JSX.Element = <></>;
  if (attack.hit) {
    var to_hit = 0;
    if (attack.hit.proficiency != false) {
      to_hit += pb;
    }
    if (attack.hit.attribute) {
      to_hit += ab;
    }
    if (attack.hit.modifier) {
      to_hit += attack.hit.modifier;
    }
    hitSection = (
      <div className={styles.hit}>
        +{to_hit} to hit;&nbsp;
      </div>
    )
  }

  // const damageDies = attack.damage_die_quantity+'d'+attack.damage_die
  // const damageBonus = ab + attack.damage_bonus
  // var damage: string;
  // if (damageBonus != 0) {
  //   damage = damageDies+' +'+damageBonus
  // } else {
  //   damage = damageDies
  // }
  // let damageSection = (
  //   <div className={styles.damage}>
  //     {damage} dmg
  //   </div>
  // )

  var damageSection: JSX.Element = <></>;
  if (attack.damage) {
    damageSection = (
      attack.damage.map((damage) => {
        var staticDamage = 0;
        var damageButtonText = "";
        if (damage.dice) {
          damageButtonText += damage.dice;
        }
        if (damage.attribute) {
          staticDamage += ab
        }
        if (damage.modifier && damage.modifier != 0) {
          staticDamage += damage.modifier;
        }
        if (staticDamage > 0) {
          damageButtonText += '+' + staticDamage;
        } else if (staticDamage > 0) {
          damageButtonText += '+' + staticDamage;
        }
        return (
          <button className={`${styles.damage_button} ${damage.type}`}>
            {damageButtonText}
          </button>
        )
      })
    )
  }

  let notesSection: JSX.Element = <></>;
  if (attack.notes) {
    notesSection = (
      <div className={styles.attack_notes}>
        {attack.notes.map((note) => {
          return (
            <div className={styles.attack_note}>
              <strong>{note.label}: </strong>
              {note.text}
            </div>
          )
        })}
      </div>
    )
  }

  return (
      <div className={styles.attack} key={attack.name}>
        <div className={styles.attack_name+' '+attack.rarity}>
            {attack.name}:&nbsp;
        </div>
        {hitSection}
        {damageSection}
        {notesSection}
      </div>
  )
}

export default Attack