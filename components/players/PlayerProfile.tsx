import { Class } from '../../data/interfaces'
import styles from '../../styles/Players.module.scss'

export interface PlayerProfile {
    name: string,
    race: string,
    classes: Class[],
    colour: string,
    image_path: string,
}

export default function PlayerProfile({ ...props }: PlayerProfile) {

    var classesOutput = "";
    for (let i = 0; i < props.classes.length; i++) {
        classesOutput += props.classes[i].name + ' ' + props.classes[i].levels
        console.log(props.classes.length)
        if (i+1 < props.classes.length) {
            classesOutput += ' / '
        } else if (props.classes[i].subclass) {
            classesOutput += ' (' + props.classes[i].subclass + ')'
        }
    }
    var primary = `${props.classes[0].name} ${props.classes[0].levels} (${props.classes[0].subclass})`

    var secondary;
    if (props.classes[1]) {
        secondary = `${props.classes[1].name} ${props.classes[1].levels}`
        if (props.classes[1].subclass) {
            secondary += ` (${props.classes[1].subclass})`
        }
    }

    return (
        <div className={styles.profile}>
            <img src={props.image_path} className={styles.profile_image} />
            <h1 className={styles.name} style={{color: props.colour}}>{props.name}</h1>
            <h3 className={styles.race} style={{color: props.colour}}>{props.race}</h3>
            <h3 className={styles.classes} style={{color: props.colour}}>
                {primary}<br />
                {secondary}
            </h3>
        </div>
    )

}