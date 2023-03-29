import styles from '../../styles/Players.module.scss'

const SpellLevel = ({ spellLevel }) => {

  // Create an Array from Uses number
  var total = Array.from(Array(spellLevel.total).keys());
  var used = Array.from(Array(spellLevel.used).keys());

  return (
      <div className={styles.spell_level}>
        <div className={styles.attack_name}>
            Level {spellLevel.level}: {spellLevel.used}/{spellLevel.total}
        </div>
      </div>
  )
}

export default SpellLevel