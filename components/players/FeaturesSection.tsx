import styles from '../../styles/Players.module.scss'
import Feature from './Feature'

const FeaturesSection = ({ features }) => {

    return (
        <div className={styles.features_section}>
            <h3>Features</h3>
            <div className={styles.features_list}>
                {features.map((feature) => {
                    return <Feature feature={feature} key={feature.name} />
                })}
            </div>
        </div>
    )
}

export default FeaturesSection