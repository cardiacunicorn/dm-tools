import styles from '../../styles/Players.module.scss'

const PlayerProfile = ({ name, race, classes, colour, image_path }) => {

    return (
        <div className={styles.profile}>
            <img src={image_path} className={styles.profile_image} />
            <h1 className={styles.name} style={{color: colour}}>{name}</h1>
            <h3 className={styles.race} style={{color: colour}}>{race}</h3>
            <h3 className={styles.classes} style={{color: colour}}>{classes}</h3>
        </div>
    )
}

export default PlayerProfile