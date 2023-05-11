import styles from '../../styles/Players.module.scss'
import Checkbox from '../Checkbox'

const Feature = ({ feature }) => {
    
    var recharge: JSX.Element = <></>;
    if (feature.recharge) {
        if (feature.recharge == "LR") {
            recharge = (
                <span className={styles.long_recharge}>
                    L
                </span>
            )
        } else if (feature.recharge == "SR") {
            recharge = (
                <span className={styles.short_recharge}>
                    S
                </span>
            )
        }
    }

    var uses;
    var quantity: JSX.Element = <></>;

    if (feature.uses) {
        if (feature.uses > 5) {
            uses = feature.uses;
            quantity = (
                <div>{`${uses}/${uses}`}</div>
            );
        } else {
            // Create an Array from Uses number
            uses = Array.from(Array(feature.uses).keys());
            quantity = uses.map(( use ) => {
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
            {activation}{feature.name}
        </div>
        <div className={styles.uses}>
            {quantity}{recharge}
        </div>
        <div className={`${styles.tooltip} ${feature.rarity}`}>
            <strong className={feature.rarity}>{feature.name}:</strong> {feature.effect}
        </div>
      </div>
  )
}

export default Feature