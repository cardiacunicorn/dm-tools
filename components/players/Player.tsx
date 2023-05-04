import { Player } from "../../data/interfaces"
import styles from '../../styles/Players.module.scss'
import CoreStats from './CoreStats'
import Effects from './Effects'
import SecondaryStats from './SecondaryStats'
import PlayerProfile from './PlayerProfile'
import InitiativeBox from './InitiativeBox'
import FeaturesSection from './FeaturesSection'
import FirepowerSection from './FirepowerSection'
import AttributesSection from './AttributesSection'

export interface PlayerDisplay {
    player: Player
}

export function Player({ player, ...props }: PlayerDisplay) {

    var pb = Math.round((player.level + 5) / 4);

    return (
        <div className={styles.player} id={player.name}>
            <InitiativeBox initiative={player.initiative} />
            <PlayerProfile name={player.name} race={player.race} classes={player.classes} colour={player.colour} image_path={player.image_path} />
            <CoreStats hp={player.hp} ac={player.ac} />
            <SecondaryStats spellsave={player.spellcasting.spellsave} passive_perception={player.passive_perception} speed={player.speed} />
            <AttributesSection attributes={player.attributes} proficiencies={player.proficiencies} />
            <FirepowerSection pb={pb} attacks={player.attacks} spellcasting={player.spellcasting} type={player.type} />
            <FeaturesSection features={player.features} />
            <Effects effects={player.effects} />
        </div>
    )
}