import styles from '../../styles/Players.module.scss'
import Checkbox from '../Checkbox'

const Feature = ({ feature }) => {
    
    const recharge = feature.recharge;

    if (feature.uses > 5) {
        var uses = feature.uses;
        var quantity = uses + '/' + uses;
    } else {
        // Create an Array from Uses number
        var uses = Array.from(Array(feature.uses).keys());
        var quantity = uses.map(( use ) => {
            return <Checkbox key={feature.name + '_' + use} id={feature.name + '_' + use} value={false} />
        })
    }

  return (
      <div className={styles.feature} key={feature.name}>
        <div className={styles.feature_name}>
            {feature.name} ({feature.recharge})
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