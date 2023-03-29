import styles from '../../styles/Players.module.scss'

const SpellLevel = ({ spellLevel }) => {

  return (
      <div className={styles.spell_level}>
        <div className={styles.attack_name}>
            {spellLevel.level}
        </div>
      </div>
  )
}

export default SpellLevel