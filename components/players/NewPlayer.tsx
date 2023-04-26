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

export function NewPlayer({ player, ...props }: PlayerDisplay) {

    console.log(player);

    var proficiency = Math.round((player.level + 5) / 4);

    return (
        <div className={styles.player}>
            <InitiativeBox initiative={player.initiative} />
            <PlayerProfile name={player.name} race={player.race} classes={player.classes} colour={player.colour} image_path={player.image_path} />
            <CoreStats hp={player.hp} ac={player.ac} />
            <SecondaryStats spellsave={player.spellsave} passive_perception={player.passive_perception} speed={player.speed} />
            <AttributesSection attributes={player.attributes} proficiencies={player.proficiencies} />
            {/* <FirepowerSection attacks={player.attacks} spells={player.spells} type={player.type} /> */}
            <FeaturesSection features={player.features} />
            <Effects effects={player.effects} />
            <div>
                Name: {player.name}
            </div>
            <div>
                Level: {player.level}
            </div>
            <div>
                Proficiency Bonus: {proficiency}
            </div>
            <div>
                Image Path: {player.image_path}
            </div>
            <div>
                Colour: {player.colour}
            </div>
            <div>
                Race: {player.race}
            </div>
            <div>
                Type: {player.type}
            </div>
            <div>
                Spellsave DC: {player.spellsave}
            </div>
            <div>
                Passive Perception: {player.passive_perception}
            </div>
            <div>
                Speed: {player.speed}
            </div>
        </div>
    )
}