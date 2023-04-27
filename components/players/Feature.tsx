import styles from '../../styles/Players.module.scss'
import Checkbox from '../Checkbox'

const Feature = ({ feature }) => {
    
    const recharge = feature.recharge;

    var uses;

    if (feature.uses) {
        if (feature.uses > 5) {
            uses = feature.uses;
            var quantity = uses + '/' + uses;
        } else {
            // Create an Array from Uses number
            uses = Array.from(Array(feature.uses).keys());
            var quantity = uses.map(( use ) => {
                return <Checkbox key={feature.name + '_' + use} id={feature.name + '_' + use} value={false} />
            })
        }
    }

    var activation
    switch (feature.activation) {
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

  return (
      <div className={styles.feature} key={feature.name}>
        <div className={styles.feature_name+ ' ' + feature.rarity}>
            {activation} {feature.name} ({feature.recharge})
        </div>
        <div className={styles.uses}>
            {quantity}
        </div>
        {/* <div className={styles.feature_effect}>
            {feature.effect}
        </div> */}
      </div>
  )
}

export default Feature