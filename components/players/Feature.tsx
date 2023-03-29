import React from 'react';
import styles from '../../styles/Players.module.scss'
import Checkbox from '../Checkbox'

const Feature = ({ feature }) => {

    // Create an Array from Uses number
    const uses = Array.from(Array(feature.uses).keys())
    const recharge = feature.recharge;

    console.log(uses);

  return (
      <div className={styles.feature} key={feature.name}>
        <div className={styles.feature_name}>
            {feature.name} ({feature.recharge})
        </div>
        <div className={styles.uses}>
            {uses.map(( use ) => {
                return <Checkbox key={feature.name + '_' + use} id={feature.name + '_' + use} value={false} />
            })}
        </div>
        {/* <div className={styles.feature_effect}>
            {feature.effect}
        </div> */}
      </div>
  )
}

export default Feature