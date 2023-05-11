import styles from '../../styles/Players.module.scss'

const Attack = ({ pb, ab, attack }) => {

  var activation: JSX.Element = <></>;
  switch (attack.activation) {
      case 'Bonus':
          activation = <span className={styles.activation + ' ' + styles.purple}>B</span>;
          break;
      case 'Reaction':
          activation = <span className={styles.activation + ' ' + styles.red}>R</span>;
          break;
      case 'Action':
          activation = <span className={styles.activation + ' ' + styles.blue}>A</span>;
          break;
      case 'Special':
          activation = <span className={styles.activation + ' ' + styles.orange}>S</span>;
      default:
          break;
  }

  var hitSection: JSX.Element = <></>;
  if (attack.hit) {
    var to_hit = 0;
    if (attack.hit.proficiency != false) to_hit += pb;
    if (attack.hit.attribute) to_hit += ab;
    if (attack.hit.modifier) to_hit += attack.hit.modifier;
    hitSection = (
      <button className={styles.hit_button}>
        +{to_hit}
      </button>
    )
  }

  var damageSection: JSX.Element = <></>;
  if (attack.damage) {
    damageSection = (
      attack.damage.map((damage) => {
        var staticDamage = 0;
        var damageButtonText = "";
        if (damage.dice) damageButtonText += damage.dice;
        if (damage.attribute) staticDamage += ab;
        if (damage.modifier && damage.modifier != 0) staticDamage += damage.modifier;
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
              <strong>{note.label}</strong>
              <div className={styles.tooltip}>{note.text}</div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div key={attack.name}>
      <div className={styles.attack}>
        {activation}
        <div className={styles.attack_name+' '+attack.rarity}>
            {attack.name}:&nbsp;
        </div>
        {hitSection}
        {damageSection}
      </div>
      {notesSection}
    </div>
  )
}

export default Attack