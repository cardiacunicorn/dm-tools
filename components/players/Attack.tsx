import styles from '../../styles/Players.module.scss'

const Attack = ({ attack }) => {

  return (
      <div className={styles.feature} key={attack.name}>
        <div className={styles.feature_name}>
            {attack.name}
        </div>
        <div className={styles.hit}>
            d20 + {attack.stat} + {attack.hit_bonus}
        </div>
      </div>
  )
}

export default Attack