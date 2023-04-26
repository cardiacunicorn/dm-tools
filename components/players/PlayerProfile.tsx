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

    return (
        <div className={styles.profile}>
            <img src={props.image_path} className={styles.profile_image} />
            <h1 className={styles.name} style={{color: props.colour}}>{props.name}</h1>
            <h3 className={styles.race} style={{color: props.colour}}>{props.race}</h3>
            <h3 className={styles.classes} style={{color: props.colour}}>{classesOutput}</h3>
        </div>
    )

}

function outputClass(input) {
    return [input.name]
}